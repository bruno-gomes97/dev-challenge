// Faturamento por estado
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Calcula o faturamento total somando todos os estados
const faturamentoTotal = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

// Função para calcular a porcentagem de participação de cada estado
function calcularParticipacaoPorEstado(faturamento, total) {
    let participacao = {};

    // Para cada estado no objeto faturamento, calcula a porcentagem
    for (let estado in faturamento) {
        participacao[estado] = (faturamento[estado] / total) * 100;
    }

    return participacao;
}

// Chama a função para calcular as porcentagens
const participacaoPorEstado = calcularParticipacaoPorEstado(faturamentoPorEstado, faturamentoTotal);

// Exibe os resultados
console.log("Porcentagem de participação no faturamento total por estado:");
for (let estado in participacaoPorEstado) {
    console.log(`${estado}: ${participacaoPorEstado[estado].toFixed(2)}%`);
}
