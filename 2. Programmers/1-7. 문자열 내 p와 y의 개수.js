function solution(s){
    let str = s.toLowerCase();
    if(!str.includes('p') && !str.includes('y')) return true;
    let p = str.split('').filter(v => v === 'p').length;
    let y = str.split('').filter(v => v === 'y').length;
    return (p === y) ? true : false; 
}