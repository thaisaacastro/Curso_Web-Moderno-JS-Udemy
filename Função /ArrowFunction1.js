let dobro = function (a) {
  return 2 * a
}

dobro = (a) => {
  return 2 * a       // arrow
}

dobro = a => 2 * a // return implícito. Quando tem uma função só, reduzida.
console.log(dobro(Math.PI))

let ola = function () {
  return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá'    // possui um param
console.log(ola())
