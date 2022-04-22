function aleatorio(min = 0, max = 3){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}
function espera ( msg, tempo){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof msg !== 'string'){
                reject(false || "Cai no erro!")
                return;
            }

            resolve(msg);
        },tempo)
    })
}

// espera('Fase 1', aleatorio())
//     .then(valor => {
//         console.log(valor)
//         return espera('Fase 2', aleatorio())
//     })
//     .then(valor =>{
//         console.log(valor)
//         return espera('Fase 3', aleatorio())
//     })
//     .then( valor =>{
//         console.log(valor);
//     })

async function executa(){
    try{
        const fase1 = await espera('Fase 1', aleatorio())
        console.log(fase1)
        const fase2 = await espera('Fase 2',aleatorio())
        console.log(fase2)
        const fase3 = await espera('Fase 3',aleatorio())
        console.log(fase3)
        console.log('Terminou na fase: ', fase3);
    } catch(e){
        console.log(e)
    }
     
}
executa()