const precoDoEtanol = 5.79;
const precoGasolina =  5.58;
const quilometrosPorLitro = 10;
const distaciaDaViagem = 100;
const tipoCombustível = 'Gasolina';

if(tipoCombustível === 'Etanol'){

    const result = (distaciaDaViagem / quilometrosPorLitro) * precoDoEtanol;

    console.log(result.toFixed(2));
}

else if (tipoCombustível === 'Gasolina'){

    const result = (distaciaDaViagem / quilometrosPorLitro) * precoGasolina;

    console.log(result.toFixed(2));
}

else{
    console.log("Opção inválida");
}
