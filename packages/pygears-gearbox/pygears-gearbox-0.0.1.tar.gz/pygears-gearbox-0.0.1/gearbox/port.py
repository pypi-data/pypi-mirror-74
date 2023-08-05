#!/usr/bin/python
from PySide2 import QtGui, QtCore, QtWidgets

from pygears.core.port import InPort
from .constants import (IN_PORT, OUT_PORT, PORT_HOVER_COLOR,
                        PORT_HOVER_BORDER_COLOR, PORT_ACTIVE_COLOR,
                        PORT_ACTIVE_BORDER_COLOR, Z_VAL_PORT)


class PortItem(QtWidgets.QGraphicsItem):
    """
    Base Port Item.
    """

    def __init__(self, model, parent=None):
        super().__init__(parent)

        self.model = model
        self._name = model.basename
        self._port_type = IN_PORT if isinstance(model, InPort) else OUT_PORT
        self._multi_connection = True
        self.setAcceptHoverEvents(True)
        self.setFlag(self.ItemIsSelectable, False)
        self.setFlag(self.ItemSendsScenePositionChanges, True)
        self.setZValue(Z_VAL_PORT)
        self._pipes = []
        self._width = 10.0
        self._height = 10.0
        self._hovered = False
        self._display_name = True
        self._color = (49, 115, 100, 255)
        self._border_color = (29, 202, 151, 255)
        self._border_size = 1

    def __str__(self):
        return '{}.PortItem("{}")'.format(self.__module__, self.name)

    def __repr__(self):
        return '{}.PortItem("{}")'.format(self.__module__, self.name)

    def boundingRect(self):
        return QtCore.QRectF(0.0, 0.0, self._width, self._height)

    def plug_pos(self, context, direction):
        if self.port_type == IN_PORT:
            rel_pos = self.pos() + QtCore.QPointF(self._width / 2,
                                                  self._height / 2)
        elif self.port_type == OUT_PORT:
            if direction == OUT_PORT:
                rel_pos = self.pos() + QtCore.QPointF(self._width,
                                                      self._height / 2)
            else:
                rel_pos = self.pos() + QtCore.QPointF(0, self._height / 2)

        if context is self.parentItem():
            return rel_pos
        else:
            return self.parentItem().mapToParent(rel_pos)

    def paint(self, painter, option, widget):
        painter.save()

        # rect = QtCore.QRectF(0.0, 0.8, self._width, self._height)
        # painter.setBrush(QtGui.QColor(0, 0, 0, 200))
        # painter.setPen(QtGui.QPen(QtGui.QColor(0, 0, 0, 255), 1.8))
        # path = QtGui.QPainterPath()
        # path.addEllipse(rect)
        # painter.drawPath(path)

        if self._hovered:
            color = QtGui.QColor(*PORT_HOVER_COLOR)
            border_color = QtGui.QColor(*PORT_HOVER_BORDER_COLOR)
        elif self.connected_pipes:
            color = QtGui.QColor(*PORT_ACTIVE_COLOR)
            border_color = QtGui.QColor(*PORT_ACTIVE_BORDER_COLOR)
        else:
            color = QtGui.QColor(*self.color)
            border_color = QtGui.QColor(*self.border_color)

        painter.setBrush(color)
        pen = QtGui.QPen(border_color, 1.5)
        painter.setPen(pen)

        if self.port_type == IN_PORT:
            # painter.drawRect(self.boundingRect())
            painter.drawEllipse(self.boundingRect())
        elif self.port_type == OUT_PORT:
            br = self.boundingRect()
            triangle = QtGui.QPolygonF()
            triangle.push_back(br.topLeft())
            triangle.push_back(br.bottomLeft())
            triangle.push_back(
                QtCore.QPointF(br.topRight() + br.bottomRight()) / 2)
            painter.drawPolygon(triangle)

        painter.restore()

    def itemChange(self, change, value):
        if change == self.ItemScenePositionHasChanged:
            self.redraw_connected_pipes()
        return super(PortItem, self).itemChange(change, value)

    # def mousePressEvent(self, event):
    #     if event.modifiers() != QtCore.Qt.AltModifier:
    #         self.viewer_start_connection()
    #     super(PortItem, self).mousePressEvent(event)

    # def mouseReleaseEvent(self, event):
    #     super(PortItem, self).mouseReleaseEvent(event)

    def hoverEnterEvent(self, event):
        self._hovered = True
        super(PortItem, self).hoverEnterEvent(event)

    def hoverLeaveEvent(self, event):
        self._hovered = False
        super(PortItem, self).hoverLeaveEvent(event)

    def viewer_start_connection(self):
        viewer = self.scene().viewer()
        viewer.start_live_connection(self)

    def redraw_connected_pipes(self):
        if not self.connected_pipes:
            return
        # for pipe in self.connected_pipes:
        #     if self.port_type == IN_PORT:
        #         pipe.draw_path(self, pipe.output_port)
        #     elif self.port_type == OUT_PORT:
        #         pipe.draw_path(pipe.input_port, self)

    def add_pipe(self, pipe):
        self._pipes.append(pipe)

    def remove_pipe(self, pipe):
        self._pipes.remove(pipe)

    @property
    def connected_pipes(self):
        return self._pipes

    @property
    def connected_ports(self):
        ports = []
        port_types = {IN_PORT: 'output_port', OUT_PORT: 'input_port'}
        for pipe in self.connected_pipes:
            ports.append(getattr(pipe, port_types[self.port_type]))
        return ports

    @property
    def node(self):
        return self.parentItem()

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, name=''):
        self._name = name.strip()

    @property
    def display_name(self):
        return self._display_name

    @display_name.setter
    def display_name(self, display=True):
        self._display_name = display

    @property
    def color(self):
        return self._color

    @color.setter
    def color(self, color=(0, 0, 0, 255)):
        self._color = color

    @property
    def border_color(self):
        return self._border_color

    @border_color.setter
    def border_color(self, color=(0, 0, 0, 255)):
        self._border_color = color

    @property
    def border_size(self):
        return self._border_size

    @border_size.setter
    def border_size(self, size=2):
        self._border_size = size

    @property
    def multi_connection(self):
        return self._multi_connection

    @multi_connection.setter
    def multi_connection(self, mode=False):
        conn_type = 'multi' if mode else 'single'
        self.setToolTip('{}: ({})'.format(self.name, conn_type))
        self._multi_connection = mode

    @property
    def port_type(self):
        return self._port_type

    @port_type.setter
    def port_type(self, port_type):
        self._port_type = port_type

    def delete(self):
        for pipe in self.connected_pipes:
            pipe.delete()
