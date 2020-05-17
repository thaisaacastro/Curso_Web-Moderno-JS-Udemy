const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)           //forEachCallback
fabricantes.forEach(fabricante => console.log(fabricante))
