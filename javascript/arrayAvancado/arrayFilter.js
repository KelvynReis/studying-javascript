// Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos
// map ->
// reduce ->

// Retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2,3 ,5 ,8 ,7 ,11 ,15 ,22 , 27]

const maiores = numeros.filter(value => value > 10 )
// console.log(maiores);

//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a

const pessoas = [
    { nome: 'Kelvyn', idade: 21},
    { nome: 'Keven', idade: 20},
    { nome: 'Joao', idade: 18},
    { nome: 'Poli', idade: 37},
    { nome: 'Rosana', idade: 32},
    { nome: 'wallace', idade: 47},
]

const pessoasComNomeGrande = pessoas.filter( value => value.nome.length >= 5)
// console.log(pessoasComNomeGrande);

const pessoasComMaiorIdade = pessoas.filter( value => value.idade > 20)
console.log(pessoasComMaiorIdade);

const nomeTerminacomA = pessoas.filter( value => value.nome.toLocaleLowerCase().endsWith('a'));
console.log(nomeTerminacomA);