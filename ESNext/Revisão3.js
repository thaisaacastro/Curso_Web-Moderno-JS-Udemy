// ES8: 1)OBject.values/2)Object.entries /1 - pega os valores do obj /2 - chave e valor

const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação Literal
const nome = 'Leandro,'
const pessoa = {
  nome,
  ola() {
    return 'Meu Rato!'
  }
}
console.log(pessoa.nome, pessoa.ola())

// Class
class Animal { }
class Cachorro extends Animal {
  falar() {
    return 'Au au!'
  }
}
console.log(new Cachorro().falar())
