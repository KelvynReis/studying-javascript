// arguments sustenta todos os argumentos enviados
function funcao (){
    let total = 0;
    for(let argumento of arguments){
        total += argumento
    }
    console.log(total);
}

funcao(1,2,3,4,5,6,7)

const conta = ( operador, acumulador, ...numeros) => {
    for( numero of numeros){

        if(operador === '+') acumulador+= numero;
        if(operador === '-') acumulador-= numero;
        if(operador === '*') acumulador*= numero;
        if(operador === '/') acumulador/= numero;
    }

    console.log(acumulador);
}

conta('+', 0,20,30)