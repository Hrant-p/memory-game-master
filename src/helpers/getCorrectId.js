export function getCorrectId(tempItem = "") {
  if (!tempItem) {
    return tempItem;
  }
  return tempItem.replace("first", "").replace("second", "");
}
