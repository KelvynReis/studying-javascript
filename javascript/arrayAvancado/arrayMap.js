const numeros = [5, 50, 80, 1, 2,3 ,5 ,8 ,7 ,11 ,15 ,22 , 27]

// dobre os numeros

const dobroNumero = numeros.map( value => value*2);

// console.log(dobroNumero);


const pessoas = [
    { nome: 'Kelvyn', idade: 21},
    { nome: 'Keven', idade: 20},
    { nome: 'Joao', idade: 18},
    { nome: 'Poli', idade: 37},
    { nome: 'Rosana', idade: 32},
    { nome: 'wallace', idade: 47},
]

const nomes = pessoas.map( value => value.nome);
// console.log(nomes);

const idades = pessoas.map( value =>{
    return { idade: value.idade}
})
// console.log(idades);

const Id = pessoas.map( (value, indice) =>{
    const newpessoas = { ...value};
    newpessoas.id = indice
    return newpessoas
} )
console.log(Id);