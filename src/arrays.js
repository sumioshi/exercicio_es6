const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

// Usando loop for para percorrer as redes sociais
for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`);
}

// Usando forEach para percorrer as redes sociais
redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`);
});

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];

// Usando map para criar um novo array de objetos com curso "FrontEnd"
const alunos2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        curso: 'FrontEnd'
    };
});

console.log(alunos2);

// Encontrando o índice do aluno chamado "Paula"
const indiceDaPaula = alunos2.findIndex(function(item) {
    return item.nome === 'Paula';
});
console.log(indiceDaPaula);

// Adicionando um aluno com curso "BackEnd"
alunos2.push({
    nome: 'Lucio',
    curso: 'BackEnd'
});

// Verificando se todos os alunos são de "FrontEnd"
const todosAlunosSaoDeFrontEnd = alunos2.every(function(item) {
    return item.curso === 'FrontEnd';
});
console.log(todosAlunosSaoDeFrontEnd); // Saída: false

// Verificando se existe algum aluno de "BackEnd"
const existeAlgumAlunoDeBackEnd = alunos2.some(function(item) {
    return item.curso === 'BackEnd';
});
console.log(existeAlgumAlunoDeBackEnd); // Saída: true

// Filtrando alunos de "BackEnd"
const filtrarAlunosDeBackendFunc = (aluno) => aluno.curso === 'BackEnd';

const alunosDeBackend = alunos2.filter(filtrarAlunosDeBackendFunc);
console.log(alunosDeBackend);

// Somando os números de um array usando reduce
const nums = [10, 20, 30, 10];

const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador;
}, 0);
console.log(soma); // Saída: 70

// Somando os números de um array usando um loop for
let somaComFor = 0;

for (let i = 0; i < nums.length; i++) {
    somaComFor += nums[i];
}
console.log(somaComFor); // Saída: 70

// Concatenando os nomes dos alunos em uma string usando reduce
const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `;
    return acumulador;
}, '');
console.log(nomesDosAlunos); // Saída: "Gustavo Julia Paula Wagner Lucio "
