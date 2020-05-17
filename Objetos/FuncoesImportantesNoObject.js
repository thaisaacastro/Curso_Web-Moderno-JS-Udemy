const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13
}

console.log(Object.keys(pessoa))  //chaves dos valores
console.log(Object.values(pessoa))  // valores do determinado objeto
console.log(Object.entries(pessoa)) // registros


Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave} : ${valor}`)
})

Object.defineProperty(pessoa, 'DataNascimento', {
  enumerable: true,
  writable: false,
  value: '07/12/2019'
})

pessoa.DataNascimento = '07/12/2018'
console.log(pessoa.DataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
