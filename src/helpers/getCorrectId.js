export function getCorrectId(tempItem = "") {
  return tempItem.replace("first", "").replace("second", "");
}
