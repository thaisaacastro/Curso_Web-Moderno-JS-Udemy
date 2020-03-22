const alunos = [
  { nome: 'Luis', nota: 7.3, bolsista: false },
  { nome: 'Lucas', nota: 9.2, bolsista: true },
  { nome: 'Leandro', nota: 9.8, bolsista: false },
  { nome: 'Thaísa', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsista?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?
const algumBolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsistas))
