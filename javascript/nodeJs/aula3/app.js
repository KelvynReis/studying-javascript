const path = require('path');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler')

// __dirname = caminho absoluto da pasta onde ele esta
const caminhoArquivo = path.resolve(__dirname, 'teste.json');

// const pessoas = [
//     { nome: 'Kelvyn'},
//     { nome: 'Keven'},
//     { nome: 'João'},
//     { nome: 'Vithorya'},
//     { nome: 'Apoliana'},
// ]

// const json = JSON.stringify(pessoas, '', 2)

// escreve(caminhoArquivo, json )

async function lerArquivo (cami){
    const dados = await ler(cami)
    renderizarDados(dados)
}
function renderizarDados(dados){
    dados = JSON.parse(dados);
    dados.forEach( valor => console.log(valor.nome))
}
lerArquivo(caminhoArquivo)


