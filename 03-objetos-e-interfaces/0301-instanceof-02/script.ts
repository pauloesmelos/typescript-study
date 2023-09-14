// 2) instanceof e extends
// com instanceof é possível saber se um instância herda de um tipo pai (extends)

class Produto { // pai
    nome: string;
    preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }
}

class Livro extends Produto { // filho
    autor: string;

    constructor(nome: string, preco: number, autor: string) {
        super(nome, preco);
        this.autor = autor;
    }
}

class Jogo extends Produto { // filho
    players: number;

    constructor(nome: string, preco: number, players: number){
        super(nome, preco);
        this.players = players;
    }
}

const buscar = (query: string) => {
    if(query === "O Hobbit")
        return new Livro("O Hobbit", 210, "J. R. H");
    else if(query === "GTA V")
        return new Jogo("GTA V", 180, 64);
    else
        return null;
}

const produto1 = buscar("GTA V");
const produto2 = buscar("O Hobbit");

if (produto1 instanceof Produto)
    produto1.nome; // atributo de Produto
if (produto2 instanceof Produto)
    produto2.preco; // atributo de Produto

// 3) instanceof e interface

// não é possível obter a instância de um objeto se vc estiver utilizando interface
// instanceof é usado para comprar classes !

interface Carro {
    marca: string;
    portas: number;
}
const Honda: Carro = {
    marca: "Honda",
    portas: 4
};

console.log(Honda instanceof Carro); // erro