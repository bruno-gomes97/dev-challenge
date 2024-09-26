// Dados de faturamento diário em um mês
const faturamentoMensal = [
    { "dia": 1, "valor": 22174.1664 },
    { "dia": 2, "valor": 24537.6698 },
    { "dia": 3, "valor": 26139.6134 },
    { "dia": 4, "valor": 0.0 },
    { "dia": 5, "valor": 0.0 },
    { "dia": 6, "valor": 26742.6612 },
    { "dia": 7, "valor": 0.0 },
    { "dia": 8, "valor": 42889.2258 },
    { "dia": 9, "valor": 46251.174 },
    { "dia": 10, "valor": 11191.4722 },
    { "dia": 11, "valor": 0.0 },
    { "dia": 12, "valor": 0.0 },
    { "dia": 13, "valor": 3847.4823 },
    { "dia": 14, "valor": 373.7838 },
    { "dia": 15, "valor": 2659.7563 },
    { "dia": 16, "valor": 48924.2448 },
    { "dia": 17, "valor": 18419.2614 },
    { "dia": 18, "valor": 0.0 },
    { "dia": 19, "valor": 0.0 },
    { "dia": 20, "valor": 35240.1826 },
    { "dia": 21, "valor": 43829.1667 },
    { "dia": 22, "valor": 18235.6852 },
    { "dia": 23, "valor": 4355.0662 },
    { "dia": 24, "valor": 13327.1025 },
    { "dia": 25, "valor": 0.0 },
    { "dia": 26, "valor": 0.0 },
    { "dia": 27, "valor": 25681.8318 },
    { "dia": 28, "valor": 1718.1221 },
    { "dia": 29, "valor": 13220.495 },
    { "dia": 30, "valor": 8414.61 }
];

// Função para calcular o menor, maior valor e dias acima da média
function calcularFaturamento(faturamento) {
    let menorValor = Infinity; // Inicia com um valor bem alto
    let maiorValor = 0; // Inicia com zero
    let soma = 0; // Soma dos valores de faturamento
    let diasComFaturamento = 0; // Contador de dias com faturamento
    
    // Percorre o faturamento diário para calcular soma, menor e maior valores
    faturamento.forEach(dia => {
        if (dia.valor > 0) { // Ignora dias com valor 0 (finais de semana ou feriados)
            soma += dia.valor;
            diasComFaturamento++;

            // Atualiza o menor valor de faturamento
            if (dia.valor < menorValor) {
                menorValor = dia.valor;
            }

            // Atualiza o maior valor de faturamento
            if (dia.valor > maiorValor) {
                maiorValor = dia.valor;
            }
        }
    });

    // Calcula a média do faturamento diário, ignorando dias sem faturamento
    const mediaMensal = soma / diasComFaturamento;

    // Conta o número de dias com faturamento acima da média mensal
    let diasAcimaDaMedia = 0;
    faturamento.forEach(dia => {
        if (dia.valor > mediaMensal) {
            diasAcimaDaMedia++;
        }
    });

    // Retorna os resultados
    return {
        menorValor,
        maiorValor,
        diasAcimaDaMedia
    };
}

// Chama a função e exibe os resultados
const resultado = calcularFaturamento(faturamentoMensal);
console.log(`Menor valor de faturamento: ${resultado.menorValor.toFixed(2)}`);
console.log(`Maior valor de faturamento: ${resultado.maiorValor.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);
