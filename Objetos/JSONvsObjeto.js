const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj)) //formato de dados o JSON

//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
//console.log(JSON.parse("{'a': 1,'b': 2, 'c': 3}")) // nao pode ser demilitado com aspas simples atribuições no formato JSON
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) //transformar o JSON em objeto
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))


//JSON5.org
//json validator
//todos atributos são delimitados com aspas duplas
