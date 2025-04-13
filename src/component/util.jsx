export const shuffle = (array) => {
  let currentIndex = array.length,  randomIndex
  console.log("Shuffle is Called")
  while (currentIndex > 0) {

    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }
  return array;
}

export const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const getRandomUniqueIds = (length, current) => {
  let ids = [current];

  while (ids.length < 4) {
    let rnd = randomInt(0, length - 1);
    if (!ids.includes(rnd)) {
      ids.push(rnd);
    }
  }
  return ids;
}

export const getDataSet = (data, current) => {
  let ids = getRandomUniqueIds(data.length, current)
  console.log("GetDataSet is Called")
  return [data[ids[0]], data[ids[1]], data[ids[2]], data[ids[3]]]
}