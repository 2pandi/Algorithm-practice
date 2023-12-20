function solution(numbers) {
  const answer = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (i !== j) answer.add(numbers[i] + numbers[j]);
    }
  }
  return [...answer].sort((a, b) => a - b);
}

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.05ms, 33.6MB)
테스트 2 〉	통과 (0.20ms, 33.6MB)
테스트 3 〉	통과 (0.11ms, 33.5MB)
테스트 4 〉	통과 (0.34ms, 33.5MB)
테스트 5 〉	통과 (0.22ms, 33.5MB)
테스트 6 〉	통과 (0.27ms, 33.5MB)
테스트 7 〉	통과 (1.08ms, 33.6MB)
테스트 8 〉	통과 (1.15ms, 33.5MB)
테스트 9 〉	통과 (1.19ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

// 다른 사람의 풀이
