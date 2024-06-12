"use strict";

// Array de alunos
var alunos = [{
  nome: "Alice",
  nota: 8
}, {
  nome: "Bob",
  nota: 5
}, {
  nome: "Carol",
  nota: 6
}, {
  nome: "David",
  nota: 9
}, {
  nome: "Eva",
  nota: 4
}];

// Função para filtrar alunos aprovados
function alunosAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}

// Chamar a função e exibir o resultado
var aprovados = alunosAprovados(alunos);
console.log(aprovados);