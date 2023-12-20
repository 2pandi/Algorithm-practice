process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const i = data.split(" ").map((v) => +v);
  const [n, m] = i;
  const line = new Array(n).fill("*").join("");
  console.log(new Array(m).fill(line).join("\n"));
});

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (50.82ms, 31.9MB)
테스트 2 〉	통과 (59.24ms, 32MB)
테스트 3 〉	통과 (60.76ms, 32MB)
테스트 4 〉	통과 (48.28ms, 32MB)
테스트 5 〉	통과 (43.87ms, 31.9MB)
테스트 6 〉	통과 (47.49ms, 31.9MB)
테스트 7 〉	통과 (49.47ms, 32MB)
테스트 8 〉	통과 (50.40ms, 32.1MB)
테스트 9 〉	통과 (44.31ms, 32.1MB)
테스트 10 〉	통과 (45.94ms, 32MB)
테스트 11 〉	통과 (46.61ms, 32.1MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

// 다른 사람의 풀이
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  const row = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
});

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (46.09ms, 32MB)
테스트 2 〉	통과 (43.42ms, 31.9MB)
테스트 3 〉	통과 (42.80ms, 32MB)
테스트 4 〉	통과 (52.84ms, 32MB)
테스트 5 〉	통과 (41.63ms, 32MB)
테스트 6 〉	통과 (51.69ms, 31.9MB)
테스트 7 〉	통과 (41.43ms, 32.1MB)
테스트 8 〉	통과 (44.30ms, 32MB)
테스트 9 〉	통과 (54.93ms, 32.3MB)
테스트 10 〉	통과 (56.10ms, 32MB)
테스트 11 〉	통과 (44.88ms, 32.3MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
