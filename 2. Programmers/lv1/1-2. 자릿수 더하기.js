function solution(n)
{
    var answer = `${n}`.split('').map(v => +v).reduce((pre,cur) => pre + cur)
    
    return answer;
}