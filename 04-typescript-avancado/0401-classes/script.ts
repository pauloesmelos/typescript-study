// 1) classes, propriedades, métodos, constructor e super

class Produto {
    nome: string;
    preco: number;
    tipo: string;
    quantidade: number | undefined;

    constructor(nome: string, preco: number, tipo: string, quantidade?: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        this.tipo = tipo;
    }
    getTipo() {
        return this.tipo;
    }
}
const livro = new Produto('Aurora', 55, 'Coleção');
console.log(livro.getTipo());

// 2) modifiers - modificadores de comportamento de propriedades (private, protected, public, readonly)

// public: acesso livre ao objeto - leitura e gravação
// private: não é possível ter acesso no objeto, apenas em funções construtoras
// protected: permite acesso somente dentro da classe e de seus filhos extendidos
// readonly: somente leitura, não permite gravação
// método static: o método faz parte somente da classe, e não do objeto (Matematica.transformarPreco())

class Matematica {
    readonly pi = 3.14;
    public user: string;
    private square: number | undefined;

    constructor(user: string, square?: number) {
        this.square = square;
        this.user = user;
    }
    getSquare() {
        return this.square;
    }
    setSquare(square: number) {
        this.square = square;
    }
    // static
    static transformarPreco(preco: number) {
        return `R$ ${preco} reais`;
    }
}
const algebra = new Matematica('Paulo');
console.log(Matematica.transformarPreco(800));

// 3) class e instanceof - podemos verificar se um objeto é instância de uma classe
if(algebra instanceof Matematica)
    console.log('Sim');