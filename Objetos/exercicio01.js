/*

1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médiode combustível por Kilômetros rodado.
Crie um método que dado a quantidade de quilômetros e o preço o combustível nos dê o valor gasto
em reais para realizar este percurdo.

*/

class Carro{
    marca;
    cor;
    gastoMedioPorKM;

    constructor(marca, cor, gastoMedioPorKM){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKM = gastoMedioPorKM;
    }

    calcularGastoDePercurso(distancia, precoDoCombustivel){
        return distancia * this.gastoMedioPorKM * precoDoCombustivel

    }
}

const uno = new Carro('Fiat', 'Prata', 1/12);
console.log(uno.calcularGastoDePercurso(70, 5));