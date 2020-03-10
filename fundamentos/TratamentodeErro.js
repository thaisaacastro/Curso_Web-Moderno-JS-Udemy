function tratarErroElancar(erro) {
  //throw new Error('...')
  //throw 10
  //throw true
  //throw 'mensagem'
  throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date

  }
}
function imprimirNomeGritado(obj) {
  try {                               //julga que pode gerar um erro
    console.log(obj.name.toUpperCase() + '!!!')
  } catch (e) {         //passando erro
    tratarErroELancar(e)
  } finally {         // mesmo  que ocorreu erro ele vai chamar o finally
    console.log('final')
  }

}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)



