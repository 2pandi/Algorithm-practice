function solution(phone_number) {
  let secret = phone_number.split("");
  for (let i = 0; i < secret.length - 4; i++) {
    secret[i] = "*";
  }
  return secret.join("");
}

function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

// 정규식 뜯어보기
// /  \d (?=  \d{4} )  /  g

// x(?=y) : x다음에 y가 오는 경우에만 x와 일치
// x{n} : (n이 양의 정수인 경우) x가 n번 발생하는 것과 일치
// / 숫자1 (뒤에 숫자2 4개) /g
