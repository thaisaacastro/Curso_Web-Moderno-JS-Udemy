function Receber(dinheiro) {
  Receber = `R$ ${dinheiro.toFixed(2).toString().replace(".", ",")}`
  console.log(Receber)
}
Receber(0.3 + 0.4)
