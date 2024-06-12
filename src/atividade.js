// Array de alunos
const alunos = [
    { nome: "Alice", nota: 8 },
    { nome: "Bob", nota: 5 },
    { nome: "Carol", nota: 6 },
    { nome: "David", nota: 9 },
    { nome: "Eva", nota: 4 },
  ];
  
  // Função para filtrar alunos aprovados
  function alunosAprovados(alunos) {
    return alunos.filter((aluno) => aluno.nota >= 6);
  }
  
  // Chamar a função e exibir o resultado
  const aprovados = alunosAprovados(alunos);
  console.log(aprovados);
  