let meuMap = new Map();
meuMap.set("nome", "rodrigo");
meuMap.set("stack", "html, css, js");


console.log(meuMap);

const nome =  meuMap.get("nome");

console.log(nome);

console.log(meuMap.size);

meuMap.has("nome");

console.log(meuMap.has("sobrenome"))

// meuMap.clear()

console.log(meuMap.size)

for (let chave of meuMap.keys()) {
    console.log(chave)
}

for (let valor of meuMap.values()) {
    console.log(valor)
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}


meuMap.delete("stack")

console.log(meuMap)

// nome => gian
// stack => [html, css, js]

const cpfs = new Set();
cpfs.add('23456789012')
cpfs.add('45678901234')
cpfs.add('67890123456')

console.log(cpfs)
console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((valor) => {
    console.log(valor);
})

const array = ['rodrigo sumioshi', 'natanael balbo', 'barbara zanardi', 'luana', 'luana', 'rodrigo sumioshi']

const arrayComoSet = new Set([...array])

const arraySemItensDuplicados = [...arrayComoSet]

console.log(arrayComoSet)

// Resumo do Uso de Set no Código
// No código fornecido, usamos Set para remover itens duplicados de um array 
// de maneira eficiente. O Set garante que cada valor seja único, e o operador spread (...) é 
// utilizado para converter o Set de volta para um array, resultando em um array sem duplicatas.
// Essa técnica é especialmente útil quando se precisa garantir a unicidade dos valores em uma coleção.







