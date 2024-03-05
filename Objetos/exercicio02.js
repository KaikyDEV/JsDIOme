/*
2) Crie uma classe para representar Pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC;
*/


class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        const iMC = this.peso / (this.altura * this.altura);

        console.log(`Nome: ${this.nome}. IMC: ${iMC}`)
    }

    classificarIMC(){

        const imc = this.calcularIMC();

        if(imc < 18.5){
            return ("Esta abaixo do peso!")
        }
        else if (imc >= 18.5 && imc <= 25){
            return ("Peso normal");
        }
        else if (imc >= 25 && imc <= 30){
            return ("Acima do Peso");
        }
        else if(imc >= 30 && imc <= 40){
            return ("Obeso");
        }
        else{
            return ("Obesidade Mórbita");
        }
    }
}

const pessoa = new Pessoa('José', 70, 1.75);

console.log(pessoa.classificarIMC());
