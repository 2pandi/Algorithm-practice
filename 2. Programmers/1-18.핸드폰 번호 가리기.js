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
