const escola = "Cod3r"

console.log(escola.charAt(4))  //mostrar a posição da letra
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))  //valor dele na tabela ask ou unicode/ https://unicode-table.com/en/#0033
console.log(escola.indexOf('3'))    // indíce tem -3-

console.log(escola.substring(1))  //começar apartir do indíce 1
console.log(escola.substring(0, 3))  //estes indíces e o de cima

console.log('Escola'.concat(escola).concat("!"))
console.log('Escola' + escola + "!")
console.log(escola.replace(3, 'e'))

console.log('Ana, Maria,Pedro'.split(','))   //converter uma string em array
