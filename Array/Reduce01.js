const alunos = [
  { nome: 'Luis', nota: 7.3, bolsista: false },
  { nome: 'Lucas', nota: 9.2, bolsista: true },
  { nome: 'Leandro', nota: 9.8, bolsista: false },
  { nome: 'Thaísa', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
  console.log(acumulador, atual)
  return acumulador + atual
}, 0 /* valor inicial*/) //funçao arrow e reduce

console.log(resultado)
