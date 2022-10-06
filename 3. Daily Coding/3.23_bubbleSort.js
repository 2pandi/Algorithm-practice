const swap = (a, b, arr) => {
  [arr[a], arr[b]] = [arr[b], arr[a]];
};

const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    let swaped = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
        swaped = true;
      }
    }
    if (!swaped) break;
  }
  return arr;
};
