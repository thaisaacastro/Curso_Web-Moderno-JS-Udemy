const aprovados = ['Leandro', 'Léo', 'Bia', 'Thaísa']

aprovados.forEach(function (nome, indice) {
  console.log(`${indice + 1}) ${nome}`)  // passar o indice e o nome relacionados a const

})

aprovados.forEach(nome => console.log(nome)) // arrow function

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados) // armazenar uma const numa variavel

