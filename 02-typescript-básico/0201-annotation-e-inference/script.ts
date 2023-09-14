//1) Annotation (anotação)

// usada para inferir o tipo da variável através da anotação (variavel: tipo)

const produto: string = "Livro"; // string
const preco: number = 200; // number

const carro: {
    marca: string;
    portas: number

} = { // objeto
    marca: "Audi",
    portas: 5
}

console.log(carro.marca);

//2) Inference (Inferência)
// O TS consegue inferir o tipo de dado em expressões/variáveis diretas, que recebem um tipo de dado inicial
// Nesse caso, não é necessário fazer a anotação do dado

const produto2 = "Livro";
const preco2 = 400;
const carro2 = {
    marca: "Audi",
    portas: 5,
    preco: 300000
}
const barato: boolean | string = carro2.preco < 100000 ? true : "É caro";
console.log(barato);

//3) Funções

const videoGame = {
    nome: "Nintendo",
    preco: "2000"
}

const transformarPreco = (objeto: {nome: string; preco: string}) => { // recebe um objeto com preço em string e retorna um number
    return +objeto.preco;
}

console.log(typeof transformarPreco(videoGame));

/// Exercício 1 - conserte a função com TypeScript

function normalizarTexto(texto: string){
    return texto.trim().toLowerCase();
}

console.log(normalizarTexto("  Paulo Eduardo       "));

/// Exercício 2 - conserte a função com TypeScript