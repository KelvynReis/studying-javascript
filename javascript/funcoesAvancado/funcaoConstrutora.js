// Função Construturo  -> Objetos
// função fabrica -> Objetos
//construtora -> Pessoa ( new)

function Pessoa ( nome, sobrenome ){

    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa( 'Kelvyn' , ' Reis')
const p2 = new Pessoa('Keven' , 'Reis')