function solution(s) {
  const len = s.length;
  const idx = Math.ceil(len / 2) - 1;
  if (len % 2 === 0) return s.substring(idx, idx + 2);
  return s[idx];
}
/**
function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
 */
