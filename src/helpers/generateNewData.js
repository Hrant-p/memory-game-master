import picArr from "../assets/images";

export function generateInitialArr() {
  const arr = [];
  for (let i = 0; i < 18; i++) {
    const tempFirstItem = {
      img: `url("${picArr[i]}")`,
      id: `${i}first`
    };
    const tempSecondItem = {
      img: `url("${picArr[i]}")`,
      id: `${i}second`
    };
    arr.push(tempFirstItem, tempSecondItem);
  }
  return arr;
}

export function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  const tempArray = [...array];

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = { ...tempArray[currentIndex] };
    tempArray[currentIndex] = { ...tempArray[randomIndex] };
    tempArray[randomIndex] = temporaryValue;
  }
  return tempArray;
}
