class Lançamento {
  constructor(nome = 'Genérico', valor = 0) {
    this.nome = nome
    this.valor = valor
  }
}

class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes
    this.ano = ano
    this.lançamento = []
  }

  addLançamentos(...lançamento) {
    lançamento.forEach(l => this.lançamento.push(l))

  }

  sumario() {
    let valorConsolidado = 0
    this.lançamento.forEach(l => {
      valorConsolidado += l.valor
    })
    return valorConsolidado
  }
}

const salario = new Lançamento('Salário', 45000)
const contaDeLuz = new Lançamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2020)
contas.addLançamentos(salario, contaDeLuz)
console.log(contas.sumario())
