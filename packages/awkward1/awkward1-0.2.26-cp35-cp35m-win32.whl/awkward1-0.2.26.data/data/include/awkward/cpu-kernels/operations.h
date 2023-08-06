// BSD 3-Clause License; see https://github.com/scikit-hep/awkward-1.0/blob/master/LICENSE

#ifndef AWKWARDCPU_OPERATIONS_H_
#define AWKWARDCPU_OPERATIONS_H_

#include "awkward/common.h"

extern "C" {
  EXPORT_SYMBOL struct Error
    awkward_ListArray32_num_64(
      int64_t* tonum,
      const int32_t* fromstarts,
      int64_t startsoffset,
      const int32_t* fromstops,
      int64_t stopsoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_ListArrayU32_num_64(
      int64_t* tonum,
      const uint32_t* fromstarts,
      int64_t startsoffset,
      const uint32_t* fromstops,
      int64_t stopsoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_ListArray64_num_64(
      int64_t* tonum,
      const int64_t* fromstarts,
      int64_t startsoffset,
      const int64_t* fromstops,
      int64_t stopsoffset,
      int64_t length);

  EXPORT_SYMBOL struct Error
    awkward_RegularArray_num_64(
      int64_t* tonum,
      int64_t size,
      int64_t length);

  EXPORT_SYMBOL struct Error
    awkward_ListOffsetArray32_flatten_offsets_64(
      int64_t* tooffsets,
      const int32_t* outeroffsets,
      int64_t outeroffsetsoffset,
      int64_t outeroffsetslen,
      const int64_t* inneroffsets,
      int64_t inneroffsetsoffset,
      int64_t inneroffsetslen);
  EXPORT_SYMBOL struct Error
    awkward_ListOffsetArrayU32_flatten_offsets_64(
      int64_t* tooffsets,
      const uint32_t* outeroffsets,
      int64_t outeroffsetsoffset,
      int64_t outeroffsetslen,
      const int64_t* inneroffsets,
      int64_t inneroffsetsoffset,
      int64_t inneroffsetslen);
  EXPORT_SYMBOL struct Error
    awkward_ListOffsetArray64_flatten_offsets_64(
      int64_t* tooffsets,
      const int64_t* outeroffsets,
      int64_t outeroffsetsoffset,
      int64_t outeroffsetslen,
      const int64_t* inneroffsets,
      int64_t inneroffsetsoffset,
      int64_t inneroffsetslen);

  EXPORT_SYMBOL struct Error
    awkward_IndexedArray32_flatten_none2empty_64(
      int64_t* outoffsets,
      const int32_t* outindex,
      int64_t outindexoffset,
      int64_t outindexlength,
      const int64_t* offsets,
      int64_t offsetsoffset,
      int64_t offsetslength);
  EXPORT_SYMBOL struct Error
    awkward_IndexedArrayU32_flatten_none2empty_64(
      int64_t* outoffsets,
      const uint32_t* outindex,
      int64_t outindexoffset,
      int64_t outindexlength,
      const int64_t* offsets,
      int64_t offsetsoffset,
      int64_t offsetslength);
  EXPORT_SYMBOL struct Error
    awkward_IndexedArray64_flatten_none2empty_64(
      int64_t* outoffsets,
      const int64_t* outindex,
      int64_t outindexoffset,
      int64_t outindexlength,
      const int64_t* offsets,
      int64_t offsetsoffset,
      int64_t offsetslength);

  EXPORT_SYMBOL struct Error
    awkward_UnionArray32_flatten_length_64(
      int64_t* total_length,
      const int8_t* fromtags,
      int64_t fromtagsoffset,
      const int32_t* fromindex,
      int64_t fromindexoffset,
      int64_t length,
      int64_t** offsetsraws,
      int64_t* offsetsoffsets);
  EXPORT_SYMBOL struct Error
    awkward_UnionArrayU32_flatten_length_64(
      int64_t* total_length,
      const int8_t* fromtags,
      int64_t fromtagsoffset,
      const uint32_t* fromindex,
      int64_t fromindexoffset,
      int64_t length,
      int64_t** offsetsraws,
      int64_t* offsetsoffsets);
  EXPORT_SYMBOL struct Error
    awkward_UnionArray64_flatten_length_64(
      int64_t* total_length,
      const int8_t* fromtags,
      int64_t fromtagsoffset,
      const int64_t* fromindex,
      int64_t fromindexoffset,
      int64_t length,
      int64_t** offsetsraws,
      int64_t* offsetsoffsets);

  EXPORT_SYMBOL struct Error
    awkward_UnionArray32_flatten_combine_64(
      int8_t* totags,
      int64_t* toindex,
      int64_t* tooffsets,
      const int8_t* fromtags,
      int64_t fromtagsoffset,
      const int32_t* fromindex,
      int64_t fromindexoffset,
      int64_t length,
      int64_t** offsetsraws,
      int64_t* offsetsoffsets);
  EXPORT_SYMBOL struct Error
    awkward_UnionArrayU32_flatten_combine_64(
      int8_t* totags,
      int64_t* toindex,
      int64_t* tooffsets,
      const int8_t* fromtags,
      int64_t fromtagsoffset,
      const uint32_t* fromindex,
      int64_t fromindexoffset,
      int64_t length,
      int64_t** offsetsraws,
      int64_t* offsetsoffsets);
  EXPORT_SYMBOL struct Error
    awkward_UnionArray64_flatten_combine_64(
      int8_t* totags,
      int64_t* toindex,
      int64_t* tooffsets,
      const int8_t* fromtags,
      int64_t fromtagsoffset,
      const int64_t* fromindex,
      int64_t fromindexoffset,
      int64_t length,
      int64_t** offsetsraws,
      int64_t* offsetsoffsets);

  EXPORT_SYMBOL struct Error
    awkward_IndexedArray32_flatten_nextcarry_64(
      int64_t* tocarry,
      const int32_t* fromindex,
      int64_t indexoffset,
      int64_t lenindex,
      int64_t lencontent);
  EXPORT_SYMBOL struct Error
    awkward_IndexedArrayU32_flatten_nextcarry_64(
      int64_t* tocarry,
      const uint32_t* fromindex,
      int64_t indexoffset,
      int64_t lenindex,
      int64_t lencontent);
  EXPORT_SYMBOL struct Error
    awkward_IndexedArray64_flatten_nextcarry_64(
      int64_t* tocarry,
      const int64_t* fromindex,
      int64_t indexoffset,
      int64_t lenindex,
      int64_t lencontent);

  EXPORT_SYMBOL struct Error
    awkward_IndexedArray32_overlay_mask8_to64(
      int64_t* toindex,
      const int8_t* mask,
      int64_t maskoffset,
      const int32_t* fromindex,
      int64_t indexoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_IndexedArrayU32_overlay_mask8_to64(
      int64_t* toindex,
      const int8_t* mask,
      int64_t maskoffset,
      const uint32_t* fromindex,
      int64_t indexoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_IndexedArray64_overlay_mask8_to64(
      int64_t* toindex,
      const int8_t* mask,
      int64_t maskoffset,
      const int64_t* fromindex,
      int64_t indexoffset,
      int64_t length);

  EXPORT_SYMBOL struct Error
    awkward_IndexedArray32_mask8(
      int8_t* tomask,
      const int32_t* fromindex,
      int64_t indexoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_IndexedArrayU32_mask8(
      int8_t* tomask,
      const uint32_t* fromindex,
      int64_t indexoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_IndexedArray64_mask8(
      int8_t* tomask,
      const int64_t* fromindex,
      int64_t indexoffset,
      int64_t length);

  EXPORT_SYMBOL struct Error
    awkward_ByteMaskedArray_mask8(
      int8_t* tomask,
      const int8_t* frommask,
      int64_t maskoffset,
      int64_t length,
      bool validwhen);

  EXPORT_SYMBOL struct Error
    awkward_zero_mask8(
      int8_t* tomask,
      int64_t length);

  EXPORT_SYMBOL struct Error
    awkward_IndexedArray32_simplify32_to64(
      int64_t* toindex,
      const int32_t* outerindex,
      int64_t outeroffset,
      int64_t outerlength,
      const int32_t* innerindex,
      int64_t inneroffset,
      int64_t innerlength);
  EXPORT_SYMBOL struct Error
    awkward_IndexedArray32_simplifyU32_to64(
      int64_t* toindex,
      const int32_t* outerindex,
      int64_t outeroffset,
      int64_t outerlength,
      const uint32_t* innerindex,
      int64_t inneroffset,
      int64_t innerlength);
  EXPORT_SYMBOL struct Error
    awkward_IndexedArray32_simplify64_to64(
      int64_t* toindex,
      const int32_t* outerindex,
      int64_t outeroffset,
      int64_t outerlength,
      const int64_t* innerindex,
      int64_t inneroffset,
      int64_t innerlength);
  EXPORT_SYMBOL struct Error
    awkward_IndexedArrayU32_simplify32_to64(
      int64_t* toindex,
      const uint32_t* outerindex,
      int64_t outeroffset,
      int64_t outerlength,
      const int32_t* innerindex,
      int64_t inneroffset,
      int64_t innerlength);
  EXPORT_SYMBOL struct Error
    awkward_IndexedArrayU32_simplifyU32_to64(
      int64_t* toindex,
      const uint32_t* outerindex,
      int64_t outeroffset,
      int64_t outerlength,
      const uint32_t* innerindex,
      int64_t inneroffset,
      int64_t innerlength);
  EXPORT_SYMBOL struct Error
    awkward_IndexedArrayU32_simplify64_to64(
      int64_t* toindex,
      const uint32_t* outerindex,
      int64_t outeroffset,
      int64_t outerlength,
      const int64_t* innerindex,
      int64_t inneroffset,
      int64_t innerlength);
  EXPORT_SYMBOL struct Error
    awkward_IndexedArray64_simplify32_to64(
      int64_t* toindex,
      const int64_t* outerindex,
      int64_t outeroffset,
      int64_t outerlength,
      const int32_t* innerindex,
      int64_t inneroffset,
      int64_t innerlength);
  EXPORT_SYMBOL struct Error
    awkward_IndexedArray64_simplifyU32_to64(
      int64_t* toindex,
      const int64_t* outerindex,
      int64_t outeroffset,
      int64_t outerlength,
      const uint32_t* innerindex,
      int64_t inneroffset,
      int64_t innerlength);
  EXPORT_SYMBOL struct Error
    awkward_IndexedArray64_simplify64_to64(
      int64_t* toindex,
      const int64_t* outerindex,
      int64_t outeroffset,
      int64_t outerlength,
      const int64_t* innerindex,
      int64_t inneroffset,
      int64_t innerlength);

  EXPORT_SYMBOL struct Error
    awkward_RegularArray_compact_offsets64(
      int64_t* tooffsets,
      int64_t length,
      int64_t size);

  EXPORT_SYMBOL struct Error
    awkward_ListArray32_compact_offsets_64(
      int64_t* tooffsets,
      const int32_t* fromstarts,
      const int32_t* fromstops,
      int64_t startsoffset,
      int64_t stopsoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_ListArrayU32_compact_offsets_64(
      int64_t* tooffsets,
      const uint32_t* fromstarts,
      const uint32_t* fromstops,
      int64_t startsoffset,
      int64_t stopsoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_ListArray64_compact_offsets_64(
      int64_t* tooffsets,
      const int64_t* fromstarts,
      const int64_t* fromstops,
      int64_t startsoffset,
      int64_t stopsoffset,
      int64_t length);

  EXPORT_SYMBOL struct Error
    awkward_ListOffsetArray32_compact_offsets_64(
      int64_t* tooffsets,
      const int32_t* fromoffsets,
      int64_t offsetsoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_ListOffsetArrayU32_compact_offsets_64(
      int64_t* tooffsets,
      const uint32_t* fromoffsets,
      int64_t offsetsoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_ListOffsetArray64_compact_offsets_64(
      int64_t* tooffsets,
      const int64_t* fromoffsets,
      int64_t offsetsoffset,
      int64_t length);

  EXPORT_SYMBOL struct Error
    awkward_ListArray32_broadcast_tooffsets_64(
      int64_t* tocarry,
      const int64_t* fromoffsets,
      int64_t offsetsoffset,
      int64_t offsetslength,
      const int32_t* fromstarts,
      int64_t startsoffset,
      const int32_t* fromstops,
      int64_t stopsoffset,
      int64_t lencontent);
  EXPORT_SYMBOL struct Error
    awkward_ListArrayU32_broadcast_tooffsets_64(
      int64_t* tocarry,
      const int64_t* fromoffsets,
      int64_t offsetsoffset,
      int64_t offsetslength,
      const uint32_t* fromstarts,
      int64_t startsoffset,
      const uint32_t* fromstops,
      int64_t stopsoffset,
      int64_t lencontent);
  EXPORT_SYMBOL struct Error
    awkward_ListArray64_broadcast_tooffsets_64(
      int64_t* tocarry,
      const int64_t* fromoffsets,
      int64_t offsetsoffset,
      int64_t offsetslength,
      const int64_t* fromstarts,
      int64_t startsoffset,
      const int64_t* fromstops,
      int64_t stopsoffset,
      int64_t lencontent);

  EXPORT_SYMBOL struct Error
    awkward_RegularArray_broadcast_tooffsets_64(
      const int64_t* fromoffsets,
      int64_t offsetsoffset,
      int64_t offsetslength,
      int64_t size);

  EXPORT_SYMBOL struct Error
    awkward_RegularArray_broadcast_tooffsets_size1_64(
      int64_t* tocarry,
      const int64_t* fromoffsets,
      int64_t offsetsoffset,
      int64_t offsetslength);

  EXPORT_SYMBOL struct Error
    awkward_ListOffsetArray32_toRegularArray(
      int64_t* size,
      const int32_t* fromoffsets,
      int64_t offsetsoffset,
      int64_t offsetslength);
  EXPORT_SYMBOL struct Error
    awkward_ListOffsetArrayU32_toRegularArray(
      int64_t* size,
      const uint32_t* fromoffsets,
      int64_t offsetsoffset,
      int64_t offsetslength);
  EXPORT_SYMBOL struct Error
    awkward_ListOffsetArray64_toRegularArray(
      int64_t* size,
      const int64_t* fromoffsets,
      int64_t offsetsoffset,
      int64_t offsetslength);

  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_tobool_frombool(
      bool* toptr,
      int64_t tooffset,
      const bool* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_toint8_frombool(
      int8_t* toptr,
      int64_t tooffset,
      const bool* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_toint16_frombool(
      int16_t* toptr,
      int64_t tooffset,
      const bool* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_toint32_frombool(
      int32_t* toptr,
      int64_t tooffset,
      const bool* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_toint64_frombool(
      int64_t* toptr,
      int64_t tooffset,
      const bool* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_touint8_frombool(
      uint8_t* toptr,
      int64_t tooffset,
      const bool* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_touint16_frombool(
      uint16_t* toptr,
      int64_t tooffset,
      const bool* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_touint32_frombool(
      uint32_t* toptr,
      int64_t tooffset,
      const bool* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_touint64_frombool(
      uint64_t* toptr,
      int64_t tooffset,
      const bool* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_tofloat32_frombool(
      float* toptr,
      int64_t tooffset,
      const bool* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_tofloat64_frombool(
      double* toptr,
      int64_t tooffset,
      const bool* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_toint8_fromint8(
      int8_t* toptr,
      int64_t tooffset,
      const int8_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_toint16_fromint8(
      int16_t* toptr,
      int64_t tooffset,
      const int8_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_toint32_fromint8(
      int32_t* toptr,
      int64_t tooffset,
      const int8_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_toint64_fromint8(
      int64_t* toptr,
      int64_t tooffset,
      const int8_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_tofloat32_fromint8(
      float* toptr,
      int64_t tooffset,
      const int8_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_tofloat64_fromint8(
      double* toptr,
      int64_t tooffset,
      const int8_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_toint16_fromint16(
      int16_t* toptr,
      int64_t tooffset,
      const int16_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_toint32_fromint16(
      int32_t* toptr,
      int64_t tooffset,
      const int16_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_toint64_fromint16(
      int64_t* toptr,
      int64_t tooffset,
      const int16_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_tofloat32_fromint16(
      float* toptr,
      int64_t tooffset,
      const int16_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_tofloat64_fromint16(
      double* toptr,
      int64_t tooffset,
      const int16_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_toint32_fromint32(
      int32_t* toptr,
      int64_t tooffset,
      const int32_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_toint64_fromint32(
      int64_t* toptr,
      int64_t tooffset,
      const int32_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_tofloat32_fromint32(
      float* toptr,
      int64_t tooffset,
      const int32_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_tofloat64_fromint32(
      double* toptr,
      int64_t tooffset,
      const int32_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_toint64_fromint64(
      int64_t* toptr,
      int64_t tooffset,
      const int64_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_tofloat32_fromint64(
      float* toptr,
      int64_t tooffset,
      const int64_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_tofloat64_fromint64(
      double* toptr,
      int64_t tooffset,
      const int64_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_toint16_fromuint8(
      int16_t* toptr,
      int64_t tooffset,
      const uint8_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_toint32_fromuint8(
      int32_t* toptr,
      int64_t tooffset,
      const uint8_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_toint64_fromuint8(
      int64_t* toptr,
      int64_t tooffset,
      const uint8_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_touint8_fromuint8(
      uint8_t* toptr,
      int64_t tooffset,
      const uint8_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_touint16_fromuint8(
      uint16_t* toptr,
      int64_t tooffset,
      const uint8_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_touint32_fromuint8(
      uint32_t* toptr,
      int64_t tooffset,
      const uint8_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_touint64_fromuint8(
      uint64_t* toptr,
      int64_t tooffset,
      const uint8_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_tofloat32_fromuint8(
      float* toptr,
      int64_t tooffset,
      const uint8_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_tofloat64_fromuint8(
      double* toptr,
      int64_t tooffset,
      const uint8_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_toint32_fromuint16(
      int32_t* toptr,
      int64_t tooffset,
      const uint16_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_toint64_fromuint16(
      int64_t* toptr,
      int64_t tooffset,
      const uint16_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_touint16_fromuint16(
      uint16_t* toptr,
      int64_t tooffset,
      const uint16_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_touint32_fromuint16(
      uint32_t* toptr,
      int64_t tooffset,
      const uint16_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_touint64_fromuint16(
      uint64_t* toptr,
      int64_t tooffset,
      const uint16_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_tofloat32_fromuint16(
      float* toptr,
      int64_t tooffset,
      const uint16_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_tofloat64_fromuint16(
      double* toptr,
      int64_t tooffset,
      const uint16_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_toint64_fromuint32(
      int64_t* toptr,
      int64_t tooffset,
      const uint32_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_touint32_fromuint32(
      uint32_t* toptr,
      int64_t tooffset,
      const uint32_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_touint64_fromuint32(
      uint64_t* toptr,
      int64_t tooffset,
      const uint32_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_tofloat32_fromuint32(
      float* toptr,
      int64_t tooffset,
      const uint32_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_tofloat64_fromuint32(
      double* toptr,
      int64_t tooffset,
      const uint32_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_touint64_fromuint64(
      uint64_t* toptr,
      int64_t tooffset,
      const uint64_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_toint64_fromuint64(
      int64_t* toptr,
      int64_t tooffset,
      const uint64_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_tofloat32_fromuint64(
      float* toptr,
      int64_t tooffset,
      const uint64_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_tofloat64_fromuint64(
      double* toptr,
      int64_t tooffset,
      const uint64_t* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_tofloat32_fromfloat32(
      float* toptr,
      int64_t tooffset,
      const float* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_tofloat64_fromfloat32(
      double* toptr,
      int64_t tooffset,
      const float* fromptr,
      int64_t fromoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_NumpyArray_fill_tofloat64_fromfloat64(
      double* toptr,
      int64_t tooffset,
      const double* fromptr,
      int64_t fromoffset,
      int64_t length);

  EXPORT_SYMBOL struct Error
    awkward_ListArray_fill_to64_from32(
      int64_t* tostarts,
      int64_t tostartsoffset,
      int64_t* tostops,
      int64_t tostopsoffset,
      const int32_t* fromstarts,
      int64_t fromstartsoffset,
      const int32_t* fromstops,
      int64_t fromstopsoffset,
      int64_t length,
      int64_t base);
  EXPORT_SYMBOL struct Error
    awkward_ListArray_fill_to64_fromU32(
      int64_t* tostarts,
      int64_t tostartsoffset,
      int64_t* tostops,
      int64_t tostopsoffset,
      const uint32_t* fromstarts,
      int64_t fromstartsoffset,
      const uint32_t* fromstops,
      int64_t fromstopsoffset,
      int64_t length,
      int64_t base);
  EXPORT_SYMBOL struct Error
    awkward_ListArray_fill_to64_from64(
      int64_t* tostarts,
      int64_t tostartsoffset,
      int64_t* tostops,
      int64_t tostopsoffset,
      const int64_t* fromstarts,
      int64_t fromstartsoffset,
      const int64_t* fromstops,
      int64_t fromstopsoffset,
      int64_t length,
      int64_t base);

  EXPORT_SYMBOL struct Error
    awkward_IndexedArray_fill_to64_from32(
      int64_t* toindex,
      int64_t toindexoffset,
      const int32_t* fromindex,
      int64_t fromindexoffset,
      int64_t length,
      int64_t base);
  EXPORT_SYMBOL struct Error
    awkward_IndexedArray_fill_to64_fromU32(
      int64_t* toindex,
      int64_t toindexoffset,
      const uint32_t* fromindex,
      int64_t fromindexoffset,
      int64_t length,
      int64_t base);
  EXPORT_SYMBOL struct Error
    awkward_IndexedArray_fill_to64_from64(
      int64_t* toindex,
      int64_t toindexoffset,
      const int64_t* fromindex,
      int64_t fromindexoffset,
      int64_t length,
      int64_t base);

  EXPORT_SYMBOL struct Error
    awkward_IndexedArray_fill_to64_count(
      int64_t* toindex,
      int64_t toindexoffset,
      int64_t length,
      int64_t base);

  EXPORT_SYMBOL struct Error
    awkward_UnionArray_filltags_to8_from8(
      int8_t* totags,
      int64_t totagsoffset,
      const int8_t* fromtags,
      int64_t fromtagsoffset,
      int64_t length,
      int64_t base);

  EXPORT_SYMBOL struct Error
    awkward_UnionArray_fillindex_to64_from32(
      int64_t* toindex,
      int64_t toindexoffset,
      const int32_t* fromindex,
      int64_t fromindexoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_UnionArray_fillindex_to64_fromU32(
      int64_t* toindex,
      int64_t toindexoffset,
      const uint32_t* fromindex,
      int64_t fromindexoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_UnionArray_fillindex_to64_from64(
      int64_t* toindex,
      int64_t toindexoffset,
      const int64_t* fromindex,
      int64_t fromindexoffset,
      int64_t length);

  EXPORT_SYMBOL struct Error
    awkward_UnionArray_filltags_to8_const(
      int8_t* totags,
      int64_t totagsoffset,
      int64_t length,
      int64_t base);

  EXPORT_SYMBOL struct Error
    awkward_UnionArray_fillindex_to64_count(
      int64_t* toindex,
      int64_t toindexoffset,
      int64_t length);

  EXPORT_SYMBOL struct Error
    awkward_UnionArray8_32_simplify8_32_to8_64(
      int8_t* totags,
      int64_t* toindex,
      const int8_t* outertags,
      int64_t outertagsoffset,
      const int32_t* outerindex,
      int64_t outerindexoffset,
      const int8_t* innertags,
      int64_t innertagsoffset,
      const int32_t* innerindex,
      int64_t innerindexoffset,
      int64_t towhich,
      int64_t innerwhich,
      int64_t outerwhich,
      int64_t length,
      int64_t base);
  EXPORT_SYMBOL struct Error
    awkward_UnionArray8_32_simplify8_U32_to8_64(
      int8_t* totags,
      int64_t* toindex,
      const int8_t* outertags,
      int64_t outertagsoffset,
      const int32_t* outerindex,
      int64_t outerindexoffset,
      const int8_t* innertags,
      int64_t innertagsoffset,
      const uint32_t* innerindex,
      int64_t innerindexoffset,
      int64_t towhich,
      int64_t innerwhich,
      int64_t outerwhich,
      int64_t length,
      int64_t base);
  EXPORT_SYMBOL struct Error
    awkward_UnionArray8_32_simplify8_64_to8_64(
      int8_t* totags,
      int64_t* toindex,
      const int8_t* outertags,
      int64_t outertagsoffset,
      const int32_t* outerindex,
      int64_t outerindexoffset,
      const int8_t* innertags,
      int64_t innertagsoffset,
      const int64_t* innerindex,
      int64_t innerindexoffset,
      int64_t towhich,
      int64_t innerwhich,
      int64_t outerwhich,
      int64_t length,
      int64_t base);
  EXPORT_SYMBOL struct Error
    awkward_UnionArray8_U32_simplify8_32_to8_64(
      int8_t* totags,
      int64_t* toindex,
      const int8_t* outertags,
      int64_t outertagsoffset,
      const uint32_t* outerindex,
      int64_t outerindexoffset,
      const int8_t* innertags,
      int64_t innertagsoffset,
      const int32_t* innerindex,
      int64_t innerindexoffset,
      int64_t towhich,
      int64_t innerwhich,
      int64_t outerwhich,
      int64_t length,
      int64_t base);
  EXPORT_SYMBOL struct Error
    awkward_UnionArray8_U32_simplify8_U32_to8_64(
      int8_t* totags,
      int64_t* toindex,
      const int8_t* outertags,
      int64_t outertagsoffset,
      const uint32_t* outerindex,
      int64_t outerindexoffset,
      const int8_t* innertags,
      int64_t innertagsoffset,
      const uint32_t* innerindex,
      int64_t innerindexoffset,
      int64_t towhich,
      int64_t innerwhich,
      int64_t outerwhich,
      int64_t length,
      int64_t base);
  EXPORT_SYMBOL struct Error
    awkward_UnionArray8_U32_simplify8_64_to8_64(
      int8_t* totags,
      int64_t* toindex,
      const int8_t* outertags,
      int64_t outertagsoffset,
      const uint32_t* outerindex,
      int64_t outerindexoffset,
      const int8_t* innertags,
      int64_t innertagsoffset,
      const int64_t* innerindex,
      int64_t innerindexoffset,
      int64_t towhich,
      int64_t innerwhich,
      int64_t outerwhich,
      int64_t length,
      int64_t base);
  EXPORT_SYMBOL struct Error
    awkward_UnionArray8_64_simplify8_32_to8_64(
      int8_t* totags,
      int64_t* toindex,
      const int8_t* outertags,
      int64_t outertagsoffset,
      const int64_t* outerindex,
      int64_t outerindexoffset,
      const int8_t* innertags,
      int64_t innertagsoffset,
      const int32_t* innerindex,
      int64_t innerindexoffset,
      int64_t towhich,
      int64_t innerwhich,
      int64_t outerwhich,
      int64_t length,
      int64_t base);
  EXPORT_SYMBOL struct Error
    awkward_UnionArray8_64_simplify8_U32_to8_64(
      int8_t* totags,
      int64_t* toindex,
      const int8_t* outertags,
      int64_t outertagsoffset,
      const int64_t* outerindex,
      int64_t outerindexoffset,
      const int8_t* innertags,
      int64_t innertagsoffset,
      const uint32_t* innerindex,
      int64_t innerindexoffset,
      int64_t towhich,
      int64_t innerwhich,
      int64_t outerwhich,
      int64_t length,
      int64_t base);
  EXPORT_SYMBOL struct Error
    awkward_UnionArray8_64_simplify8_64_to8_64(
      int8_t* totags,
      int64_t* toindex,
      const int8_t* outertags,
      int64_t outertagsoffset,
      const int64_t* outerindex,
      int64_t outerindexoffset,
      const int8_t* innertags,
      int64_t innertagsoffset,
      const int64_t* innerindex,
      int64_t innerindexoffset,
      int64_t towhich,
      int64_t innerwhich,
      int64_t outerwhich,
      int64_t length,
      int64_t base);

  EXPORT_SYMBOL struct Error
    awkward_UnionArray8_32_simplify_one_to8_64(
      int8_t* totags,
      int64_t* toindex,
      const int8_t* fromtags,
      int64_t fromtagsoffset,
      const int32_t* fromindex,
      int64_t fromindexoffset,
      int64_t towhich,
      int64_t fromwhich,
      int64_t length,
      int64_t base);
  EXPORT_SYMBOL struct Error
    awkward_UnionArray8_U32_simplify_one_to8_64(
      int8_t* totags,
      int64_t* toindex,
      const int8_t* fromtags,
      int64_t fromtagsoffset,
      const uint32_t* fromindex,
      int64_t fromindexoffset,
      int64_t towhich,
      int64_t fromwhich,
      int64_t length,
      int64_t base);
  EXPORT_SYMBOL struct Error
    awkward_UnionArray8_64_simplify_one_to8_64(
      int8_t* totags,
      int64_t* toindex,
      const int8_t* fromtags,
      int64_t fromtagsoffset,
      const int64_t* fromindex,
      int64_t fromindexoffset,
      int64_t towhich,
      int64_t fromwhich,
      int64_t length,
      int64_t base);

  EXPORT_SYMBOL struct Error
    awkward_UnionArray_fillna_from32_to64(
      int64_t* toindex,
      const int32_t* fromindex,
      int64_t offset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_UnionArray_fillna_fromU32_to64(
      int64_t* toindex,
      const uint32_t* fromindex,
      int64_t offset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_UnionArray_fillna_from64_to64(
      int64_t* toindex,
      const int64_t* fromindex,
      int64_t offset,
      int64_t length);

  EXPORT_SYMBOL struct Error
    awkward_IndexedOptionArray_rpad_and_clip_mask_axis1_64(
      int64_t* toindex,
      const int8_t* frommask,
      int64_t length);

  EXPORT_SYMBOL struct Error
    awkward_index_rpad_and_clip_axis0_64(
      int64_t* toindex,
      int64_t target,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_index_rpad_and_clip_axis1_64(
      int64_t* tostarts,
      int64_t* tostops,
      int64_t target,
      int64_t length);

  EXPORT_SYMBOL struct Error
    awkward_RegularArray_rpad_and_clip_axis1_64(
      int64_t* toindex,
      int64_t target,
      int64_t size,
      int64_t length);

  EXPORT_SYMBOL struct Error
    awkward_ListArray32_min_range(
      int64_t* tomin,
      const int32_t* fromstarts,
      const int32_t* fromstops,
      int64_t lenstarts,
      int64_t startsoffset,
      int64_t stopsoffset);
  EXPORT_SYMBOL struct Error
    awkward_ListArrayU32_min_range(
      int64_t* tomin,
      const uint32_t* fromstarts,
      const uint32_t* fromstops,
      int64_t lenstarts,
      int64_t startsoffset,
      int64_t stopsoffset);
  EXPORT_SYMBOL struct Error
    awkward_ListArray64_min_range(
      int64_t* tomin,
      const int64_t* fromstarts,
      const int64_t* fromstops,
      int64_t lenstarts,
      int64_t startsoffset,
      int64_t stopsoffset);

  EXPORT_SYMBOL struct Error
    awkward_ListArray32_rpad_and_clip_length_axis1(
      int64_t* tomin,
      const int32_t* fromstarts,
      const int32_t* fromstops,
      int64_t target,
      int64_t lenstarts,
      int64_t startsoffset,
      int64_t stopsoffset);
  EXPORT_SYMBOL struct Error
    awkward_ListArrayU32_rpad_and_clip_length_axis1(
      int64_t* tomin,
      const uint32_t* fromstarts,
      const uint32_t* fromstops,
      int64_t target,
      int64_t lenstarts,
      int64_t startsoffset,
      int64_t stopsoffset);
  EXPORT_SYMBOL struct Error
    awkward_ListArray64_rpad_and_clip_length_axis1(
      int64_t* tomin,
      const int64_t* fromstarts,
      const int64_t* fromstops,
      int64_t target,
      int64_t lenstarts,
      int64_t startsoffset,
      int64_t stopsoffset);

  EXPORT_SYMBOL struct Error
    awkward_ListArray32_rpad_axis1_64(
      int64_t* toindex,
      const int32_t* fromstarts,
      const int32_t* fromstops,
      int32_t* tostarts,
      int32_t* tostops,
      int64_t target,
      int64_t length,
      int64_t startsoffset,
      int64_t stopsoffset);
  EXPORT_SYMBOL struct Error
    awkward_ListArrayU32_rpad_axis1_64(
      int64_t* toindex,
      const uint32_t* fromstarts,
      const uint32_t* fromstops,
      uint32_t* tostarts,
      uint32_t* tostops,
      int64_t target,
      int64_t length,
      int64_t startsoffset,
      int64_t stopsoffset);
  EXPORT_SYMBOL struct Error
    awkward_ListArray64_rpad_axis1_64(
      int64_t* toindex,
      const int64_t* fromstarts,
      const int64_t* fromstops,
      int64_t* tostarts,
      int64_t* tostops,
      int64_t target,
      int64_t length,
      int64_t startsoffset,
      int64_t stopsoffset);

  EXPORT_SYMBOL struct Error
    awkward_ListOffsetArray32_rpad_and_clip_axis1_64(
      int64_t* toindex,
      const int32_t* fromoffsets,
      int64_t offsetsoffset,
      int64_t length,
      int64_t target);
  EXPORT_SYMBOL struct Error
    awkward_ListOffsetArrayU32_rpad_and_clip_axis1_64(
      int64_t* toindex,
      const uint32_t* fromoffsets,
      int64_t offsetsoffset,
      int64_t length,
      int64_t target);
  EXPORT_SYMBOL struct Error
    awkward_ListOffsetArray64_rpad_and_clip_axis1_64(
      int64_t* toindex,
      const int64_t* fromoffsets,
      int64_t offsetsoffset,
      int64_t length,
      int64_t target);

  EXPORT_SYMBOL struct Error
    awkward_ListOffsetArray32_rpad_length_axis1(
      int32_t* tooffsets,
      const int32_t* fromoffsets,
      int64_t offsetsoffset,
      int64_t fromlength,
      int64_t target,
      int64_t* tolength);
  EXPORT_SYMBOL struct Error
    awkward_ListOffsetArrayU32_rpad_length_axis1(
      uint32_t* tooffsets,
      const uint32_t* fromoffsets,
      int64_t offsetsoffset,
      int64_t fromlength,
      int64_t target,
      int64_t* tolength);
  EXPORT_SYMBOL struct Error
    awkward_ListOffsetArray64_rpad_length_axis1(
      int64_t* tooffsets,
      const int64_t* fromoffsets,
      int64_t offsetsoffset,
      int64_t fromlength,
      int64_t target,
      int64_t* tolength);

  EXPORT_SYMBOL struct Error
    awkward_ListOffsetArray32_rpad_axis1_64(
      int64_t* toindex,
      const int32_t* fromoffsets,
      int64_t offsetsoffset,
      int64_t fromlength,
      int64_t target);
  EXPORT_SYMBOL struct Error
    awkward_ListOffsetArrayU32_rpad_axis1_64(
      int64_t* toindex,
      const uint32_t* fromoffsets,
      int64_t offsetsoffset,
      int64_t fromlength,
      int64_t target);
  EXPORT_SYMBOL struct Error
    awkward_ListOffsetArray64_rpad_axis1_64(
      int64_t* toindex,
      const int64_t* fromoffsets,
      int64_t offsetsoffset,
      int64_t fromlength,
      int64_t target);

  EXPORT_SYMBOL struct Error
    awkward_ListArray32_validity(
      const int32_t* starts,
      int64_t startsoffset,
      const int32_t* stops,
      int64_t stopsoffset,
      int64_t length,
      int64_t lencontent);
  EXPORT_SYMBOL struct Error
    awkward_ListArrayU32_validity(
      const uint32_t* starts,
      int64_t startsoffset,
      const uint32_t* stops,
      int64_t stopsoffset,
      int64_t length,
      int64_t lencontent);
  EXPORT_SYMBOL struct Error
    awkward_ListArray64_validity(
      const int64_t* starts,
      int64_t startsoffset,
      const int64_t* stops,
      int64_t stopsoffset,
      int64_t length,
      int64_t lencontent);

  EXPORT_SYMBOL struct Error
    awkward_IndexedArray32_validity(
      const int32_t* index,
      int64_t indexoffset,
      int64_t length,
      int64_t lencontent,
      bool isoption);
  EXPORT_SYMBOL struct Error
    awkward_IndexedArrayU32_validity(
      const uint32_t* index,
      int64_t indexoffset,
      int64_t length,
      int64_t lencontent,
      bool isoption);
  EXPORT_SYMBOL struct Error
    awkward_IndexedArray64_validity(
      const int64_t* index,
      int64_t indexoffset,
      int64_t length,
      int64_t lencontent,
      bool isoption);

  EXPORT_SYMBOL struct Error
    awkward_UnionArray8_32_validity(
      const int8_t* tags,
      int64_t tagsoffset,
      const int32_t* index,
      int64_t indexoffset,
      int64_t length,
      int64_t numcontents,
      const int64_t* lencontents);
  EXPORT_SYMBOL struct Error
    awkward_UnionArray8_U32_validity(
      const int8_t* tags,
      int64_t tagsoffset,
      const uint32_t* index,
      int64_t indexoffset,
      int64_t length,
      int64_t numcontents,
      const int64_t* lencontents);
  EXPORT_SYMBOL struct Error
    awkward_UnionArray8_64_validity(
      const int8_t* tags,
      int64_t tagsoffset,
      const int64_t* index,
      int64_t indexoffset,
      int64_t length,
      int64_t numcontents,
      const int64_t* lencontents);

  EXPORT_SYMBOL struct Error
    awkward_localindex_64(
      int64_t* toindex,
      int64_t length);

  EXPORT_SYMBOL struct Error
    awkward_ListArray32_localindex_64(
      int64_t* toindex,
      const int32_t* offsets,
      int64_t offsetsoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_ListArrayU32_localindex_64(
      int64_t* toindex,
      const uint32_t* offsets,
      int64_t offsetsoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_ListArray64_localindex_64(
      int64_t* toindex,
      const int64_t* offsets,
      int64_t offsetsoffset,
      int64_t length);

  EXPORT_SYMBOL struct Error
    awkward_RegularArray_localindex_64(
      int64_t* toindex,
      int64_t size,
      int64_t length);

  EXPORT_SYMBOL struct Error
    awkward_combinations_64(
      int64_t* toindex,
      int64_t n,
      bool replacement,
      int64_t singlelen);

  EXPORT_SYMBOL struct Error
    awkward_ListArray32_combinations_length_64(
      int64_t* totallen,
      int64_t* tooffsets,
      int64_t n,
      bool replacement,
      const int32_t* starts,
      int64_t startsoffset,
      const int32_t* stops,
      int64_t stopsoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_ListArrayU32_combinations_length_64(
      int64_t* totallen,
      int64_t* tooffsets,
      int64_t n,
      bool replacement,
      const uint32_t* starts,
      int64_t startsoffset,
      const uint32_t* stops,
      int64_t stopsoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_ListArray64_combinations_length_64(
      int64_t* totallen,
      int64_t* tooffsets,
      int64_t n,
      bool replacement,
      const int64_t* starts,
      int64_t startsoffset,
      const int64_t* stops,
      int64_t stopsoffset,
      int64_t length);

  EXPORT_SYMBOL struct Error
    awkward_ListArray32_combinations_64(
      int64_t** tocarry,
      int64_t* toindex,
      int64_t* fromindex,
      int64_t n,
      bool replacement,
      const int32_t* starts,
      int64_t startsoffset,
      const int32_t* stops,
      int64_t stopsoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_ListArrayU32_combinations_64(
      int64_t** tocarry,
      int64_t* toindex,
      int64_t* fromindex,
      int64_t n,
      bool replacement,
      const uint32_t* starts,
      int64_t startsoffset,
      const uint32_t* stops,
      int64_t stopsoffset,
      int64_t length);
  EXPORT_SYMBOL struct Error
    awkward_ListArray64_combinations_64(
      int64_t** tocarry,
      int64_t* toindex,
      int64_t* fromindex,
      int64_t n,
      bool replacement,
      const int64_t* starts,
      int64_t startsoffset,
      const int64_t* stops,
      int64_t stopsoffset,
      int64_t length);

  EXPORT_SYMBOL struct Error
    awkward_RegularArray_combinations_64(
      int64_t** tocarry,
      int64_t* toindex,
      int64_t* fromindex,
      int64_t n,
      bool replacement,
      int64_t size,
      int64_t length);

  EXPORT_SYMBOL struct Error
    awkward_ByteMaskedArray_overlay_mask8(
      int8_t* tomask,
      const int8_t* theirmask,
      int64_t theirmaskoffset,
      const int8_t* mymask,
      int64_t mymaskoffset,
      int64_t length,
      bool validwhen);

  EXPORT_SYMBOL struct Error
    awkward_BitMaskedArray_to_ByteMaskedArray(
      int8_t* tobytemask,
      const uint8_t* frombitmask,
      int64_t bitmaskoffset,
      int64_t bitmasklength,
      bool validwhen,
      bool lsb_order);
  EXPORT_SYMBOL struct Error
    awkward_BitMaskedArray_to_IndexedOptionArray64(
      int64_t* toindex,
      const uint8_t* frombitmask,
      int64_t bitmaskoffset,
      int64_t bitmasklength,
      bool validwhen,
      bool lsb_order);

}

#endif // AWKWARDCPU_GETITEM_H_
