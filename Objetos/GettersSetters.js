//get = ler uma variável //set = alterar um valor de uma variável

const sequencia = {
  _valor: 1, // convenção // internamente  //privada
  get valor() { return this._valor++ },
  set valor(valor) {
    if (valor > this._valor) {
      this._valor = valor
    }
  }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
