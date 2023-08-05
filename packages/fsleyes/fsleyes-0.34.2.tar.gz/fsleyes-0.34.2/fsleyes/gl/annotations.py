#!/usr/bin/env python
#
# annotations.py - 2D annotations on a SliceCanvas.
#
# Author: Paul McCarthy <pauldmccarthy@gmail.com>
#
"""This module provides the :class:`Annotations` class, which implements
functionality to draw 2D OpenGL annotations on a :class:`.SliceCanvas`.


The :class:`Annotations` class is used by the :class:`.SliceCanvas` and
:class:`.LightBoxCanvas` classes, and users of those class, to annotate the
canvas.


All annotations derive from the :class:`AnnotationObject` base class. The
following annotation types are defined:

.. autosummary::
   :nosignatures:

   Line
   Rect
   VoxelGrid
   VoxelSelection
"""


import logging
import time

import numpy       as np
import OpenGL.GL   as gl

import fsleyes.gl.globject       as globject
import fsleyes.gl.routines       as glroutines
import fsleyes.gl.resources      as glresources
import fsleyes.gl.textures       as textures
import fsleyes.gl.textures.data  as texdata
import fsl.transform.affine      as affine


log = logging.getLogger(__name__)


class Annotations(object):
    """An :class:`Annotations` object provides functionality to draw 2D
    annotations on a :class:`.SliceCanvas`. Annotations may be enqueued via
    any of the :meth:`line`, :meth:`rect`, :meth:`grid`, :meth:`selection` or
    :meth:`obj`, methods.


    A call to :meth:`draw` will then draw each of the queued annotations on
    the canvas, and clear the queue.


    If an annotation is to be persisted, it can be enqueued, as above, but
    passing ``hold=True`` to the queueing method.  The annotation will then
    remain in the queue until it is removed via :meth:`dequeue`, or the
    entire annotations queue is cleared via :meth:`clear`.


    Annotations can be queued by one of the helper methods on the
    :class:`Annotations` object (e.g. :meth:`line` or :meth:`rect`), or by
    manually creating an :class:`AnnotationObject` and passing it to the
    :meth:`obj` method.
    """


    def __init__(self, canvas, xax, yax):
        """Creates an :class:`Annotations` object.

        :arg canvas: The :class:`.SliceCanvas` that owns this
                     ``Annotations`` object.

        :arg xax:    Index of the display coordinate system axis that
                     corresponds to the horizontal screen axis.

        :arg yax:    Index of the display coordinate system axis that
                     corresponds to the vertical screen axis.
        """

        self.__q      = []
        self.__holdq  = []
        self.__xax    = xax
        self.__yax    = yax
        self.__zax    = 3 - xax - yax
        self.__canvas = canvas


    @property
    def canvas(self):
        """Returns a ref to the canvas that owns this ``Annotations`` instance.
        """
        return self.__canvas


    def setAxes(self, xax, yax):
        """This method must be called if the display orientation changes.  See
        :meth:`__init__`.
        """

        self.__xax = xax
        self.__yax = yax
        self.__zax = 3 - xax - yax


    def getDisplayBounds(self):
        """Returns a tuple containing the ``(xmin, xmax, ymin, ymax)`` display
        bounds of the ``SliceCanvas`` that owns this ``Annotations`` object.
        """
        return self.__canvas.opts.displayBounds


    def line(self, *args, **kwargs):
        """Queues a line for drawing - see the :class:`Line` class. """
        hold = kwargs.pop('hold', False)
        obj  = Line(self, *args, **kwargs)

        return self.obj(obj, hold)


    def rect(self, *args, **kwargs):
        """Queues a rectangle for drawing - see the :class:`Rectangle` class.
        """
        hold = kwargs.pop('hold', False)
        obj  = Rect(self, *args, **kwargs)

        return self.obj(obj, hold)


    def grid(self, *args, **kwargs):
        """Queues a voxel grid for drawing - see the :class:`VoxelGrid` class.
        """
        hold = kwargs.pop('hold', False)
        obj  = VoxelGrid(self, *args, **kwargs)

        return self.obj(obj, hold)


    def selection(self, *args, **kwargs):
        """Queues a selection for drawing - see the :class:`VoxelSelection`
        class.
        """
        hold = kwargs.pop('hold', False)
        obj  = VoxelSelection(self, *args, **kwargs)

        return self.obj(obj, hold)


    def text(self, *args, **kwargs):
        """Queues a text annotation for drawing - see the :class:`Text`
        class.
        """
        hold = kwargs.pop('hold', False)
        obj  = Text(self, *args, **kwargs)

        return self.obj(obj, hold)


    def obj(self, obj, hold=False):
        """Queues the given :class:`AnnotationObject` for drawing.

        :arg hold: If ``True``, the given ``AnnotationObject`` will be kept in
                   the queue until it is explicitly removed. Otherwise (the
                   default), the object will be removed from the queue after
                   it has been drawn.
        """

        if hold: self.__holdq.append(obj)
        else:    self.__q    .append(obj)

        return obj


    def dequeue(self, obj, hold=False):
        """Removes the given :class:`AnnotationObject` from the queue, but
        does not call its :meth:`.GLObject.destroy` method - this is the
        responsibility of the caller.
        """

        if hold:
            try:               self.__holdq.remove(obj)
            except ValueError: pass
        else:
            try:               self.__q.remove(obj)
            except ValueError: pass


    def clear(self):
        """Clears both the normal queue and the persistent (a.k.a. ``hold``)
        queue, and calls the :meth:`.GLObject.destroy` method on every object
        in the queue.
        """

        for obj in self.__q:     obj.destroy()
        for obj in self.__holdq: obj.destroy()

        self.__q     = []
        self.__holdq = []


    def draw(self, zpos, xform=None, skipHold=False):
        """Draws all enqueued annotations.

        :arg zpos:     Position along the Z axis, above which all annotations
                       should be drawn.

        :arg xform:    Transformation matrix which should be applied to all
                       objects.

        :arg skipHold: Do not draw items on the hold queue - only draw one-off
                       items.
        """

        if not skipHold: objs = self.__holdq + self.__q
        else:            objs = self.__q

        if xform is not None:
            gl.glMatrixMode(gl.GL_MODELVIEW)
            gl.glPushMatrix()
            gl.glMultMatrixf(xform.ravel('F'))

        drawTime = time.time()
        axes     = (self.__xax, self.__yax, self.__zax)

        for obj in objs:

            if obj.expired(drawTime):                    continue
            if not obj.enabled:                          continue
            if obj.zmin is not None and zpos < obj.zmin: continue
            if obj.zmax is not None and zpos > obj.zmax: continue

            if obj.xform is not None:
                gl.glMatrixMode(gl.GL_MODELVIEW)
                gl.glPushMatrix()
                gl.glMultMatrixf(obj.xform.ravel('F'))

            if obj.colour is not None:

                if len(obj.colour) == 3: colour = list(obj.colour) + [1.0]
                else:                    colour = list(obj.colour)

                gl.glColor4f(*colour)

            if obj.width is not None:
                gl.glLineWidth(obj.width)

            try:
                obj.preDraw()
                obj.draw2D(zpos, axes)
                obj.postDraw()
            except Exception as e:
                log.warn('{}'.format(e), exc_info=True)

            if obj.xform is not None:
                gl.glPopMatrix()

        if xform is not None:
            gl.glMatrixMode(gl.GL_MODELVIEW)
            gl.glPopMatrix()

        # Clear the regular queue after each draw
        self.__q = []


class AnnotationObject(globject.GLSimpleObject):
    """Base class for all annotation objects. An ``AnnotationObject`` is drawn
    by an :class:`Annotations` instance. The ``AnnotationObject`` contains some
    attributes which are common to all annotation types:

    ============ =============================================================
    ``colour``   Annotation colour
    ``width``    Annotation line width (if the annotation is made up of lines)
    ``xform``    Custom transformation matrix to apply to annotation vertices.
    ``expiry``   Time (in seconds) after which the annotation will expire and
                 not be drawn.
    ``zmin``     Minimum z value below which this annotation will not be
                 drawn.
    ``zmax``     Maximum z value above which this annotation will not be
                 drawn.
    ``creation`` Time of creation.
    ============ =============================================================

    All of these attributes can be modified directly, after which you should
    trigger a draw on the owning ``SliceCanvas`` to refresh the annotation.
    You shouldn't touch the ``expiry`` or ``creation`` attributes though.

    Subclasses must, at the very least, override the
    :meth:`globject.GLObject.draw2D` method.
    """

    def __init__(self,
                 annot,
                 xform=None,
                 colour=None,
                 width=None,
                 enabled=True,
                 expiry=None,
                 zmin=None,
                 zmax=None):
        """Create an ``AnnotationObject``.

        :arg annot:   The :class:`Annotations` object that created this
                      ``AnnotationObject``.

        :arg xform:   Transformation matrix which will be applied to all
                      vertex coordinates.

        :arg colour:  RGB/RGBA tuple specifying the annotation colour.

        :arg width:   Line width to use for the annotation.

        :arg enabled: Initially enabled or disabled.

        :arg expiry:  Time (in seconds) after which this annotation should be
                      expired and not drawn.

        :arg zmin:    Minimum z value below which this annotation should not
                      be drawn.
        :arg zmax:    Maximum z value above which this annotation should not
                      be drawn.
        """
        globject.GLSimpleObject.__init__(self, False)

        self.annot    = annot
        self.colour   = colour
        self.enabled  = enabled
        self.width    = width
        self.xform    = xform
        self.expiry   = expiry
        self.zmin     = zmin
        self.zmax     = zmax
        self.creation = time.time()

        if self.xform is not None:
            self.xform = np.array(self.xform, dtype=np.float32)


    def resetExpiry(self):
        """Resets the expiry for this ``AnnotationObject`` so that it is
        valid from the current time.
        """
        self.creation = time.time()


    def expired(self, now):
        """Returns ``True`` if this ``Annotation`` has expired, ``False``
        otherwise.

        :arg now: The current time
        """
        if self.expiry is None:
            return False

        return (self.creation + self.expiry) < now


    def preDraw(self, *args, **kwargs):
        gl.glEnableClientState(gl.GL_VERTEX_ARRAY)


    def postDraw(self, *args, **kwargs):
        gl.glDisableClientState(gl.GL_VERTEX_ARRAY)


class Line(AnnotationObject):
    """The ``Line`` class is an :class:`AnnotationObject` which represents a
    2D line.
    """

    def __init__(self, annot, xy1, xy2, *args, **kwargs):
        """Create a ``Line`` annotation.

        The ``xy1`` and ``xy2`` coordinate tuples should be in relation to the
        axes which map to the horizontal/vertical screen axes on the target
        canvas.

        :arg annot: The :class:`Annotations` object that owns this ``Line``.

        :arg xy1:   Tuple containing the (x, y) coordinates of one endpoint.

        :arg xy2:   Tuple containing the (x, y) coordinates of the second
                    endpoint.

        All other arguments are passed through to
        :meth:`AnnotationObject.__init__`.
        """
        AnnotationObject.__init__(self, annot, *args, **kwargs)
        self.xy1 = xy1
        self.xy2 = xy2


    def draw2D(self, zpos, axes):
        """Draws this ``Line`` annotation. """

        xax, yax, zax = axes

        idxs                 = np.arange(2,     dtype=np.uint32)
        verts                = np.zeros((2, 3), dtype=np.float32)
        verts[0, [xax, yax]] = self.xy1
        verts[1, [xax, yax]] = self.xy2
        verts[:, zax]        = zpos
        verts                = verts.ravel('C')

        gl.glVertexPointer(3, gl.GL_FLOAT, 0, verts)
        gl.glDrawElements(gl.GL_LINES, len(idxs), gl.GL_UNSIGNED_INT, idxs)


class Rect(AnnotationObject):
    """The ``Rect`` class is an :class:`AnnotationObject` which represents a
    2D rectangle.
    """

    def __init__(self,
                 annot,
                 xy,
                 w,
                 h,
                 filled=False,
                 fillColour=None,
                 *args,
                 **kwargs):
        """Create a :class:`Rect` annotation.

        :arg annot:      The :class:`Annotations` object that owns this
                         ``Rect``.

        :arg xy:         Tuple specifying bottom left of the rectangle, in
                         the display coordinate system.

        :arg w:          Rectangle width.

        :arg h:          Rectangle height.

        :arg filled:     If ``True``, the rectangle is filled with the
                         ``fillColour``.

        :arg fillColour: If ``filled=True``, the colour to fill the rectangle
                         with. Defaults to a transparent version of the
                         ``colour``.

        All other arguments are passed through to
        :meth:`AnnotationObject.__init__`.
        """
        AnnotationObject.__init__(self, annot, *args, **kwargs)

        self.xy         = xy
        self.w          = w
        self.h          = h
        self.filled     = filled
        self.fillColour = fillColour


    def draw2D(self, zpos, axes):
        """Draws this ``Rectangle`` annotation. """

        if self.w == 0 or self.h == 0:
            return

        xax, yax, zax = axes
        xy            = self.xy
        w             = self.w
        h             = self.h

        bl = [xy[0],     xy[1]]
        br = [xy[0] + w, xy[1]]
        tl = [xy[0],     xy[1] + h]
        tr = [xy[0] + w, xy[1] + h]

        self.__drawRect(zpos, xax, yax, zax, bl, br, tl, tr)

        if self.filled:
            self.__drawFill(zpos, xax, yax, zax, bl, br, tl, tr)


    def __drawFill(self, zpos, xax, yax, zax, bl, br, tl, tr):
        """Draw a filled version of the rectangle. """

        fillColour = self.fillColour

        if fillColour is None:
            if self.colour is not None:
                fillColour = list(self.colour[:3])
            else:
                fillColour = [1, 1, 1]

        if len(fillColour) == 3:
            fillColour = list(fillColour) + [0.2]

        idxs  = np.array([0, 1, 2, 2, 1, 3], dtype=np.uint32)
        verts = np.zeros((4, 3),             dtype=np.float32)

        verts[0, [xax, yax]] = bl
        verts[1, [xax, yax]] = br
        verts[2, [xax, yax]] = tl
        verts[3, [xax, yax]] = tr
        verts[:,  zax]       = zpos
        verts                = verts.ravel('C')

        # I'm assuming that glPolygonMode
        # is already set to GL_FILL
        gl.glColor4f(*fillColour)
        gl.glVertexPointer(3, gl.GL_FLOAT, 0, verts)
        gl.glDrawElements(gl.GL_TRIANGLES, len(idxs), gl.GL_UNSIGNED_INT, idxs)


    def __drawRect(self, zpos, xax, yax, zax, bl, br, tl, tr):
        """Draw the rectangle outline. """

        idxs  = np.array([0, 1, 2, 3, 0, 2, 1, 3], dtype=np.uint32)
        verts = np.zeros((4, 3),                   dtype=np.float32)

        verts[0, [xax, yax]] = bl
        verts[1, [xax, yax]] = br
        verts[2, [xax, yax]] = tl
        verts[3, [xax, yax]] = tr
        verts[:,  zax]       = zpos
        verts                = verts.ravel('C')

        gl.glVertexPointer(3, gl.GL_FLOAT, 0, verts)
        gl.glDrawElements(gl.GL_LINES, len(idxs), gl.GL_UNSIGNED_INT, idxs)


class VoxelGrid(AnnotationObject):
    """The ``VoxelGrid`` is an :class:`AnnotationObject` which represents a
    collection of selected voxels. See also the :class:`VoxelSelection`
    annotation.

    Each selected voxel is highlighted with a rectangle around its border.
    """


    def __init__(self,
                 annot,
                 selectMask,
                 displayToVoxMat,
                 voxToDisplayMat,
                 offsets=None,
                 *args,
                 **kwargs):
        """Create a ``VoxelGrid`` annotation.

        :arg annot:           The :class:`Annotations` object that owns this
                              ``VoxelGrid``.

        :arg selectMask:      A 3D numpy array, the same shape as the image
                              being annotated (or a sub-space of the image -
                              see the ``offsets`` argument),  which is
                              interpreted as a mask array - values which are
                              ``True`` denote selected voxels.

        :arg displayToVoxMat: A transformation matrix which transforms from
                              display space coordinates into voxel space
                              coordinates.

        :arg voxToDisplayMat: A transformation matrix which transforms from
                              voxel coordinates into display space
                              coordinates.

        :arg offsets:         If ``None`` (the default), the ``selectMask``
                              must have the same shape as the image data
                              being annotated. Alternately, you may set
                              ``offsets`` to a sequence of three values,
                              which are used as offsets for the xyz voxel
                              values. This is to allow for a sub-space of
                              the full image space to be annotated.
        """

        kwargs['xform'] = voxToDisplayMat
        AnnotationObject.__init__(self, annot, *args, **kwargs)

        if offsets is None:
            offsets = [0, 0, 0]

        self.displayToVoxMat = displayToVoxMat
        self.selectMask      = selectMask
        self.offsets         = offsets


    def draw2D(self, zpos, axes):
        """Draws this ``VoxelGrid`` annotation. """

        xax, yax, zax = axes
        dispLoc       = [0] * 3
        dispLoc[zax]  = zpos
        voxLoc        = affine.transform([dispLoc], self.displayToVoxMat)[0]

        vox = int(round(voxLoc[zax]))

        restrictions = [slice(None)] * 3
        restrictions[zax] = slice(vox - self.offsets[zax],
                                  vox - self.offsets[zax] + 1)

        xs, ys, zs = np.where(self.selectMask[restrictions])
        voxels     = np.vstack((xs, ys, zs)).T

        for ax in range(3):
            off = restrictions[ax].start
            if off is None:
                off = 0
            voxels[:, ax] += off + self.offsets[ax]

        verts, idxs = glroutines.voxelGrid(voxels, xax, yax, 1, 1)
        verts = verts.ravel('C')

        gl.glVertexPointer(3, gl.GL_FLOAT, 0, verts)
        gl.glDrawElements(gl.GL_LINES, len(idxs), gl.GL_UNSIGNED_INT, idxs)


class VoxelSelection(AnnotationObject):
    """A ``VoxelSelection`` is an :class:`AnnotationObject` which draws
    selected voxels from a :class:`.selection.Selection` instance.  A
    :class:`.SelectionTexture` is used to draw the selected voxels.
    """


    def __init__(self,
                 annot,
                 selection,
                 opts,
                 offsets=None,
                 *args,
                 **kwargs):
        """Create a ``VoxelSelection`` annotation.

        :arg annot:     The :class:`Annotations` object that owns this
                        ``VoxelSelection``.

        :arg selection: A :class:`.selection.Selection` instance which defines
                        the voxels to be highlighted.

        :arg opts:      A :class:`.NiftiOpts` instance which is used
                        for its voxel-to-display transformation matrices.

        :arg offsets:   If ``None`` (the default), the ``selection`` must have
                        the same shape as the image data being
                        annotated. Alternately, you may set ``offsets`` to a
                        sequence of three values, which are used as offsets
                        for the xyz voxel values. This is to allow for a
                        sub-space of the full image space to be annotated.

        All other arguments are passed through to the
        :meth:`AnnotationObject.__init__` method.
        """

        AnnotationObject.__init__(self, annot, *args, **kwargs)

        if offsets is None:
            offsets = [0, 0, 0]

        self.__selection = selection
        self.__opts      = opts
        self.__offsets   = offsets

        texName = '{}_{}'.format(type(self).__name__, id(selection))

        ndims = texdata.numTextureDims(selection.shape)

        if ndims == 2: ttype = textures.SelectionTexture2D
        else:          ttype = textures.SelectionTexture3D

        self.__texture = glresources.get(
            texName,
            ttype,
            texName,
            selection)


    def destroy(self):
        """Must be called when this ``VoxelSelection`` is no longer needed.
        Destroys the :class:`.SelectionTexture`.
        """
        glresources.delete(self.__texture.name)
        self.__texture = None
        self.__opts    = None


    @property
    def texture(self):
        """Return the :class:`.SelectionTexture` used by this
        ``VoxelSelection``.
        """
        return self.__texture


    def draw2D(self, zpos, axes):
        """Draws this ``VoxelSelection``."""

        xax, yax     = axes[:2]
        opts         = self.__opts
        texture      = self.__texture
        shape        = self.__selection.getSelection().shape
        displayToVox = opts.getTransform('display', 'voxel')
        voxToDisplay = opts.getTransform('voxel',   'display')
        voxToTex     = opts.getTransform('voxel',   'texture')
        voxToTex     = affine.concat(texture.texCoordXform(shape), voxToTex)
        verts, voxs  = glroutines.slice2D(shape,
                                          xax,
                                          yax,
                                          zpos,
                                          voxToDisplay,
                                          displayToVox)

        texs  = affine.transform(voxs, voxToTex)[:, :texture.ndim]
        verts = np.array(verts, dtype=np.float32).ravel('C')
        texs  = np.array(texs,  dtype=np.float32).ravel('C')

        texture.bindTexture(gl.GL_TEXTURE0)
        gl.glClientActiveTexture(gl.GL_TEXTURE0)
        gl.glTexEnvf(gl.GL_TEXTURE_ENV, gl.GL_TEXTURE_ENV_MODE, gl.GL_MODULATE)

        with glroutines.enabled((texture.target,
                                 gl.GL_TEXTURE_COORD_ARRAY,
                                 gl.GL_VERTEX_ARRAY)):
            gl.glVertexPointer(  3,            gl.GL_FLOAT, 0, verts)
            gl.glTexCoordPointer(texture.ndim, gl.GL_FLOAT, 0, texs)
            gl.glDrawArrays(     gl.GL_TRIANGLES, 0, 6)

        texture.unbindTexture()


class Text(AnnotationObject):
    """A ``Text`` is an :class:`AnnotationObject` which draws a string of
    text on the display.
    """


    def __init__(self,
                 annot,
                 text,
                 xpos,
                 ypos,
                 fontSize=10,
                 xoff=None,
                 yoff=None,
                 halign=None,
                 valign=None,
                 bgColour=None,
                 angle=None,
                 *args,
                 **kwargs):
        """Create a ``Text`` annotation.

        :arg annot:    The :class:`Annotations` object that owns this
                       ``Text``.

        :arg text:     The text to draw.

        :arg xpos:     Position along the horizontal axis as a proportion
                       between 0  (left) and 1 (right).

        :arg xpos:     Position along the vertial axis as a proportion
                       between 0 (bottom) and 1 (top).

        :arg xoff:     Fixed horizontal offset in pixels

        :arg yoff:     Fixed vertical offset in pixels

        :arg fontSize: Font size.

        :arg halign:   Horizontal alignemnt - ``'left'``, ``'centre'``, or
                       ``right``.

        :arg valign:   Vertical alignemnt - ``'bottom'``, ``'centre'``, or
                       ``top``.

        :arg bcColour: If not ``None``, a border will be drawn around the
                       text.

        :arg angle:    Angle, in degrees, by which to rotate the text.
                       NOT IMPLEMENTED YET
        """

        AnnotationObject.__init__(self, annot, *args, **kwargs)

        # We need to know the text size in pixels
        # in order to correctly align/offset the
        # text on the display. But we don't want
        # to have to calculate the size on every
        # draw. Therefore, updates to the text and
        # font size attributes are protected,
        # because they affect the final pixel text
        # size. When they are changed, we clear the
        # __textSize attribute to indicate that the
        # text size needs to be re-calculated.
        self.__text     = text
        self.__fontSize = fontSize
        self.__textSize = None

        self.xpos       = xpos
        self.ypos       = ypos
        self.xoff       = xoff
        self.yoff       = yoff
        self.bgColour   = bgColour
        self.halign     = halign
        self.valign     = valign
        self.angle      = angle


    @property
    def text(self):
        """Returns the current text value."""
        return self.__text


    @text.setter
    def text(self, value):
        """Update the text."""
        self.__text     = value
        self.__textSize = None


    @property
    def fontSize(self):
        """Returns the current font size."""
        return self.__fontSize


    @fontSize.setter
    def fontSize(self, value):
        """Update the font size."""
        self.__fontSize = value
        self.__textSize = None


    def draw2D(self, zpos, axes):
        """Draws this ``Text`` annotation. """

        canvasSize = self.annot.canvas.GetSize()
        pos        = [self.xpos * canvasSize[0], self.ypos * canvasSize[1]]

        if self.__textSize is None:
            self.__textSize = glroutines.text2D(self.text,
                                                pos,
                                                self.fontSize,
                                                canvasSize,
                                                calcSize=True)

        textSize = self.__textSize

        if   self.halign == 'centre': pos[0] -= textSize[0] / 2.0
        elif self.halign == 'right':  pos[0] -= textSize[0]

        if   self.valign == 'centre': pos[1] -= textSize[1] / 2.0
        elif self.valign == 'top':    pos[1] -= textSize[1]

        if self.xoff is not None: pos[0] += self.xoff
        if self.yoff is not None: pos[1] += self.yoff

        glroutines.text2D(self.text, pos, self.fontSize, canvasSize)
