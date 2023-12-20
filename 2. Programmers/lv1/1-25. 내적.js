function solution(a, b) {
  let arr = [];
  for (let i = 0; i < a.length; i++) {
    arr[i] = a[i] * b[i];
  }
  return arr.reduce((a, b) => a + b);
}
/**
function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}

reduce((previousValue, currentValue, currentIndex, array) => { … }, initialValue)

 */
