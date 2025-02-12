function inverterString(str) {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

// Exemplo de entrada:
let texto = "Olá Mundo!";
let textoInvertido = inverterString(texto);
console.log(textoInvertido); // Resultado: "!odnuM álO"