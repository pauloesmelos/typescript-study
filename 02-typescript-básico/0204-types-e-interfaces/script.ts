//1) Object - utilizando um object em TypeScript
const fillData = (dados: {
    name: string;
    price: number;
    amount: number;
    assurance: boolean;
}) => {
    document.body.innerHTML += `
        <div>
            <h2>Produto: ${dados.name}</h2>
            <p>Preço: ${dados.price}</p>
            <p>Quantidade: ${dados.amount}</p>
            <p>Garantia: ${dados.assurance ? "Possui garantia" : "Não possui garantia"}</p>
        </div>
    `;
}
fillData({
    name: 'Notebook',
    price: 4000,
    amount: 5,
    assurance: true
});
fillData({
    name: 'Teclado',
    price: 400,
    amount: 15,
    assurance: false
});

//2) Types - a palavra type cria um tipo customizado

type NumberOrString = number | string;
const pi: NumberOrString = "3.14";

type Produto = {
    nome: string,
    preco: number,
    teclado: boolean
}

const getProductName = (produto: Produto) => {
    return produto.nome;
}
console.log(getProductName({
    nome: "PS5",
    preco: 5000,
    teclado: false
}));

type Categoria = 'design' | 'codigo' | 'descod';

const paintCategory = (categoria: Categoria) => {
    console.log(categoria);
    if(categoria === 'design')
        console.log('pintar vermelho');
    else if(categoria === 'codigo')
        console.log('pintar verde');
    else if(categoria === 'descod')
        console.log('pintar azul');
    else
        console.log('categoria inválida');
}
paintCategory('design');

//3) Interface - na maioria dos casos funciona como o type
// porém é utilizada para definirmos objetos !!

interface interfaceProduto { // é mais indicado para object
    nome: string;
    preco: number;
    teclado: boolean;
}
type typeProduto = {
    nome: string,
    preco: number,
    teclado: boolean
}

// Exercício - define uma interface da API  https://api.origamid.dev/json/notebook.json e mostre os dados
// na tela
interface Product{
    nome: string;
    preco: number;
    descricao: string;
    garantia: boolean;
    empresaFabricante: {
        fundacao: number;
        nome: string;
        pais: number;
    }
}
const showProduct = (data: Product) => {
    document.body.innerHTML += `
        <h1>${data.nome}</h1>
        <h3>${data.preco}</h3>
        <p>${data.descricao}</p>
        <p>${data.garantia ? "Possui garantia" : "Não possui garantia"}</p>
        <h4>Informações adicionais</h4>
        <p>Fabricante: ${data.empresaFabricante.nome}</p>
        <p>Fundação: ${data.empresaFabricante.fundacao}</p>
        <p>Origem: ${data.empresaFabricante.pais}</p>
    `;
}
const fetchProduct = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    showProduct(data);
}
fetchProduct("https://api.origamid.dev/json/notebook.json");