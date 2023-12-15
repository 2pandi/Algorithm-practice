function solution(wallpaper) {
  const result = Array(4).fill(-1);

  for (let i = 0; i < wallpaper.length; i++) {
    if (wallpaper[i].includes("#")) {
      if (result[0] < 0) {
        result[0] = i;
        result[2] = i + 1;
      } else if (result[2] <= i) result[2] = i + 1;
      const first = wallpaper[i].indexOf("#");
      if (result[1] < 0 || result[1] > first) result[1] = first;
      const last = wallpaper[i].lastIndexOf("#") + 1;
      if (result[3] < 0 || result[3] < last) result[3] = last;
    }
  }

  return result;
}

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.06ms, 33.5MB)
테스트 2 〉	통과 (0.06ms, 33.5MB)
테스트 3 〉	통과 (0.06ms, 33.4MB)
테스트 4 〉	통과 (0.06ms, 33.5MB)
테스트 5 〉	통과 (0.06ms, 33.4MB)
테스트 6 〉	통과 (0.08ms, 33.5MB)
테스트 7 〉	통과 (0.17ms, 33.5MB)
테스트 8 〉	통과 (0.16ms, 33.5MB)
테스트 9 〉	통과 (0.17ms, 33.4MB)
테스트 10 〉	통과 (0.16ms, 33.5MB)
테스트 11 〉	통과 (0.15ms, 33.4MB)
테스트 12 〉	통과 (0.07ms, 33.5MB)
테스트 13 〉	통과 (0.17ms, 33.4MB)
테스트 14 〉	통과 (0.16ms, 33.5MB)
테스트 15 〉	통과 (0.21ms, 33.6MB)
테스트 16 〉	통과 (0.16ms, 33.4MB)
테스트 17 〉	통과 (0.17ms, 33.4MB)
테스트 18 〉	통과 (0.26ms, 33.5MB)
테스트 19 〉	통과 (0.29ms, 33.4MB)
테스트 20 〉	통과 (0.23ms, 33.5MB)
테스트 21 〉	통과 (0.07ms, 33.4MB)
테스트 22 〉	통과 (0.06ms, 33.4MB)
테스트 23 〉	통과 (0.26ms, 33.4MB)
테스트 24 〉	통과 (0.23ms, 33.4MB)
테스트 25 〉	통과 (0.20ms, 33.5MB)
테스트 26 〉	통과 (0.20ms, 33.4MB)
테스트 27 〉	통과 (0.19ms, 33.4MB)
테스트 28 〉	통과 (0.07ms, 33.4MB)
테스트 29 〉	통과 (0.25ms, 33.5MB)
테스트 30 〉	통과 (0.19ms, 33.5MB)
테스트 31 〉	통과 (0.20ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */
