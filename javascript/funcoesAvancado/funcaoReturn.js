function criarMultiplicador ( Multiplicador){
    return function ( n ){
        return n * Multiplicador
    }
}

const duplica = criarMultiplicador(2)
const triplica = criarMultiplicador(3)
const quadriplica = criarMultiplicador(4)

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));