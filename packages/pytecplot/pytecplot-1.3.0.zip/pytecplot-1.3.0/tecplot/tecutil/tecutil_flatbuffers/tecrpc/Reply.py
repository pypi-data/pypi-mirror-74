# automatically generated by the FlatBuffers compiler, do not modify

# namespace: tecrpc

import flatbuffers

class Reply(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsReply(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = Reply()
        x.Init(buf, n + offset)
        return x

    # Reply
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # Reply
    def Status(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint8Flags, o + self._tab.Pos)
        return 0

    # Reply
    def Args(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            x = self._tab.Vector(o)
            x += flatbuffers.number_types.UOffsetTFlags.py_type(j) * 4
            x = self._tab.Indirect(x)
            from .Argument import Argument
            obj = Argument()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # Reply
    def ArgsLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

    # Reply
    def LogLevel(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Uint32Flags, o + self._tab.Pos)
        return 0

    # Reply
    def Log(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

    # Reply
    def Arglist(self, j):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(12))
        if o != 0:
            x = self._tab.Vector(o)
            x += flatbuffers.number_types.UOffsetTFlags.py_type(j) * 4
            x = self._tab.Indirect(x)
            from .ArgListItem import ArgListItem
            obj = ArgListItem()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # Reply
    def ArglistLength(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(12))
        if o != 0:
            return self._tab.VectorLen(o)
        return 0

def ReplyStart(builder): builder.StartObject(5)
def ReplyAddStatus(builder, status): builder.PrependUint8Slot(0, status, 0)
def ReplyAddArgs(builder, args): builder.PrependUOffsetTRelativeSlot(1, flatbuffers.number_types.UOffsetTFlags.py_type(args), 0)
def ReplyStartArgsVector(builder, numElems): return builder.StartVector(4, numElems, 4)
def ReplyAddLogLevel(builder, logLevel): builder.PrependUint32Slot(2, logLevel, 0)
def ReplyAddLog(builder, log): builder.PrependUOffsetTRelativeSlot(3, flatbuffers.number_types.UOffsetTFlags.py_type(log), 0)
def ReplyAddArglist(builder, arglist): builder.PrependUOffsetTRelativeSlot(4, flatbuffers.number_types.UOffsetTFlags.py_type(arglist), 0)
def ReplyStartArglistVector(builder, numElems): return builder.StartVector(4, numElems, 4)
def ReplyEnd(builder): return builder.EndObject()
