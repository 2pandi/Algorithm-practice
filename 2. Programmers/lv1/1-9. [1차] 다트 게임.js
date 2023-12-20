function solution(dartResult) {
    let score = dartResult.replaceAll('S', 'S.').replaceAll('D', 'D.').replaceAll('T', 'T.').replaceAll('*', '*.').replaceAll('#', '#.')
    
    if(score[score.length - 1] ==='.') score = score.slice(0, score.length - 1)
    
    let scoreArr = score.split('.');

    let ter = ['S', 'D', 'T'];
    let prize = ['*', '#'];
    
    scoreArr = scoreArr.map(v => {
	if(!prize.includes(v)) {
    if(v.length === 2){
    return v[0] ** (ter.indexOf(v[1]) + 1)  
    }
    if(v.length === 3) return 10 ** (ter.indexOf(v[2]) + 1)
  }
	return v}
)
    
    if(scoreArr.indexOf('*') >= 0){
	for(let i = 0; i < scoreArr.length; i++){
    if(scoreArr[i] === '*'){
      if(scoreArr[i - 2]) {
        if(typeof scoreArr[i - 2] === 'number') scoreArr[i - 2] *= 2
     		if(typeof scoreArr[i - 2] !== 'number' && scoreArr[i - 3]) scoreArr[i - 3] *= 2
      }
      if(scoreArr[i - 1]) scoreArr[i - 1] *= 2
	  }
	}  
	for(var i = 0; i < scoreArr.length; i++){ 
  	if (scoreArr[i] === '*') { 
      scoreArr.splice(i, 1); 
      i--; 
  	}
	}
}
    if(scoreArr.indexOf('#') >= 0){
  for(let i = 0; i < scoreArr.length; i++){
    if(scoreArr[i] === '#') scoreArr[i - 1] *= -1
	}
  for(var i = 0; i < scoreArr.length; i++){ 
  	if (scoreArr[i] === '#') { 
      scoreArr.splice(i, 1); 
      i--; 
  	}
	}
}

    return scoreArr.reduce((a, b) => a + b);
 }
