const nomes = ['Kelvyn','Keven','Joao','Poli']

// nomes.splice(indice, delete, elem1, elem2, elem3);


const removidos = nomes.splice(3, 2)
console.log(nomes, removidos);

//pop
const removidos2 = nomes.splice(-1, 1)
console.log(removidos2);

//shift
const removidos3 = nomes.splice(0, 1)
console.log(removidos3);

//push
nomes.splice(nomes.length, 0, 'Pedro')
console.log(nomes);