function getK(array, [i, j, k]) {
  const newArray = array.slice(i - 1, j);
  return newArray.sort((a, b) => a - b)[k - 1];
}

function solution(array, commands) {
  const result = [];
  for (let command of commands) {
    result.push(getK(array, command));
  }
  return result;
}

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.10ms, 33.4MB)
테스트 2 〉	통과 (0.08ms, 33.4MB)
테스트 3 〉	통과 (0.11ms, 33.5MB)
테스트 4 〉	통과 (0.08ms, 33.4MB)
테스트 5 〉	통과 (0.09ms, 33.4MB)
테스트 6 〉	통과 (0.07ms, 33.4MB)
테스트 7 〉	통과 (0.13ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

// 다른 풀이
function solution(array, commands) {
  return commands.map((c) => {
    return array.slice(c[0] - 1, c[1]).sort((a, b) => a - b)[c[2] - 1];
  });
}

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.05ms, 33.4MB)
테스트 2 〉	통과 (0.06ms, 33.6MB)
테스트 3 〉	통과 (0.05ms, 33.4MB)
테스트 4 〉	통과 (0.05ms, 33.4MB)
테스트 5 〉	통과 (0.06ms, 33.5MB)
테스트 6 〉	통과 (0.05ms, 33.4MB)
테스트 7 〉	통과 (0.05ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/
