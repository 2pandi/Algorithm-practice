function solution(name, yearning, photo) {
  return photo.map((p) =>
    p
      .map((n) => {
        const idx = name.indexOf(n);
        return idx >= 0 ? yearning[idx] : 0;
      })
      .reduce((p, c) => p + c, 0)
  );
}

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.08ms, 33.5MB)
테스트 2 〉	통과 (0.15ms, 33.5MB)
테스트 3 〉	통과 (0.26ms, 33.5MB)
테스트 4 〉	통과 (0.20ms, 33.4MB)
테스트 5 〉	통과 (0.53ms, 33.7MB)
테스트 6 〉	통과 (0.99ms, 33.7MB)
테스트 7 〉	통과 (1.08ms, 33.8MB)
테스트 8 〉	통과 (0.83ms, 33.8MB)
테스트 9 〉	통과 (1.29ms, 33.7MB)
테스트 10 〉	통과 (2.28ms, 33.9MB)
테스트 11 〉	통과 (2.63ms, 36.2MB)
테스트 12 〉	통과 (1.32ms, 34MB)
테스트 13 〉	통과 (0.25ms, 33.6MB)
테스트 14 〉	통과 (0.07ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

// 다른 풀이
function solution(name, yearning, photo) {
  return photo.map((p) =>
    p.reduce((pre, cur) => pre + (yearning[name.indexOf(cur)] ?? 0), 0)
  );
}

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.06ms, 33.4MB)
테스트 2 〉	통과 (0.14ms, 33.5MB)
테스트 3 〉	통과 (0.25ms, 33.5MB)
테스트 4 〉	통과 (0.21ms, 33.4MB)
테스트 5 〉	통과 (0.58ms, 33.5MB)
테스트 6 〉	통과 (1.20ms, 33.8MB)
테스트 7 〉	통과 (1.25ms, 33.9MB)
테스트 8 〉	통과 (0.84ms, 33.7MB)
테스트 9 〉	통과 (1.29ms, 34MB)
테스트 10 〉	통과 (3.18ms, 36.2MB)
테스트 11 〉	통과 (2.71ms, 35.9MB)
테스트 12 〉	통과 (1.41ms, 33.9MB)
테스트 13 〉	통과 (0.19ms, 33.7MB)
테스트 14 〉	통과 (0.06ms, 33.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
