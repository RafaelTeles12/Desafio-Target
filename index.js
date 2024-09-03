// Exercício 1
const i = 13;
let k = 0 ;
let soma1 = 0;
while(k < i) {
  k += 1; soma1 += k
};

console.log(`Exercício 1: o valor final da variável soma é ${soma1}.`);

// Exercício 2
// Definição do valor procurado
const valorAlvo = 31;

const fibonacci = [0,1];

while(fibonacci[fibonacci.length - 1] < valorAlvo){
  const soma2 = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
  fibonacci.push(soma2);
}

if (fibonacci.includes(valorAlvo)){
  console.log('\nExercício 2: este número pertence a sequencia de Fibonacci.')
} else {
  console.log('\nExercício 2: este número NÃO pertence a sequencia de Fibonacci.')
}

// Exercício 3

const fs = require('fs');

// Lendo o arquivo JSON
const dados3 = fs.readFileSync('dados.json');
const faturamento = JSON.parse(dados3);

// Filtrar os dias com faturamento (ignorar dias sem faturamento)
const diasComFaturamento = faturamento.filter((dia) => dia.valor > 0);

// Calcular o menor e o maior valor de faturamento
const valores3 = diasComFaturamento.map((dia) => dia.valor);
const menorValor = Math.min(...valores3);
const maiorValor = Math.max(...valores3);

// Calcular a média mensal
const soma3 = valores3.reduce((acc, valor) => acc + valor, 0);
const mediaMensal = soma3 / valores3.length;

// Contar o número de dias com faturamento acima da média mensal
const diasAcimaDaMedia = valores3.filter(valor => valor > mediaMensal).length;

// Exibir os resultados
console.log(`\nExercício 3:\tmenor valor: ${menorValor}`);
console.log(`\t\tmaior valor: ${maiorValor}`);
console.log(`\t\tnúmero de dias com faturamento acima da média mensal: ${diasAcimaDaMedia}`);

// Exercício 4

const dados4 = [
    {'estado': 'SP',
    'valor': 67836.43},
    {'estado': 'RJ',
    'valor': 36678.66},
    {'estado': 'MG',
    'valor': 29229.88},
    {'estado': 'ES',
    'valor': 27165.48},
    {'estado': 'Outros',
    'valor': 19849.53}
];

const valores4 = dados4.map((unidade) => unidade.valor);
const soma4 = valores4.reduce((acc, valor) => acc + valor, 0);

console.log('\nExercício 4:');
dados4.map((unidade) => {
    console.log(`Percentual de representação ${unidade.estado}: ${unidade.valor / soma4 * 100} %.`)
})

// Exercício 5
// Definição do da string

const stringInicial = 'abcdefghijklmnopqrstuvwxyz';
let stringInvertida = '';

for(let i = stringInicial.length - 1; i>=0; i--){
    stringInvertida += stringInicial[i];
}

console.log(`\nExercício 5:\tstring inicial: ${stringInicial}\n\t\tstring invertida: ${stringInvertida}`)