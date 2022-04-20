function aleatorio(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}
function espera ( msg, tempo){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(msg);
        },tempo)
    })
}

espera('kelvyn lindo 1', aleatorio(1,3))
    .then( res =>{
        console.log(res);
        return espera('Kelvyn lindo 2', aleatorio(1,3))
    })
    .then( res =>{
        console.log(res);
        return espera('Kelvyn lindo 3', aleatorio(1,3))
    })
    .then( res =>{
        console.log(res);
    })
