export default function cleanSet(set, startString) {
  const result = [];

  for (const name of set) {
    if (startString && name.startsWith(startString)) {
      const stringToAppend = name.split(startString).join('');
      result.push(stringToAppend);
    }
  }

  return result.join('-');
}
