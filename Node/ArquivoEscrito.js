const fs = require('fs')

const produto = {
  nome: 'Celular',
  preco: 1234.88,
  desconto: 0.15
}

fs.writeFile(__dirname + '/ArquivoGerado.json', JSON.stringify(produto), err => {
  console.log(err || 'Arquivo salvo!') // gera um novo arquivo
})
