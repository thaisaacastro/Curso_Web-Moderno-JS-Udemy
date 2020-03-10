// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa <-456-> {...}
//pessoa = { nome: 'Ana' }

Object.freeze(pessoa) //congelar o objeto

pessoa.nome = 'Maria'
pessoa.nome = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa) // vc freeze e n consegue adc, excluir, nem nada.

const pessoaConstate = Object.freeze({ nome: 'João' })
console.log(pessoaConstate)
