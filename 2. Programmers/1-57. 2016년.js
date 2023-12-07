function solution(a, b) {
  return days[new Date(`2016-${a}-${b}`).getDay()];
}

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.10ms, 33.9MB)
테스트 2 〉	통과 (0.10ms, 34MB)
테스트 3 〉	통과 (0.10ms, 33.8MB)
테스트 4 〉	통과 (0.13ms, 33.9MB)
테스트 5 〉	통과 (0.10ms, 34MB)
테스트 6 〉	통과 (0.10ms, 33.9MB)
테스트 7 〉	통과 (0.10ms, 34MB)
테스트 8 〉	통과 (0.10ms, 33.9MB)
테스트 9 〉	통과 (0.10ms, 33.9MB)
테스트 10 〉	통과 (0.10ms, 34MB)
테스트 11 〉	통과 (0.11ms, 33.8MB)
테스트 12 〉	통과 (0.11ms, 33.8MB)
테스트 13 〉	통과 (0.10ms, 34MB)
테스트 14 〉	통과 (0.10ms, 34MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

// Date.toString()하면 "Tue Aug 19 1975 23:15:30 GMT+0200 (CEST)" 의 형태로 출력되는군..
// 다른 사람의 풀이
function getDayName(a, b) {
  var tempDate = new Date(2016, a - 1, b);

  return tempDate.toString().slice(0, 3).toUpperCase();
}
