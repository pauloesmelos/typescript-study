"use strict";
function handleCarro(data) {
    console.log(data.preco);
    console.log(data.portas);
}
function showPessoa(data) {
    console.log(data.nome);
    console.log(data.rg);
}
// adicionar a propriedade usuarioID ao objeto window ( sem definir interface dá erro)
window.usuarioID = 11;
