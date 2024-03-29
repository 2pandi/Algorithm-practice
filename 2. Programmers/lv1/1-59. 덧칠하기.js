function solution(n, m, section) {
  let count = 0;
  let prePointer = -1;
  let pointer = 0;
  while (prePointer !== pointer) {
    count++;
    prePointer = pointer;
    pointer = section.findIndex((v) => v >= section[pointer] + m);
  }
  return count - 1;
}

// index를 찾는게 section의 뒷쪽으로 갈수록 오래걸림 -> 비효율적;
/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (918.12ms, 37.8MB)
테스트 2 〉	통과 (22.94ms, 38.3MB)
테스트 3 〉	통과 (23.70ms, 38.3MB)
테스트 4 〉	통과 (1.88ms, 35.4MB)
테스트 5 〉	통과 (760.30ms, 37.5MB)
테스트 6 〉	통과 (0.06ms, 33.5MB)
테스트 7 〉	통과 (1.95ms, 35.4MB)
테스트 8 〉	통과 (275.61ms, 36.8MB)
테스트 9 〉	통과 (0.11ms, 33MB)
테스트 10 〉	통과 (10.33ms, 37.2MB)
테스트 11 〉	통과 (0.13ms, 33.4MB)
테스트 12 〉	통과 (1452.52ms, 37.4MB)
테스트 13 〉	통과 (11.89ms, 37MB)
테스트 14 〉	통과 (8.65ms, 37.7MB)
테스트 15 〉	통과 (0.06ms, 33.4MB)
테스트 16 〉	통과 (132.54ms, 37.3MB)
테스트 17 〉	통과 (2157.88ms, 37.8MB)
테스트 18 〉	통과 (1.11ms, 35.4MB)
테스트 19 〉	통과 (1459.10ms, 37.8MB)
테스트 20 〉	통과 (4.77ms, 36.7MB)
테스트 21 〉	통과 (269.49ms, 37.5MB)
테스트 22 〉	통과 (724.80ms, 37.7MB)
테스트 23 〉	통과 (7.78ms, 37.9MB)
테스트 24 〉	통과 (0.24ms, 33.6MB)
테스트 25 〉	통과 (7.68ms, 37.5MB)
테스트 26 〉	통과 (131.07ms, 36.5MB)
테스트 27 〉	통과 (2.28ms, 35.8MB)
테스트 28 〉	통과 (3.22ms, 35.4MB)
테스트 29 〉	통과 (0.15ms, 33.4MB)
테스트 30 〉	통과 (0.13ms, 33.4MB)
테스트 31 〉	통과 (1.93ms, 35.5MB)
테스트 32 〉	통과 (5.95ms, 35.4MB)
테스트 33 〉	통과 (1.90ms, 35.3MB)
테스트 34 〉	통과 (0.09ms, 33.4MB)
테스트 35 〉	통과 (2235.75ms, 37.9MB)
테스트 36 〉	통과 (2.08ms, 35.3MB)
테스트 37 〉	통과 (5.00ms, 36.5MB)
테스트 38 〉	통과 (0.10ms, 33.5MB)
테스트 39 〉	통과 (111.07ms, 36.7MB)
테스트 40 〉	통과 (0.15ms, 33.4MB)
테스트 41 〉	통과 (8.35ms, 37.1MB)
테스트 42 〉	통과 (0.07ms, 33.4MB)
테스트 43 〉	통과 (1.49ms, 35.4MB)
테스트 44 〉	통과 (2.39ms, 35.3MB)
테스트 45 〉	통과 (8.27ms, 37.8MB)
테스트 46 〉	통과 (2.41ms, 35.7MB)
테스트 47 〉	통과 (9.81ms, 38.1MB)
테스트 48 〉	통과 (6.79ms, 36.5MB)
테스트 49 〉	통과 (6.54ms, 37.2MB)
테스트 50 〉	통과 (290.39ms, 37.8MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

// 다른 사람의 풀이
function solution(n, m, sections) {
  var answer = 0;
  var painted = 0;
  for (var section of sections) {
    if (painted < section) {
      answer++;
      painted = section + m - 1;
    }
  }
  return answer;
}

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (3.55ms, 39.6MB)
테스트 2 〉	통과 (3.99ms, 39.1MB)
테스트 3 〉	통과 (3.73ms, 39.6MB)
테스트 4 〉	통과 (0.14ms, 33.5MB)
테스트 5 〉	통과 (3.51ms, 39.4MB)
테스트 6 〉	통과 (0.05ms, 33.4MB)
테스트 7 〉	통과 (0.14ms, 33.5MB)
테스트 8 〉	통과 (3.38ms, 38.6MB)
테스트 9 〉	통과 (0.14ms, 33.5MB)
테스트 10 〉	통과 (3.51ms, 39.1MB)
테스트 11 〉	통과 (0.14ms, 33.5MB)
테스트 12 〉	통과 (3.30ms, 38.7MB)
테스트 13 〉	통과 (5.03ms, 39.2MB)
테스트 14 〉	통과 (4.19ms, 39.9MB)
테스트 15 〉	통과 (0.14ms, 33.4MB)
테스트 16 〉	통과 (2.90ms, 38.1MB)
테스트 17 〉	통과 (5.09ms, 39.3MB)
테스트 18 〉	통과 (0.17ms, 33.4MB)
테스트 19 〉	통과 (3.60ms, 39.6MB)
테스트 20 〉	통과 (3.02ms, 38.6MB)
테스트 21 〉	통과 (3.32ms, 39.4MB)
테스트 22 〉	통과 (3.57ms, 39.7MB)
테스트 23 〉	통과 (4.96ms, 40MB)
테스트 24 〉	통과 (0.23ms, 33.5MB)
테스트 25 〉	통과 (3.82ms, 39.5MB)
테스트 26 〉	통과 (3.00ms, 38.4MB)
테스트 27 〉	통과 (0.63ms, 34MB)
테스트 28 〉	통과 (0.26ms, 33.5MB)
테스트 29 〉	통과 (0.21ms, 33.5MB)
테스트 30 〉	통과 (0.14ms, 33.5MB)
테스트 31 〉	통과 (0.16ms, 33.4MB)
테스트 32 〉	통과 (0.17ms, 33.6MB)
테스트 33 〉	통과 (0.19ms, 33.5MB)
테스트 34 〉	통과 (0.13ms, 33.6MB)
테스트 35 〉	통과 (6.72ms, 39.1MB)
테스트 36 〉	통과 (0.16ms, 33.5MB)
테스트 37 〉	통과 (4.65ms, 38.2MB)
테스트 38 〉	통과 (0.12ms, 33.4MB)
테스트 39 〉	통과 (2.92ms, 38.4MB)
테스트 40 〉	통과 (0.13ms, 33.4MB)
테스트 41 〉	통과 (3.58ms, 39.2MB)
테스트 42 〉	통과 (0.14ms, 33.4MB)
테스트 43 〉	통과 (0.13ms, 33.4MB)
테스트 44 〉	통과 (0.13ms, 33.4MB)
테스트 45 〉	통과 (3.54ms, 40.2MB)
테스트 46 〉	통과 (0.44ms, 34MB)
테스트 47 〉	통과 (5.32ms, 40.4MB)
테스트 48 〉	통과 (3.10ms, 38.5MB)
테스트 49 〉	통과 (4.97ms, 39.1MB)
테스트 50 〉	통과 (3.40ms, 39.9MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
