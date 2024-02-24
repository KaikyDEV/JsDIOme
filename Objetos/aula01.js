class Pessoa{

    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}. Nasci em ${this.anoDeNascimento}`)
    }
}

const kaiky = new Pessoa('Kaiky', 19);


kaiky.descrever();