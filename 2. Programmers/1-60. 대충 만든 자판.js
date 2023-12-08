function solution(keymap, targets) {
  const shortestKeymap = {};
  let result = Array(targets.length).fill(0);
  const minKeymap = [...new Set(keymap.join().split(""))];

  targets.map((target, i) => {
    if (
      [...new Set([...minKeymap, ...target.split("")])].length >
      minKeymap.length
    )
      result[i] = -1;
  });

  if (result.indexOf(0) < 0) return result;

  result = result.map((v, i) => {
    if (v === -1) return v;

    let targetArr = targets[i].split("");

    targetArr = targetArr.map((target) => {
      if (shortestKeymap[target]) return shortestKeymap[target];

      shortestKeymap[target] =
        Math.min(
          ...keymap
            .filter((key) => key.includes(target))
            .map((key) => key.indexOf(target))
        ) + 1;
      return shortestKeymap[target];
    });

    return targetArr.reduce((cur, pre) => cur + pre, 0);
  });

  return result;
}

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.56ms, 33.7MB)
테스트 2 〉	통과 (0.52ms, 33.7MB)
테스트 3 〉	통과 (0.47ms, 33.7MB)
테스트 4 〉	통과 (0.51ms, 33.6MB)
테스트 5 〉	통과 (0.47ms, 33.7MB)
테스트 6 〉	통과 (0.91ms, 33.6MB)
테스트 7 〉	통과 (0.48ms, 33.7MB)
테스트 8 〉	통과 (0.74ms, 33.6MB)
테스트 9 〉	통과 (0.45ms, 33.5MB)
테스트 10 〉	통과 (0.47ms, 33.5MB)
테스트 11 〉	통과 (0.19ms, 33.6MB)
테스트 12 〉	통과 (0.19ms, 33.6MB)
테스트 13 〉	통과 (0.16ms, 33.3MB)
테스트 14 〉	통과 (1.27ms, 34MB)
테스트 15 〉	통과 (2.72ms, 34.4MB)
테스트 16 〉	통과 (1.54ms, 34.2MB)
테스트 17 〉	통과 (1.48ms, 34.1MB)
테스트 18 〉	통과 (1.20ms, 34MB)
테스트 19 〉	통과 (1.42ms, 34MB)
테스트 20 〉	통과 (1.35ms, 34MB)
테스트 21 〉	통과 (1.22ms, 33.9MB)
테스트 22 〉	통과 (1.49ms, 34.1MB)
테스트 23 〉	통과 (1.37ms, 34.2MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

// 다른 풀이
function solution(keymap, targets) {
  const shortestKeymap = {};
  let result = Array(targets.length).fill(0);
  const minKeymap = [...new Set(keymap.join().split(""))];
  const minTargets = [...new Set(targets.join().split(""))];

  minTargets.map((target) => {
    shortestKeymap[target] =
      Math.min(
        ...keymap
          .filter((key) => key.includes(target))
          .map((key) => key.indexOf(target))
      ) + 1;
  });

  targets.map((target, i) => {
    if (
      [...new Set([...minKeymap, ...target.split("")])].length >
      minKeymap.length
    )
      result[i] = -1;
  });

  if (!result.includes(0)) return result;

  result = result.map((v, i) => {
    if (v === -1) return v;

    const targetNums = targets[i].split("").map((char) => shortestKeymap[char]);
    return targetNums.reduce((cur, pre) => cur + pre, 0);
  });

  return result;
}

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.82ms, 33.6MB)
테스트 2 〉	통과 (0.57ms, 33.7MB)
테스트 3 〉	통과 (0.47ms, 33.6MB)
테스트 4 〉	통과 (0.50ms, 33.7MB)
테스트 5 〉	통과 (0.50ms, 33.6MB)
테스트 6 〉	통과 (0.64ms, 33.6MB)
테스트 7 〉	통과 (0.59ms, 33.6MB)
테스트 8 〉	통과 (0.60ms, 33.7MB)
테스트 9 〉	통과 (0.51ms, 33.6MB)
테스트 10 〉	통과 (0.49ms, 33.6MB)
테스트 11 〉	통과 (0.19ms, 33.5MB)
테스트 12 〉	통과 (0.23ms, 33.5MB)
테스트 13 〉	통과 (0.24ms, 33.5MB)
테스트 14 〉	통과 (2.29ms, 34.1MB)
테스트 15 〉	통과 (3.02ms, 34.3MB)
테스트 16 〉	통과 (1.96ms, 34.2MB)
테스트 17 〉	통과 (2.79ms, 34.3MB)
테스트 18 〉	통과 (2.37ms, 34.1MB)
테스트 19 〉	통과 (2.86ms, 34.2MB)
테스트 20 〉	통과 (2.35ms, 34.2MB)
테스트 21 〉	통과 (2.25ms, 34.2MB)
테스트 22 〉	통과 (1.58ms, 34.4MB)
테스트 23 〉	통과 (1.58ms, 34.2MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

// 타겟에서 먼저 거를 것이 아니라 기준점(키맵)에서 먼저 정리 해놓고 시작하니까 가독성도 좋고 효율도 좋은 것 같다.
// 다른 사람의 풀이
function solution(keymap, targets) {
  const answer = [];
  const map = {};
  for (const items of keymap) {
    items
      .split("")
      .map(
        (item, index) =>
          (map[item] = map[item] < index + 1 ? map[item] : index + 1)
      );
  }
  for (const items of targets) {
    answer.push(
      items.split("").reduce((cur, item) => (cur += map[item]), 0) || -1
    );
  }
  return answer;
}

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.29ms, 33.5MB)
테스트 2 〉	통과 (0.28ms, 33.6MB)
테스트 3 〉	통과 (0.27ms, 33.7MB)
테스트 4 〉	통과 (0.31ms, 33.6MB)
테스트 5 〉	통과 (0.27ms, 33.6MB)
테스트 6 〉	통과 (0.34ms, 33.5MB)
테스트 7 〉	통과 (0.27ms, 33.5MB)
테스트 8 〉	통과 (0.27ms, 33.6MB)
테스트 9 〉	통과 (0.38ms, 33.5MB)
테스트 10 〉	통과 (0.27ms, 33.5MB)
테스트 11 〉	통과 (0.11ms, 33.5MB)
테스트 12 〉	통과 (0.10ms, 33.6MB)
테스트 13 〉	통과 (0.12ms, 33.5MB)
테스트 14 〉	통과 (0.98ms, 33.8MB)
테스트 15 〉	통과 (1.06ms, 32.7MB)
테스트 16 〉	통과 (0.96ms, 32.5MB)
테스트 17 〉	통과 (1.04ms, 33.8MB)
테스트 18 〉	통과 (0.98ms, 33.9MB)
테스트 19 〉	통과 (1.09ms, 33.7MB)
테스트 20 〉	통과 (1.26ms, 33.7MB)
테스트 21 〉	통과 (0.91ms, 33.8MB)
테스트 22 〉	통과 (1.05ms, 33.7MB)
테스트 23 〉	통과 (1.85ms, 33.7MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
