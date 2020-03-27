const contadorA = require('./InstânciaÚnica')
const contadorB = require('./InstânciaÚnica')

const contadorC = require('./InstânciaNova')()//função factory
const contadorD = require('./InstânciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

// resolver problemas

