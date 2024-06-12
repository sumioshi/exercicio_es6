const alunos = [
    { nome: "Alice", nota: 8 },
    { nome: "Bob", nota: 5 },
    { nome: "Carol", nota: 6 },
    { nome: "David", nota: 9 },
    { nome: "Eva", nota: 4 },
  ];
  
  function alunosAprovados(alunos) {
    return alunos.filter((aluno) => aluno.nota >= 6);
  }
  
  const aprovados = alunosAprovados(alunos);
  console.log(aprovados);
  // atividade feita e pronta para commit