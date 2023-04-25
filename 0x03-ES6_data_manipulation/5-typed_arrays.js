export default function createInt8TypedArray(length, position, value) {
  const int8TypedArray = new ArrayBuffer(10);
  const view = new DataView(int8TypedArray);

  if (position >= view.byteLength) throw new Error('Position outside range');
  view.setUint8(position, value);

  return view;
}
