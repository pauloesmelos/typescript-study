"use strict";
// 2) instanceof e extends
// com instanceof é possível saber se um instância herda de um tipo pai (extends)
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
class Livro extends Produto {
    constructor(nome, preco, autor) {
        super(nome, preco);
        this.autor = autor;
    }
}
class Jogo extends Produto {
    constructor(nome, preco, players) {
        super(nome, preco);
        this.players = players;
    }
}
const buscar = (query) => {
    if (query === "O Hobbit")
        return new Livro("O Hobbit", 210, "J. R. H");
    else if (query === "GTA V")
        return new Jogo("GTA V", 180, 64);
    else
        return null;
};
const produto1 = buscar("GTA V");
const produto2 = buscar("O Hobbit");
if (produto1 instanceof Produto)
    produto1.nome; // atributo de Produto
if (produto2 instanceof Produto)
    produto2.preco; // atributo de Produto
const Honda = {
    marca: "Honda",
    portas: 4
};
console.log(Honda instanceof Carro); // erro
