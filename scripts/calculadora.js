function somar() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let soma = parseFloat(num1) + parseFloat(num2);
    document.getElementById("resultado").innerHTML = "Resultado: " + soma;
}

function subtracao() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let subtrair = parseFloat(num1) - parseFloat(num2);
    document.getElementById("resultado").innerHTML = "Resultado: " + subtrair;
}

function multiplicacao() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let multiplicar = parseFloat(num1) * parseFloat(num2);
    document.getElementById("resultado").innerHTML = "Resultado: " + multiplicar;
}

function divisao() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let dividir = parseFloat(num1) / parseFloat(num2);
    document.getElementById("resultado").innerHTML = "Resultado: " + dividir;
}