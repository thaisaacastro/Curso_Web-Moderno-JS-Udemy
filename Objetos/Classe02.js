class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome
  }
}

class Pai extends Avo {
  constructor(sobrenome, profissao = 'Professor') {
    super(sobrenome) //instanciar a função construtora
    this.profissao = profissao
  }
}

class Filho extends Pai {
  constructor() {
    super('silva')

  }
}

const filho = new Filho
console.log(filho)