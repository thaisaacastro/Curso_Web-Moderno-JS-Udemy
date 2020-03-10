function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min  //random, arrendonda.
  return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
  opcao = getInteiroAleatorioEntre(-1, 10)
  console.log(`Opção escolhida foi ${opcao}.`)
}    // até for false

console.log('Até a próxima!')
