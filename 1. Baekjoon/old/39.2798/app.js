let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

const [[, max], cards] = input;

if (cards.length === 3) return cards.reduce((a, b) => a + b);

const getCombinations = (arr, selectNumber = 3) => {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });
  return results;
};

let combinationTotals = getCombinations(cards)
  .map((v) => v.reduce((a, b) => a + b))
  .sort((a, b) => a - b)
  .filter((v) => v <= max);

console.log(combinationTotals[combinationTotals.length - 1]);

// cards 중에서 3개 합이 max와 가장 가까워야 함 -> 그 합을 출력함.
// 조합 알고리즘
