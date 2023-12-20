// 유클리드 호제법
// A를 B로 나눈 몫을 Q라 하고, 나머지를 R이라 했을 때 gcd(A, B) === gcd(B, R)

const getGCD = (a, b) => {
  const r = a % b;
  if (r === 0) return b;
  return getGCD(b, r);
};

function solution(n, m) {
  const gcd = getGCD(n, m);
  return [gcd, (n * m) / gcd];
}

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.05ms, 33.5MB)
테스트 2 〉	통과 (0.06ms, 33.4MB)
테스트 3 〉	통과 (0.06ms, 33.4MB)
테스트 4 〉	통과 (0.06ms, 33.5MB)
테스트 5 〉	통과 (0.06ms, 33.5MB)
테스트 6 〉	통과 (0.06ms, 33.4MB)
테스트 7 〉	통과 (0.05ms, 33.4MB)
테스트 8 〉	통과 (0.06ms, 33.4MB)
테스트 9 〉	통과 (0.05ms, 33.6MB)
테스트 10 〉	통과 (0.06ms, 33.4MB)
테스트 11 〉	통과 (0.05ms, 33.5MB)
테스트 12 〉	통과 (0.07ms, 33.4MB)
테스트 13 〉	통과 (0.05ms, 33.4MB)
테스트 14 〉	통과 (0.05ms, 33.5MB)
테스트 15 〉	통과 (0.07ms, 33.5MB)
테스트 16 〉	통과 (0.06ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

// 다른 사람의 풀이
function gcdlcm(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}
// r에 a % b가 할당되면서 해당값이 리턴되므로
// a % b가 0이 되는 순간 0(false)이 리턴되면서 for loop 종료.
// 따라서 b가 최대공약수가 되는 순간 for loop가 종료된다.
