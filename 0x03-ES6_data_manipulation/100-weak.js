export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const queryCount = weakMap.get(endpoint);
  weakMap.set(endpoint, queryCount + 1);

  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
