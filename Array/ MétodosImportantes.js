const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove o último elemento!
console.log(pilotos)

pilotos.push('Verstappen')  //adiciona elementos
console.log(pilotos)

pilotos.shift() //remove o posição
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona na primeira posição
console.log(pilotos)

//splice pode adicionar e remover elementos

//adc
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos1)
