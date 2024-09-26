// Definir a string que queremos inverter
let stringOriginal = "JavaScript é incrível!";

// Variável para armazenar a string invertida
let stringInvertida = "";

// Percorrer a string original de trás para frente
for (let i = stringOriginal.length - 1; i >= 0; i--) {
    // Adiciona cada caractere à nova string na ordem inversa
    stringInvertida += stringOriginal[i];
}

// Exibir o resultado
console.log("String original: " + stringOriginal);
console.log("String invertida: " + stringInvertida);
