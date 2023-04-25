export default function hasValuesFromArray(set, elements) {
  if (!Array.isArray(elements)) return false;

  let exists = true;
  elements.forEach((value) => {
    if (!set.has(value)) exists = false;
  });

  return exists;
}
