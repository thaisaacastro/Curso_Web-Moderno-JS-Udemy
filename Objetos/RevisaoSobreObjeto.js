// colecão dinâmica de pares chave/valor
const produto = new Object /* função construtora*/
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220 ** 2

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Raul',
    idade: 56,
    endereco: {
      logradouro: 'Rua Teixeira Filho',
      numero: 109
    }
  },
  condutores: [{
    nome: 'Júnior',
    idade: 89,
  }, {
    nome: 'Leandro',
    idade: 67
  }],
  calcularValorSeguro: function () {
    //...
  }
}
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereço'] = 'Av. Gaspar Gomes'
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length) //quantos elementos tem neste array

