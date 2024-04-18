/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.05ms, 33.4MB)
테스트 2 〉	통과 (0.14ms, 33.5MB)
테스트 3 〉	통과 (0.33ms, 33.6MB)
테스트 4 〉	통과 (0.36ms, 33.5MB)
테스트 5 〉	통과 (0.39ms, 33.5MB)
테스트 6 〉	통과 (0.13ms, 33.5MB)
테스트 7 〉	통과 (0.31ms, 33.5MB)
테스트 8 〉	통과 (0.31ms, 33.5MB)
테스트 9 〉	통과 (0.14ms, 33.5MB)
테스트 10 〉	통과 (0.41ms, 33.6MB)
효율성  테스트
테스트 1 〉	통과 (44.39ms, 44.6MB)
테스트 2 〉	통과 (8.80ms, 41.8MB)
테스트 3 〉	통과 (8.75ms, 45.3MB)
테스트 4 〉	통과 (7.07ms, 42.1MB)
테스트 5 〉	통과 (26.36ms, 42.2MB)
채점 결과
정확성: 66.7
효율성: 33.3
합계: 100.0 / 100.0
 */

function solution(prices) {
  const ans = [];
  const len = prices.length;
  for (let i = 0; i < len - 1; i++) {
    if (prices[i] === 1) {
      ans.push(len - (i + 1));
      continue;
    }
    let idx;
    for (let j = i + 1; j < len - 1; j++) {
      if (prices[j] < prices[i]) {
        idx = j - i;
        break;
      }
    }
    ans.push(idx ? idx : len - i - 1);
  }
  ans.push(0);
  return ans;
}

// 효율 실패
function solution(prices) {
  const ans = [];
  while (prices.length) {
    const price = prices.shift();
    if (!prices.length) {
      ans.push(0);
      break;
    }
    if (price === 1) {
      ans.push(prices.length);
      continue;
    }
    const idx = prices.findIndex((v) => v < price);
    ans.push(idx === -1 ? prices.length : idx + 1);
  }
  return ans;
}

// 효율 실패
function solution(prices) {
  const ans = [];
  while (prices.length) {
    const price = prices.shift();
    if (!prices.length) {
      ans.push(0);
      break;
    }
    if (price === 1) {
      ans.push(prices.length);
      continue;
    }
    let count = 1;
    for (let i = 0; i < prices.length; i++) {
      if (prices[i] < price || i === prices.length - 1) {
        ans.push(count);
        break;
      } else count++;
    }
  }
  return ans;
}

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.11ms, 33.5MB)
테스트 2 〉	통과 (0.28ms, 33.6MB)
테스트 3 〉	통과 (0.51ms, 33.5MB)
테스트 4 〉	통과 (0.64ms, 33.6MB)
테스트 5 〉	통과 (0.69ms, 33.5MB)
테스트 6 〉	통과 (0.19ms, 33.4MB)
테스트 7 〉	통과 (0.29ms, 33.6MB)
테스트 8 〉	통과 (0.52ms, 33.5MB)
테스트 9 〉	통과 (0.28ms, 33.4MB)
테스트 10 〉	통과 (0.43ms, 33.6MB)
효율성  테스트
테스트 1 〉	통과 (9.14ms, 43.7MB)
테스트 2 〉	통과 (7.87ms, 42MB)
테스트 3 〉	통과 (36.94ms, 43.9MB)
테스트 4 〉	통과 (28.64ms, 41.8MB)
테스트 5 〉	통과 (7.07ms, 42.1MB)
채점 결과
정확성: 66.7
효율성: 33.3
합계: 100.0 / 100.0
 */

// 다른 사람의 풀이
function solution(prices) {
  const stack = [];
  const length = prices.length;
  const answer = Array.from({ length }).fill(0);

  for (let i = 0; i < length; i++) {
    while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
      let temp = stack.pop();
      answer[temp] = i - temp;
    }
    stack.push(i);
  }

  while (stack.length) {
    let temp = stack.pop();
    answer[temp] = length - temp - 1;
  }

  return answer;
}
