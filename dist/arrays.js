"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];

// Usando loop for para percorrer as redes sociais
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}

// Usando forEach para percorrer as redes sociais
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na rede social: ").concat(nomeDaRedeSocial));
});
var alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];

// Usando map para criar um novo array de objetos com curso "FrontEnd"
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'FrontEnd'
  };
});
console.log(alunos2);

// Encontrando o índice do aluno chamado "Paula"
var indiceDaPaula = alunos2.findIndex(function (item) {
  return item.nome === 'Paula';
});
console.log(indiceDaPaula);

// Adicionando um aluno com curso "BackEnd"
alunos2.push({
  nome: 'Lucio',
  curso: 'BackEnd'
});

// Verificando se todos os alunos são de "FrontEnd"
var todosAlunosSaoDeFrontEnd = alunos2.every(function (item) {
  return item.curso === 'FrontEnd';
});
console.log(todosAlunosSaoDeFrontEnd); // Saída: false

// Verificando se existe algum aluno de "BackEnd"
var existeAlgumAlunoDeBackEnd = alunos2.some(function (item) {
  return item.curso === 'BackEnd';
});
console.log(existeAlgumAlunoDeBackEnd); // Saída: true

// Filtrando alunos de "BackEnd"
var filtrarAlunosDeBackendFunc = function filtrarAlunosDeBackendFunc(aluno) {
  return aluno.curso === 'BackEnd';
};
var alunosDeBackend = alunos2.filter(filtrarAlunosDeBackendFunc);
console.log(alunosDeBackend);

// Somando os números de um array usando reduce
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma); // Saída: 70

// Somando os números de um array usando um loop for
var somaComFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaComFor += nums[_i];
}
console.log(somaComFor); // Saída: 70

// Concatenando os nomes dos alunos em uma string usando reduce
var nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, '');
console.log(nomesDosAlunos); // Saída: "Gustavo Julia Paula Wagner Lucio "