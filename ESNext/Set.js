//estrutura de conj, nao é indexada/ nao aceita repetição
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size) // tamanho do set
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.add('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Leandro', 'Leo']
const nomeSet = new Set(nomes)
console.log(nomeSet)
