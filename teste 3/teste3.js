let faturamento = {
    "SP": [67436.43, 68000, 70000, 70000],
    "RJ": [36678.66, 35000, 30000, 29000],
    "MG": [29229.88, 31000, 32000],
    "ES": [27165.48, 25000, 28000],
    "Outros": [19849.53, 19000, 19500]
};

let diasComFaturamento = [];
for (let estado in faturamento) {
    diasComFaturamento.push(...faturamento[estado]);
}

// Calcular o menor e maior valor
let menorFaturamento = Math.min(...diasComFaturamento);
let maiorFaturamento = Math.max(...diasComFaturamento);

// Calcular a média mensal ignorando dias sem faturamento
let somaFaturamento = diasComFaturamento.reduce((acc, val) => acc + val, 0);
let mediaFaturamento = somaFaturamento / diasComFaturamento.length;

// Calcular número de dias com faturamento superior à média
let diasAcimaDaMedia = diasComFaturamento.filter(faturamento => faturamento > mediaFaturamento).length;

console.log(`Menor faturamento: R$${menorFaturamento}`);
console.log(`Maior faturamento: R$${maiorFaturamento}`);
console.log(`Número de dias com faturamento superior à média: ${diasAcimaDaMedia}`);