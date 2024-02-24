/*
O IMC (Indice de massa corporal) é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso
de uma pessoa adulta.

Fórmula do IMC:

IMC = peso / (altura * altura)

Elabore um algoritmo que dado peso e altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC de adultos e condição:

- Abaixo de 18.5, abaixo do peso
- Entre 18.5 e 25, peso normal
- Entre 25 e 30, acima do peso
- Entre 30 e 40, Obeso
- Acima de 40, Obesidade mérbita

*/

const nome = "Kaiky";
const peso = 76.5;
const altura = 1.70;

const imc = peso / Math.pow(altura, 2);

if(imc < 18.5){
    console.log("Seu calculo imc é: " + imc.toFixed(2) +
    "\n Esta abaixo do peso!")
}
else if (imc >= 18.5 && imc <= 25){
    console.log("Seu calculo imc é: " + imc.toFixed(2) +
    "\n Peso normal");
}
else if (imc >= 25 && imc <= 30){
    console.log("Seu calculo imc é: " + imc.toFixed(2) +
    "\n Acima do Peso");
}
else if(imc >= 30 && imc <= 40){
    console.log("Seu calculo imc é: " + imc.toFixed(2) +
    "\n Obeso");
}
else{
    console.log("Seu calculo imc é: " + imc.toFixed(2) +
    "\n Obesidade Mórbita");
}