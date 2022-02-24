//Factory function (Função fabrica)
// constructor function ( função construtora)

function criaPessoa(nome, sobrenome, altura, peso){

    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto( valor ){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala( assunto = 'Falando sobre JS'){
            return `${ this.nome} está ${assunto}`
        },

        peso: peso,
        altura: altura,

        // Getter
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}



const p1 = criaPessoa('Kelvyn', 'Reis', 1.75, 72)

console.log(p1.nomeCompleto)
console.log(p1.fala())
console.log(p1.imc)
p1.nomeCompleto = 'joao dos Reis'
console.log(p1.nomeCompleto)