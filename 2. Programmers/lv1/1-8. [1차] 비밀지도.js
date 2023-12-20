function solution(n, arr1, arr2) {
    let map1 = arr1.map(v => v.toString(2)).map(v => v.padStart(n, '0'));
    let map2 = arr2.map(v => v.toString(2)).map(v => v.padStart(n, '0'));
    let newMap = [];
    for(let i = 0; i < n; i++){
        let el = "";
        for(let j = 0; j < n; j++){
            if(map1[i][j] === '1' || map2[i][j] === '1') el += '#'
            else el += ' '
        }
        newMap.push(el);
    }
    return newMap;
}