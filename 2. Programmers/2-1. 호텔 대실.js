/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.39ms, 33.5MB)
테스트 2 〉	통과 (64.65ms, 37.6MB)
테스트 3 〉	통과 (117.88ms, 38.1MB)
테스트 4 〉	통과 (9.57ms, 38MB)
테스트 5 〉	통과 (0.20ms, 33.5MB)
테스트 6 〉	통과 (47.88ms, 38.2MB)
테스트 7 〉	통과 (10.96ms, 38.1MB)
테스트 8 〉	통과 (8.10ms, 37.7MB)
테스트 9 〉	통과 (8.33ms, 37.8MB)
테스트 10 〉	통과 (10.56ms, 38.3MB)
테스트 11 〉	통과 (12.48ms, 38.1MB)
테스트 12 〉	통과 (11.29ms, 38.1MB)
테스트 13 〉	통과 (7.66ms, 37.6MB)
테스트 14 〉	통과 (10.91ms, 38MB)
테스트 15 〉	통과 (11.76ms, 38.2MB)
테스트 16 〉	통과 (8.90ms, 37.8MB)
테스트 17 〉	통과 (16.42ms, 38.1MB)
테스트 18 〉	통과 (10.10ms, 38MB)
테스트 19 〉	통과 (10.51ms, 37.9MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function solution(book_time) {
  book_time = book_time
    .map((book) => book.map((time) => intoMinute(time)))
    .sort((a, b) => b[0] - a[0]);
  const rooms = [[book_time.pop()]];
  while (book_time.length) {
    const book = book_time.pop();
    const roomsLen = rooms.length;
    let isAdded = false;
    for (let i = 0; i < roomsLen; i++) {
      if (isAdded) break;
      const timeLen = rooms[i].length;
      for (let j = 0; j < timeLen; j++) {
        const [start, end] = rooms[i][j];
        if (
          (start <= book[0] && end + 10 > book[0]) ||
          (start < book[1] + 10 && end + 10 >= book[1] + 10)
        ) {
          j = timeLen;
          continue;
        }
        if (j === timeLen - 1) {
          rooms[i].push(book);
          isAdded = true;
        }
      }
      if (i === roomsLen - 1 && !isAdded) rooms.push([book]);
    }
  }
  return rooms.length;
}

function intoMinute(time) {
  const minutesArr = [60, 1];
  return time.split(":").reduce((pre, cur, i) => pre + cur * minutesArr[i], 0);
}

solution([
  ["15:00", "17:00"],
  ["16:40", "18:20"],
  ["14:20", "15:20"],
  ["14:10", "19:20"],
  ["18:20", "21:20"],
]);

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.39ms, 33.6MB)
테스트 2 〉	통과 (4.13ms, 36.8MB)
테스트 3 〉	통과 (14.33ms, 38.4MB)
테스트 4 〉	통과 (14.41ms, 38.1MB)
테스트 5 〉	통과 (0.35ms, 33.6MB)
테스트 6 〉	통과 (12.18ms, 38.5MB)
테스트 7 〉	통과 (12.82ms, 38.3MB)
테스트 8 〉	통과 (5.84ms, 37.1MB)
테스트 9 〉	통과 (4.94ms, 36.9MB)
테스트 10 〉	통과 (9.92ms, 38.1MB)
테스트 11 〉	통과 (15.07ms, 38.7MB)
테스트 12 〉	통과 (13.20ms, 38.5MB)
테스트 13 〉	통과 (2.58ms, 37MB)
테스트 14 〉	통과 (7.93ms, 38.3MB)
테스트 15 〉	통과 (12.13ms, 38.5MB)
테스트 16 〉	통과 (3.88ms, 37.1MB)
테스트 17 〉	통과 (9.49ms, 38.4MB)
테스트 18 〉	통과 (6.12ms, 37.2MB)
테스트 19 〉	통과 (5.23ms, 37.7MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
 */

function makeMinStamp(time) {
  const [hour, min] = time.split(":").map((v) => Number(v));
  return hour * 60 + min;
}

function solution(book_time) {
  const timeArr = Array.from({ length: makeMinStamp("23:59") + 10 }, () => 0);

  book_time.forEach((time, i) => {
    const [s, e] = time;
    let start = makeMinStamp(s);
    const end = makeMinStamp(e) + 9;

    for (start; start <= end; start++) {
      timeArr[start]++;
    }
  });

  return Math.max(...timeArr);
}

solution([
  ["15:00", "17:00"],
  ["16:40", "18:20"],
  ["14:20", "15:20"],
  ["14:10", "19:20"],
  ["18:20", "21:20"],
]);
