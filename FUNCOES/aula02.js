function escrevaMeuNome(nome){
    return 'Meu nome é ' + nome;
}

escrevaMeuNome('Kaiky');

function verificarIdade(idade){
    if(idade >= 18){
        console.log(escrevaMeuNome('Kaiky') +' Você é maior de idade')
    }
    else{
        console.log('Você é menor de idade')
    }
}

verificarIdade(18);