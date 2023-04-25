export default function getListStudentIds(arrayOfObjects) {
  const arrayOfIds = [];
  if (!Array.isArray(arrayOfObjects)) return arrayOfIds;

  return arrayOfObjects.map((value) => value.id);
}
