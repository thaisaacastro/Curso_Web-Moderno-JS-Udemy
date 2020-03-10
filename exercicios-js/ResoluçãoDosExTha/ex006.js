function jurosSimples(capitalInicial, taxa, tempo) {
  return capitalInicial + (capitalInicial * taxa * tempo)

}

function jurosCompostos(capitalInicial, taxa, tempo) {
  return capitalInicial + (1 * taxa) ** tempo
}

console.log(jurosSimples(15000, 15 / 100, 45))
console.log(jurosCompostos(17500, 14 / 100, 45))
