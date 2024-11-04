class personagem{
    constructor (nome, idade, tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    }

    atacar(){
        let ataque
        if (this.tipo === "mago"){
            ataque = "magia";
        } else if (this.tipo === "guerreiro"){
            ataque = "espada";
        } else if (this.tipo === "monge"){
            ataque = "artes marciais";
        } else if (this.tipo === "ninja"){
            ataque = "shuriken";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

let personagens = [
    new personagem("Albus Dumbledore", "115 anos", "mago"),
    new personagem("Aragorn", "30 anos", "guerreiro"),
    new personagem("Shaka", "45 anos", "monge"),
    new personagem("Naruto", "18 anos", "ninja")
];

for (let personagem of personagens) {
    personagem.atacar();
}