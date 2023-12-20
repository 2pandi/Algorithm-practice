function solution(s, n) {
  return [...s]
    .map((char) => {
      if (char === " ") return char;
      const isUpper = char === char.toUpperCase();
      let charCode = char.charCodeAt(0) + n;
      if ((isUpper && charCode > 90) || (!isUpper && charCode > 122))
        charCode -= 26;
      console.log(charCode);
      return String.fromCharCode(charCode);
    })
    .join("");
}

/**
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (5.22ms, 33.6MB)
테스트 2 〉	통과 (2.92ms, 33.6MB)
테스트 3 〉	통과 (5.21ms, 33.6MB)
테스트 4 〉	통과 (2.94ms, 33.5MB)
테스트 5 〉	통과 (2.73ms, 33.5MB)
테스트 6 〉	통과 (3.60ms, 33.7MB)
테스트 7 〉	통과 (5.05ms, 33.7MB)
테스트 8 〉	통과 (3.20ms, 33.6MB)
테스트 9 〉	통과 (3.31ms, 33.8MB)
테스트 10 〉	통과 (2.63ms, 33.6MB)
테스트 11 〉	통과 (4.08ms, 33.8MB)
테스트 12 〉	통과 (3.83ms, 33.7MB)
테스트 13 〉	통과 (39.90ms, 39.3MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/

// 다른 사람의 풀이
function solution(s, n) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var answer = "";

  for (var i = 0; i < s.length; i++) {
    var text = s[i];
    if (text == " ") {
      answer += " ";
      continue;
    }
    var textArr = upper.includes(text) ? upper : lower;
    var index = textArr.indexOf(text) + n;
    if (index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }
  return answer;
}

/** 확실히 인덱스를 통한 접근이 빠르다
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.18ms, 33.5MB)
테스트 2 〉	통과 (0.23ms, 33.4MB)
테스트 3 〉	통과 (0.25ms, 33.5MB)
테스트 4 〉	통과 (0.14ms, 33.4MB)
테스트 5 〉	통과 (0.08ms, 33.6MB)
테스트 6 〉	통과 (0.15ms, 33.5MB)
테스트 7 〉	통과 (0.16ms, 33.4MB)
테스트 8 〉	통과 (0.15ms, 33.4MB)
테스트 9 〉	통과 (0.18ms, 33.4MB)
테스트 10 〉	통과 (0.09ms, 33.4MB)
테스트 11 〉	통과 (0.14ms, 33.5MB)
테스트 12 〉	통과 (0.15ms, 33.5MB)
테스트 13 〉	통과 (5.29ms, 37.2MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/
