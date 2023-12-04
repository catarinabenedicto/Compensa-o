function calcularIMC() {
    var altura = parseFloat(document.getElementById('altura').value);
    var peso = parseFloat(document.getElementById('peso').value);

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert("Por favor, insira valores válidos para altura e peso.");
        return;
    }

    var imc = peso / (altura * altura);
    var resultado = '';

    if (imc < 18.5) {
        resultado = 'Abaixo do peso';
    } else if (imc < 24.9) {
        resultado = 'Peso normal';
    } else if (imc < 29.9) {
        resultado = 'Sobrepeso';
    } else if (imc < 34.9) {
        resultado = 'Obesidade grau 1';
    } else if (imc < 39.9) {
        resultado = 'Obesidade grau 2';
    } else {
        resultado = 'Obesidade grau 3';
    }

    document.getElementById('result').innerText = `Seu IMC é ${imc.toFixed(2)} - ${resultado}`;
    }