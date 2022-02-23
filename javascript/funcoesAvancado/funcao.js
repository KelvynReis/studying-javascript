//declaração de função literal (FUNCTION hoisting)
function falaOi(){
    console.log('ola');
}

falaOi();

// First-Class Objects  (Objetos de Primeira classe)
// Function expression

const nome  = function (){
    console.log("Kelvyn");
}
nome();

// Arrow function 
const exemplo = () =>{
    console.log('arrow function');
}

exemplo()

//dentro de um objeto
const obj = {
    falar(){
        console.log('Alou obj');
    }
}

obj.falar()