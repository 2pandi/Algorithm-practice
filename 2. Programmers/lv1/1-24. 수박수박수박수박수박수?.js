function solution(n) {
  let i = 0;
  result = "";
  while (i < n) {
    result += i % 2 === 0 ? "수" : "박";
    i++;
  }
  return result;
}
/**
function waterMelon(n){
  var result = "수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박"
  return result.substring(0,n);
}
ㅋㅋㅋㅋㅋ
 */
