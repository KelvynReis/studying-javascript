// reduce -> reduz o array a um elemento

const numeros = [5, 50, 80, 1, 2,3 ,5 ,8 ,7 ,11 ,15 ,22 , 27]

const soma = numeros.reduce( ( acumulador, value) =>{
    return acumulador+=value;
}, 0)

// console.log(soma);

const pares = numeros.reduce( (acumulador, value )=>{
    if(value % 2 === 0){
        acumulador.push(value)
    }

    return acumulador
}, [])

// console.log(pares);

const dobro = numeros.reduce( (acumulador, value) =>{
    acumulador.push(value * 2);

    return acumulador
}, [])

// console.log(dobro);


//retorne a pessoa mais velha
const pessoas = [
    { nome: 'Kelvyn', idade: 21},
    { nome: 'Keven', idade: 20},
    { nome: 'Joao', idade: 18},
    { nome: 'Poli', idade: 37},
    { nome: 'Rosana', idade: 32},
    { nome: 'wallace', idade: 47},
]

const pessoaVelha = pessoas.reduce( function( cont , value) {
    if(cont.idade > value.idade ) return cont
    return value
});
//  console.log(pessoaVelha);

const numerosPares = numeros
    .filter(valor => valor % 2 === 0)
    .map( valor => valor * 2)
    .reduce((ac, valor) => ac + valor);
console.log(numerosPares);