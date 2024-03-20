let fs = require("fs");
let [[N], array] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

function getPermutaion(elements) {
  if (elements.length === 1) return [elements];
  const permutations = [];
  const smallerPermutaions = getPermutaion(elements.slice(1));
  const firstElement = elements[0];
  smallerPermutaions.forEach((permutation) => {
    for (
      let positionIdx = 0;
      positionIdx <= permutation.length;
      positionIdx++
    ) {
      const prefix = permutation.slice(0, positionIdx);
      const suffix = permutation.slice(positionIdx);
      permutations.push(prefix.concat([firstElement], suffix));
    }
  });
  return permutations;
}

function getResult(array) {
  let result = 0;
  for (let i = 0; i < N - 1; i++) {
    result += Math.abs(array[i] - array[i + 1]);
  }
  return result;
}

const permutations = getPermutaion(array);
let results = permutations.map((el) => getResult(el));

console.log(Math.max(...results));

// 음수 입력시 제대로 작동하지 않음.
// function findSide() {
//   const certain = parseInt(N / 2) - 1;
//   if (
//     N % 2 === 1 &&
//     array[certain] - array[certain - 1] < array[certain + 1] - array[certain]
//   ) {
//     return [certain - 1, certain];
//   }
//   return [certain, certain + 1];
// }

// let result = 0;
// let sideIdx = findSide();
// array = array.sort((a, b) => a - b);
// const side = sideIdx.map((el) => array[el]);
// array = array.filter((e, i) => sideIdx.indexOf(i) < 0);

// let current;
// while (array.length || side.length) {
//   if (current === undefined) {
//     current = array.shift();
//     result += Math.abs(side.pop() - current);
//     continue;
//   }
//   if (array.length === 0) {
//     result += Math.abs(current - side.pop());
//     break;
//   }
//   if (!!(array.length % 2)) {
//     const popped = array.pop();
//     result += Math.abs(popped - current);
//     current = popped;
//     continue;
//   }
//   const shifted = array.shift();
//   result += Math.abs(current - shifted);
//   current = shifted;
// }

// console.log(result);
