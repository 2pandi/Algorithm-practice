function solution(numbers) {
  let result = 0;
  for (let i = 1; i < 10; i++) {
    if (numbers.indexOf(i) < 0) result += i;
  }
  return result;
}

/**
function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
 */
