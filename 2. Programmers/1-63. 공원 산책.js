const dirSet = {
  E: [1, 1],
  W: [1, -1],
  S: [0, 1],
  N: [0, -1],
};

function check(start, end, park) {
  const [sx, sy] = start,
    [ex, ey] = end;

  const isVertical = sx === ex;
  const startIdx = isVertical ? (sy < ey ? sy : ey) : sx < ex ? sx : ex;
  const endIdx = isVertical ? (sy < ey ? ey : sy) : sx < ex ? ex : sx;

  for (let i = startIdx; i <= endIdx; i++) {
    if (isVertical) {
      if (park[sx][i] === "X") return false;
    } else {
      if (park[i][sy] === "X") return false;
    }
  }

  return true;
}

function solution(park, routes) {
  let s = [-1, -1];
  for (let i = 0; i < park.length; i++) {
    if (park[i].includes("S")) {
      s[0] = i;
      s[1] = park[i].indexOf("S");
      break;
    }
  }

  for (let route of routes) {
    let newS = [...s];
    const split = route.split(" ");
    let [dir, count] = dirSet[split[0]];
    count *= split[1];

    newS[dir] += count;
    if (!park[newS[0]] || !park[newS[0]][newS[1]]) continue;
    if (park[newS[0]][newS[1]] === "X") continue;
    if (!check(s, newS, park)) continue;
    s = newS;
  }

  return s;
}

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.09ms, 33.2MB)
테스트 2 〉	통과 (0.16ms, 33.3MB)
테스트 3 〉	통과 (0.28ms, 33.3MB)
테스트 4 〉	통과 (0.33ms, 33.4MB)
테스트 5 〉	통과 (0.33ms, 33.4MB)
테스트 6 〉	통과 (0.44ms, 33.4MB)
테스트 7 〉	통과 (0.36ms, 33.4MB)
테스트 8 〉	통과 (0.35ms, 33.4MB)
테스트 9 〉	통과 (0.34ms, 33.4MB)
테스트 10 〉	통과 (0.36ms, 33.4MB)
테스트 11 〉	통과 (0.36ms, 33.4MB)
테스트 12 〉	통과 (0.34ms, 33.5MB)
테스트 13 〉	통과 (0.36ms, 33.5MB)
테스트 14 〉	통과 (0.34ms, 33.4MB)
테스트 15 〉	통과 (0.34ms, 33.4MB)
테스트 16 〉	통과 (0.26ms, 33.5MB)
테스트 17 〉	통과 (0.34ms, 33.5MB)
테스트 18 〉	통과 (0.25ms, 33.4MB)
테스트 19 〉	통과 (0.32ms, 33.4MB)
테스트 20 〉	통과 (0.29ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
