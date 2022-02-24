// IIFE -> Imediately invoked function expression

(function (idade, peso, altura){
    const sobrenome = 'Reis'
    function criarNome (nome){
        return `${nome} ${sobrenome}`
    }

    function falaNome(){
        console.log(criarNome('Kelvyn'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(21, 73, 1.75);
