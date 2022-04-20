function aleatorio(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}
function espera ( msg, tempo){

    return new Promise((resolve, reject)=>{

        if(typeof msg !== 'string'){
            reject(false)
            return;
        }
        setTimeout(()=>{
            resolve(msg);
        },tempo)
    })
}

function baixaPagina() {
    const emCache = false;
    if(emCache) {
        return Promise.resolve('Página em cache');
        } else {
            return espera('Baixei a página', 3000);
        }
}
baixaPagina()
.then( dadosPagina => {
    console.log(dadosPagina);
    })
    .catch(e => console.log(e));
    

// Promisse.all Promise.race Promise.resolve Promise.reject

const promises = [
    // 'Primeiro valor',
    espera('Promise 1', aleatorio(1,5)),
    espera('Promise 2', aleatorio(1,5)),
    espera('Promise 3', aleatorio(1,5)),
    // espera(1000, 1000),
    // 'Outro valor'
];

// Promise.race(promises).then(valor => console.log(valor)).catch( er => console.log(er))