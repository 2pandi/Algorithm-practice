/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.21ms, 33.4MB)
테스트 2 〉	통과 (0.12ms, 33.4MB)
테스트 3 〉	통과 (0.21ms, 33.6MB)
테스트 4 〉	통과 (0.22ms, 33.5MB)
테스트 5 〉	통과 (0.21ms, 33.6MB)
테스트 6 〉	통과 (0.22ms, 33.5MB)
테스트 7 〉	통과 (0.24ms, 33.5MB)
테스트 8 〉	통과 (0.24ms, 33.4MB)
테스트 9 〉	통과 (0.44ms, 33.5MB)
테스트 10 〉	통과 (0.24ms, 33.6MB)
테스트 11 〉	통과 (0.36ms, 33.5MB)
테스트 12 〉	통과 (0.09ms, 33.4MB)
테스트 13 〉	통과 (0.24ms, 33.5MB)
테스트 14 〉	통과 (0.22ms, 33.7MB)
테스트 15 〉	통과 (0.21ms, 33.5MB)
테스트 16 〉	통과 (0.08ms, 33.5MB)
테스트 17 〉	통과 (0.24ms, 33.4MB)
테스트 18 〉	통과 (0.08ms, 33.6MB)
테스트 19 〉	통과 (0.08ms, 33.4MB)
테스트 20 〉	통과 (0.07ms, 33.5MB)
테스트 21 〉	통과 (0.08ms, 33.5MB)
효율성  테스트
테스트 1 〉	통과 (15.37ms, 38.5MB)
테스트 2 〉	통과 (2.39ms, 34.5MB)
테스트 3 〉	통과 (9.79ms, 38.7MB)
테스트 4 〉	통과 (8.49ms, 38.3MB)
채점 결과
정확성: 69.9
효율성: 30.1
합계: 100.0 / 100.0
 */
function solution(maps) {
  const n = maps[0].length - 1;
  const m = maps.length - 1;
  const queue = [[0, 0, 1]];

  while (queue.length) {
    const [x, y, cnt] = queue.shift();
    if (x === n && y === m) return cnt;
    if (!maps[y][x]) continue;
    maps[y][x] = false;

    if (x > 0 && maps[y][x - 1]) queue.push([x - 1, y, cnt + 1]);
    if (x < n && maps[y][x + 1]) queue.push([x + 1, y, cnt + 1]);
    if (y > 0 && maps[y - 1][x]) queue.push([x, y - 1, cnt + 1]);
    if (y < m && maps[y + 1][x]) queue.push([x, y + 1, cnt + 1]);
  }
  return -1;
}

// dfs로 풀면 효율성검사에서 통과하지 못한다
function solution(maps) {
  const n = maps.length - 1,
    m = maps[0].length - 1;
  let ans = -1;
  if (!maps[n][m] || (!maps[n - 1][m] && !maps[n][m - 1])) return ans;

  const dfs = (x, y, cnt = 1, vstd = []) => {
    if (y === n && x === m && (ans > cnt || ans < 0)) {
      ans = cnt;
      return;
    }
    // vstd가 빈 배열인 경우
    if (!vstd.length)
      vstd = maps.map((line) => line.map((el) => (el ? false : true)));
    vstd[y][x] = true;

    const vstdCopy = vstd.map((line) => line.map((el) => el));

    // 윗 길이 뚫린 경우
    if (y > 0 && !vstdCopy[y - 1][x] && (cnt < ans || ans === -1))
      dfs(x, y - 1, cnt + 1, vstdCopy);

    // 아랫 길이 뚫린 경우
    if (y < n && !vstdCopy[y + 1][x] && (cnt < ans || ans === -1))
      dfs(x, y + 1, cnt + 1, vstdCopy);

    // 오른쪽 길이 뚫린 경우
    if (x < m && !vstdCopy[y][x + 1] && (cnt < ans || ans === -1))
      dfs(x + 1, y, cnt + 1, vstdCopy);

    // 왼쪽 길이 뚫린 경우
    if (x > 0 && !vstdCopy[y][x - 1] && (cnt < ans || ans === -1))
      dfs(x - 1, y, cnt + 1, vstdCopy);
  };

  dfs(0, 0);

  return ans;
}

/**
 * 진영 자리가 0이거나 진영자리의 북,서쪽이 모두 0인 경우 -1 리턴 ✅
 */

// 다른 사람의 풀이
/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.24ms, 33.5MB)
테스트 2 〉	통과 (0.19ms, 33.6MB)
테스트 3 〉	통과 (0.23ms, 33.5MB)
테스트 4 〉	통과 (0.24ms, 33.5MB)
테스트 5 〉	통과 (0.23ms, 33.6MB)
테스트 6 〉	통과 (0.23ms, 33.5MB)
테스트 7 〉	통과 (0.27ms, 33.5MB)
테스트 8 〉	통과 (0.22ms, 33.4MB)
테스트 9 〉	통과 (0.24ms, 33.4MB)
테스트 10 〉	통과 (0.24ms, 33.6MB)
테스트 11 〉	통과 (0.26ms, 33.5MB)
테스트 12 〉	통과 (0.11ms, 33.5MB)
테스트 13 〉	통과 (0.24ms, 33.5MB)
테스트 14 〉	통과 (0.39ms, 33.5MB)
테스트 15 〉	통과 (0.21ms, 33.5MB)
테스트 16 〉	통과 (0.17ms, 33.5MB)
테스트 17 〉	통과 (0.26ms, 33.6MB)
테스트 18 〉	통과 (0.16ms, 33.5MB)
테스트 19 〉	통과 (0.16ms, 33.6MB)
테스트 20 〉	통과 (0.10ms, 33.5MB)
테스트 21 〉	통과 (0.13ms, 33.4MB)
효율성  테스트
테스트 1 〉	통과 (12.63ms, 38.3MB)
테스트 2 〉	통과 (1.29ms, 34MB)
테스트 3 〉	통과 (7.33ms, 37.8MB)
테스트 4 〉	통과 (2.35ms, 34.3MB)
채점 결과
정확성: 69.9
효율성: 30.1
합계: 100.0 / 100.0
 */
// 풀이1
function solution(maps) {
  const n = maps[0].length - 1;
  const m = maps.length - 1;
  const queue = [[0, 0, 1]];
  while (queue.length) {
    const [x, y, move] = queue.shift();
    if (x == n && y == m) return move;
    if (!maps[y][x]) continue;
    maps[y][x] = false;

    if (x - 1 >= 0 && maps[y][x - 1]) queue.push([x - 1, y, move + 1]);
    if (x + 1 <= n && maps[y][x + 1]) queue.push([x + 1, y, move + 1]);
    if (y - 1 >= 0 && maps[y - 1][x]) queue.push([x, y - 1, move + 1]);
    if (y + 1 <= m && maps[y + 1][x]) queue.push([x, y + 1, move + 1]);
  }
  return -1;
}

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.21ms, 33.5MB)
테스트 2 〉	통과 (0.11ms, 33.6MB)
테스트 3 〉	통과 (0.25ms, 33.6MB)
테스트 4 〉	통과 (0.22ms, 33.5MB)
테스트 5 〉	통과 (0.35ms, 33.5MB)
테스트 6 〉	통과 (0.23ms, 33.4MB)
테스트 7 〉	통과 (0.24ms, 33.4MB)
테스트 8 〉	통과 (0.22ms, 33.4MB)
테스트 9 〉	통과 (0.36ms, 33.7MB)
테스트 10 〉	통과 (0.32ms, 33.4MB)
테스트 11 〉	통과 (0.25ms, 33.5MB)
테스트 12 〉	통과 (0.12ms, 33.5MB)
테스트 13 〉	통과 (0.23ms, 33.4MB)
테스트 14 〉	통과 (0.25ms, 33.4MB)
테스트 15 〉	통과 (0.24ms, 33.5MB)
테스트 16 〉	통과 (0.11ms, 33.6MB)
테스트 17 〉	통과 (0.24ms, 33.5MB)
테스트 18 〉	통과 (0.10ms, 33.6MB)
테스트 19 〉	통과 (0.10ms, 33.5MB)
테스트 20 〉	통과 (0.11ms, 33.5MB)
테스트 21 〉	통과 (0.11ms, 33.5MB)
효율성  테스트
테스트 1 〉	통과 (12.99ms, 38.5MB)
테스트 2 〉	통과 (1.43ms, 34MB)
테스트 3 〉	통과 (6.95ms, 38MB)
테스트 4 〉	통과 (1.96ms, 34.2MB)
채점 결과
정확성: 69.9
효율성: 30.1
합계: 100.0 / 100.0
 */
// 풀이2 - 풀이1보다 약간 더 효율적으로 보이나 코드가 길다.
function solution(maps) {
  var yLen = maps.length - 1;
  var xLen = maps[0].length - 1;

  var queue = [[0, 0]];

  var visited = Array.from(new Array(maps.length), () =>
    new Array(maps[0].length).fill(false)
  );

  var result = 0;

  while (queue.length) {
    result++;
    var size = queue.length;
    for (var i = 0; i < size; i++) {
      var point = queue.shift();
      var curY = point[0];
      var curX = point[1];

      if (visited[curY][curX]) continue;

      maps[curY][curX] = 0;

      visited[curY][curX] = true;

      if (curY === yLen && curX === xLen) return result;

      if (curY < yLen && maps[curY + 1][curX] === 1)
        queue.push([curY + 1, curX]);
      if (curX < xLen && maps[curY][curX + 1] === 1)
        queue.push([curY, curX + 1]);
      if (curY > 0 && maps[curY - 1][curX] === 1) queue.push([curY - 1, curX]);
      if (curX > 0 && maps[curY][curX - 1] === 1) queue.push([curY, curX - 1]);
    }
  }

  return -1;
}
