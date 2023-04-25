export default function updateUniqueItems(groceriesMap) {
  if (!Object.prototype.toString.call(groceriesMap) === '[object Map]');

  try {
    for (const [key, value] of groceriesMap) {
      if (value === 1) {
        groceriesMap.set(key, 100);
      }
    }
  } catch (error) {
    throw new Error('Cannot process');
  }
}
