function solution(number) {
  let count = 0;

  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (!(number[i] + number[j] + number[k])) count++;
      }
    }
  }

  return count;
}

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.18ms, 33.6MB)
테스트 2 〉	통과 (0.12ms, 33.6MB)
테스트 3 〉	통과 (0.12ms, 33.6MB)
테스트 4 〉	통과 (0.12ms, 33.6MB)
테스트 5 〉	통과 (0.17ms, 33.6MB)
테스트 6 〉	통과 (0.16ms, 33.6MB)
테스트 7 〉	통과 (0.15ms, 33.6MB)
테스트 8 〉	통과 (0.13ms, 33.6MB)
테스트 9 〉	통과 (0.13ms, 33.6MB)
테스트 10 〉	통과 (0.13ms, 33.6MB)
테스트 11 〉	통과 (0.23ms, 33.6MB)
테스트 12 〉	통과 (0.14ms, 33.7MB)
테스트 13 〉	통과 (0.12ms, 33.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/

// 다른 사람의 풀이
function solution(number) {
  let result = 0;

  const combination = (current, start) => {
    if (current.length === 3) {
      result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
      return;
    }

    for (let i = start; i < number.length; i++) {
      combination([...current, number[i]], i + 1);
    }
  };
  combination([], 0);
  return result;
}

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.28ms, 33.7MB)
테스트 2 〉	통과 (0.30ms, 33.8MB)
테스트 3 〉	통과 (0.19ms, 33.8MB)
테스트 4 〉	통과 (0.25ms, 33.7MB)
테스트 5 〉	통과 (0.48ms, 33.7MB)
테스트 6 〉	통과 (0.25ms, 33.7MB)
테스트 7 〉	통과 (0.28ms, 33.7MB)
테스트 8 〉	통과 (0.29ms, 33.7MB)
테스트 9 〉	통과 (0.41ms, 33.7MB)
테스트 10 〉	통과 (0.33ms, 33.7MB)
테스트 11 〉	통과 (0.24ms, 33.8MB)
테스트 12 〉	통과 (0.28ms, 33.7MB)
테스트 13 〉	통과 (0.23ms, 33.7MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/
