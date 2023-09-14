"use strict";
// 1) Instanceof
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    precoEmReal() {
        return `R$ ${this.preco}`;
    }
}
// classes com TypeScript
const livro = new Produto("A Guerra dos Tronos", 85);
console.log(livro.precoEmReal());
// instanceof é bem útil quando temos funções que retornam diferentes tipos de objetos
class Livro {
    constructor(autor) {
        this.autor = autor;
    }
}
class Game {
    constructor(jogadores) {
        this.jogadores = jogadores;
    }
}
const findProduct = (product) => {
    if (product === "Unturned")
        return new Game(1); // número jogadores
    else if (product === "O Hobbit")
        return new Livro("J. R.");
    else
        return null;
};
const produto = findProduct('O Hobbit');
if (produto instanceof Livro)
    produto.autor;
else if (produto instanceof Game)
    produto.jogadores;
