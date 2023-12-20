// dictionary 객체를 생성하여 rank를 빠르게 조회한다.
function solution(players, callings) {
  const playerRank = {};
  const rankPlayer = {};
  players.forEach((player, idx) => {
    playerRank[player] = idx;
    rankPlayer[idx] = player;
  });

  callings.forEach((call) => {
    const loser = rankPlayer[playerRank[call] - 1];
    rankPlayer[playerRank[call] - 1] = call;
    rankPlayer[playerRank[call]] = loser;
    playerRank[loser]++;
    playerRank[call]--;
  });

  return Object.values(rankPlayer);
}

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.08ms, 33.5MB)
테스트 2 〉	통과 (0.18ms, 33.6MB)
테스트 3 〉	통과 (0.22ms, 33.5MB)
테스트 4 〉	통과 (0.38ms, 33.6MB)
테스트 5 〉	통과 (1.54ms, 35.8MB)
테스트 6 〉	통과 (2.48ms, 36.3MB)
테스트 7 〉	통과 (24.35ms, 41.5MB)
테스트 8 〉	통과 (16.26ms, 45.1MB)
테스트 9 〉	통과 (34.70ms, 52MB)
테스트 10 〉	통과 (93.33ms, 73.1MB)
테스트 11 〉	통과 (191.04ms, 84.2MB)
테스트 12 〉	통과 (168.02ms, 84MB)
테스트 13 〉	통과 (234.92ms, 84MB)
테스트 14 〉	통과 (0.15ms, 33.4MB)
테스트 15 〉	통과 (0.08ms, 33.5MB)
테스트 16 〉	통과 (0.18ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

// 시간초과
function solution(players, callings) {
  for (let calling of callings) {
    const idx = players.indexOf(calling);
    const player = players[idx];
    players[idx] = players[idx - 1];
    players[idx - 1] = player;
  }
  return players;
}

// 다른 사람의 풀이
function solution(players, callings) {
  let idx;
  let name1;
  let name2;
  const idxList = {};

  players.forEach((name, index) => (idxList[name] = index));
  for (let call of callings) {
    idx = idxList[call];
    name1 = players[idx];
    name2 = players[idx - 1];
    idxList[call] -= 1;
    idxList[name2] += 1;
    players[idx] = name2;
    players[idx - 1] = name1;
  }

  return players;
}

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.11ms, 33.5MB)
테스트 2 〉	통과 (0.10ms, 33.4MB)
테스트 3 〉	통과 (0.22ms, 33.5MB)
테스트 4 〉	통과 (0.40ms, 33.7MB)
테스트 5 〉	통과 (2.14ms, 34.1MB)
테스트 6 〉	통과 (4.80ms, 37.9MB)
테스트 7 〉	통과 (10.92ms, 41.8MB)
테스트 8 〉	통과 (22.54ms, 47.6MB)
테스트 9 〉	통과 (34.48ms, 53MB)
테스트 10 〉	통과 (108.20ms, 75.7MB)
테스트 11 〉	통과 (248.00ms, 87.9MB)
테스트 12 〉	통과 (199.99ms, 87.8MB)
테스트 13 〉	통과 (278.62ms, 87.8MB)
테스트 14 〉	통과 (0.13ms, 33.5MB)
테스트 15 〉	통과 (0.08ms, 33.4MB)
테스트 16 〉	통과 (0.13ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
