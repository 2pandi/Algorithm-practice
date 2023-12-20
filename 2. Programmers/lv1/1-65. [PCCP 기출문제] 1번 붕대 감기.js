// bandage [기술 시전 시간(t), 초당 회복량(x), 추가 회복량(y)]: number[]
// health  최대 체력: number
// attacks [[몬스터의 공격 시간, 피해량], ...]: number[][]
// time 시간: number
// straightSecond 기술 연속 성공 시간: number
// nowHealth 현재 체력: number

/**
 * [5, 1, 5]
 * 30
 * [[2, 10], [9, 15], [10, 5], [11, 5]]
 */

function solution(bandage, health, attacks) {
  const [t, x, y] = bandage;
  let time = 0,
    straightSecond = 0,
    nowHealth = health;

  while (attacks.length) {
    time++;
    // 공격 O
    if (time === attacks[0][0]) {
      straightSecond = 0;
      const attack = attacks.shift();
      nowHealth -= attack[1];
      if (nowHealth <= 0) return -1;

      // 공격 X
    } else {
      nowHealth = nowHealth + x >= health ? health : nowHealth + x;
      straightSecond++;
      if (straightSecond === t) {
        straightSecond = 0;
        nowHealth = nowHealth + y >= health ? health : nowHealth + y;
      }
    }
  }

  return nowHealth;
}

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.23ms, 33.4MB)
테스트 2 〉	통과 (0.28ms, 33.3MB)
테스트 3 〉	통과 (0.16ms, 33.4MB)
테스트 4 〉	통과 (0.06ms, 33.3MB)
테스트 5 〉	통과 (0.06ms, 33.3MB)
테스트 6 〉	통과 (0.07ms, 33.4MB)
테스트 7 〉	통과 (0.16ms, 33.4MB)
테스트 8 〉	통과 (0.16ms, 33.4MB)
테스트 9 〉	통과 (0.19ms, 33.5MB)
테스트 10 〉	통과 (0.23ms, 33.3MB)
테스트 11 〉	통과 (0.23ms, 33.4MB)
테스트 12 〉	통과 (0.22ms, 33.3MB)
테스트 13 〉	통과 (0.22ms, 33.5MB)
테스트 14 〉	통과 (0.22ms, 33.5MB)
테스트 15 〉	통과 (0.34ms, 33.3MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

// attacks의 최대값은 100이고 time의 최대값은 1000이므로 attacks를 기준으로 반복문을 돌리는 것이 좀 더 빠르다.
// 다른 사람의 풀이
function solution(bandage, health, attacks) {
  let currHealth = health;
  let currTime = 0;

  for (let [attackTime, damage] of attacks) {
    let diffTime = attackTime - currTime - 1;
    currHealth +=
      diffTime * bandage[1] + Math.floor(diffTime / bandage[0]) * bandage[2];

    if (currHealth > health) currHealth = health;
    currHealth -= damage;
    if (currHealth <= 0) return -1;
    currTime = attackTime;
  }

  return currHealth;
}

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.10ms, 33.5MB)
테스트 2 〉	통과 (0.12ms, 33.5MB)
테스트 3 〉	통과 (0.09ms, 33.5MB)
테스트 4 〉	통과 (0.10ms, 33.5MB)
테스트 5 〉	통과 (0.08ms, 33.4MB)
테스트 6 〉	통과 (0.06ms, 33.5MB)
테스트 7 〉	통과 (0.08ms, 33.5MB)
테스트 8 〉	통과 (0.12ms, 33.5MB)
테스트 9 〉	통과 (0.28ms, 33.5MB)
테스트 10 〉	통과 (0.07ms, 33.4MB)
테스트 11 〉	통과 (0.18ms, 33.5MB)
테스트 12 〉	통과 (0.20ms, 33.4MB)
테스트 13 〉	통과 (0.31ms, 33.5MB)
테스트 14 〉	통과 (0.21ms, 33.4MB)
테스트 15 〉	통과 (0.07ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
