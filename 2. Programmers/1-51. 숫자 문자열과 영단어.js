function solution(s) {
  for (number of Object.keys(numberSet)) {
    if (s.includes(number)) {
      s = s.replaceAll(number, numberSet[number]);
    }
  }
  return +s;
}

const numberSet = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.06ms, 33.4MB)
테스트 2 〉	통과 (0.06ms, 33.4MB)
테스트 3 〉	통과 (0.06ms, 33.4MB)
테스트 4 〉	통과 (0.07ms, 33.4MB)
테스트 5 〉	통과 (0.06ms, 33.5MB)
테스트 6 〉	통과 (0.06ms, 33.3MB)
테스트 7 〉	통과 (0.06ms, 33.4MB)
테스트 8 〉	통과 (0.11ms, 33.4MB)
테스트 9 〉	통과 (0.07ms, 33.4MB)
테스트 10 〉	통과 (0.05ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

// 다른 풀이
function solution(s) {
  for (let i = 0; i < numbers.length; i++) {
    if (s.includes(numbers[i])) {
      s = s.replaceAll(numbers[i], i);
    }
  }
  return +s;
}

const numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.04ms, 33.5MB)
테스트 2 〉	통과 (0.04ms, 33.5MB)
테스트 3 〉	통과 (0.04ms, 33.4MB)
테스트 4 〉	통과 (0.04ms, 33.4MB)
테스트 5 〉	통과 (0.04ms, 33.4MB)
테스트 6 〉	통과 (0.07ms, 33.5MB)
테스트 7 〉	통과 (0.07ms, 33.5MB)
테스트 8 〉	통과 (0.05ms, 33.5MB)
테스트 9 〉	통과 (0.12ms, 33.6MB)
테스트 10 〉	통과 (0.04ms, 33.4MB)
채점 결과
정확성: 100.0
 */

// 다른 사람의 풀이
