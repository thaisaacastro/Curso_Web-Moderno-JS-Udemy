//Concat => concatenar vários array em um novo array, ou elementos

const filhas = ['Clara', 'Elizabeth']
const filhos = ['Diego', 'Robert']
const todos = filhas.concat(filhos, 'Outro')
console.log(todos, filhas, filhos)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))
