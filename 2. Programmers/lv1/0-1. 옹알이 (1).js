/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.26ms, 33.4MB)
테스트 2 〉	통과 (0.22ms, 33.4MB)
테스트 3 〉	통과 (0.17ms, 33.4MB)
테스트 4 〉	통과 (0.29ms, 33.4MB)
테스트 5 〉	통과 (0.18ms, 33.5MB)
테스트 6 〉	통과 (0.28ms, 33.5MB)
테스트 7 〉	통과 (0.18ms, 33.5MB)
테스트 8 〉	통과 (0.18ms, 33.5MB)
테스트 9 〉	통과 (0.21ms, 33.6MB)
테스트 10 〉	통과 (0.16ms, 33.6MB)
테스트 11 〉	통과 (0.16ms, 33.5MB)
테스트 12 〉	통과 (0.18ms, 33.4MB)
테스트 13 〉	통과 (0.15ms, 33.4MB)
테스트 14 〉	통과 (0.17ms, 33.4MB)
테스트 15 〉	통과 (0.16ms, 33.4MB)
테스트 16 〉	통과 (0.15ms, 33.6MB)
테스트 17 〉	통과 (0.18ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(babbling) {
  let count = 0;
  const regex = /aya|ye|woo|ma/g;
  babbling.forEach((el) => {
    const matched = el.match(regex);
    if (matched) {
      if (matched.join("") === el) count++;
    }
  });
  return count;
}

function solution(babbling) {
  var answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach((word) => {
    if (regex.test(word)) answer++;
  });

  return answer;
}
