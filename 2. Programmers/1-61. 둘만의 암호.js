const alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function solution(s, skip, index) {
  const skippedAlpha = alpha.filter((a) => !skip.includes(a));
  const map = {};
  const result = s
    .split("")
    .map((char) => {
      if (map[char])
        return skippedAlpha[(map[char] + index) % skippedAlpha.length];
      map[char] = skippedAlpha.indexOf(char);
      return skippedAlpha[(map[char] + index) % skippedAlpha.length];
    })
    .join("");

  return result;
}

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.22ms, 33.6MB)
테스트 2 〉	통과 (0.10ms, 33.6MB)
테스트 3 〉	통과 (0.24ms, 33.5MB)
테스트 4 〉	통과 (0.10ms, 33.5MB)
테스트 5 〉	통과 (0.21ms, 33.5MB)
테스트 6 〉	통과 (0.22ms, 33.6MB)
테스트 7 〉	통과 (0.20ms, 33.5MB)
테스트 8 〉	통과 (0.10ms, 33.6MB)
테스트 9 〉	통과 (0.20ms, 33.7MB)
테스트 10 〉	통과 (0.20ms, 33.5MB)
테스트 11 〉	통과 (0.23ms, 33.5MB)
테스트 12 〉	통과 (0.21ms, 33.4MB)
테스트 13 〉	통과 (0.28ms, 33.5MB)
테스트 14 〉	통과 (0.28ms, 33.5MB)
테스트 15 〉	통과 (0.16ms, 33.6MB)
테스트 16 〉	통과 (0.10ms, 33.6MB)
테스트 17 〉	통과 (0.19ms, 33.5MB)
테스트 18 〉	통과 (0.20ms, 33.5MB)
테스트 19 〉	통과 (0.20ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

// 다른 사람의 풀이
