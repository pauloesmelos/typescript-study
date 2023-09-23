"use strict";
const product1 = {
    name: 'Car',
    amount: 5,
    price: 80000,
    country: 'EUA' // propriedade extra
};
const product2 = {
    name: 'Fridge',
    amount: 15,
    price: 1000
};
const notaFiscal = {
    price: 80000
};
// get name and price
function getInfo(data) {
    return `Name: ${data.name} - Price: ${data.price}`;
}
console.log(getInfo(product1)); // ok
const object = {
    nome: 'Paulo'
};
function showData(data) {
    if ('nome' in data)
        return true;
    else
        return false;
}
showData(object);
// 3) Record
// Útil para quando não sabemos o tipo de dado que vem para o objeto !
