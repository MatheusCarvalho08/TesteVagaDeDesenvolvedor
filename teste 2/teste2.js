function verificarFibonacci(num) {
    let a = 0, b = 1;

    if (num === 0) return true;
    while (b < num) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b === num;
}

// Exemplo de entrada:
let numero = 21; // Você pode trocar o valor ou pedir para o usuário inserir
if (verificarFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}