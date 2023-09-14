"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//1) Object - utilizando um object em TypeScript
const fillData = (dados) => {
    document.body.innerHTML += `
        <div>
            <h2>Produto: ${dados.name}</h2>
            <p>Preço: ${dados.price}</p>
            <p>Quantidade: ${dados.amount}</p>
            <p>Garantia: ${dados.assurance ? "Possui garantia" : "Não possui garantia"}</p>
        </div>
    `;
};
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
const pi = "3.14";
const getProductName = (produto) => {
    return produto.nome;
};
console.log(getProductName({
    nome: "PS5",
    preco: 5000,
    teclado: false
}));
const paintCategory = (categoria) => {
    console.log(categoria);
    if (categoria === 'design')
        console.log('pintar vermelho');
    else if (categoria === 'codigo')
        console.log('pintar verde');
    else if (categoria === 'descod')
        console.log('pintar azul');
    else
        console.log('categoria inválida');
};
paintCategory('design');
const showProduct = (data) => {
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
};
const fetchProduct = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(url);
    const data = yield response.json();
    showProduct(data);
});
fetchProduct("https://api.origamid.dev/json/notebook.json");
