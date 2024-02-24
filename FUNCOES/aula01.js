function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc){

    if(imc < 18.5){
        return "Seu calculo imc é: " + imc.toFixed(2) +
        "\n Esta abaixo do peso!";
    }
    else if (imc >= 18.5 && imc <= 25){
        return "Seu calculo imc é: " + imc.toFixed(2) +
        "\n Peso normal";
    }
    else if (imc >= 25 && imc <= 30){
        return "Seu calculo imc é: " + imc.toFixed(2) +
        "\n Acima do Peso";
    }
    else if(imc >= 30 && imc <= 40){
        return "Seu calculo imc é: " + imc.toFixed(2) +
        "\n Obeso";
    }
    else{
        return "Seu calculo imc é: " + imc.toFixed(2) +
        "\n Obesidade Mórbita";
    }
}

(function main(){
    const peso = 76.5;
    const altura = 1.70;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();



