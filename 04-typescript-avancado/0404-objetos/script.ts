// 1) um objeto pode ter mais propriedades que uma interface possui
interface Product {
    name: string;
    amount: number;
    price: number;
}
const product1 = {
    name: 'Car',
    amount: 5,
    price: 80000,
    country: 'EUA' // propriedade extra
}
const product2 = {
    name: 'Fridge',
    amount: 15,
    price: 1000
}
const notaFiscal = {
    price: 80000
}
// get name and price
function getInfo(data: Product) {
    return `Name: ${data.name} - Price: ${data.price}`;
}
console.log(getInfo(product1)); // ok
//console.log(getInfo(notaFiscal)); //error não possui name

// 2) [key: string]: unknown - podemos definir uma objeto que tera novos metodos/propriedades além 
// dos declarados inicialmente

interface InterfaceGeneric {
    [key: string]: unknown;
}
const object: InterfaceGeneric = {
    nome: 'Paulo'
}
function showData(data: InterfaceGeneric) {
    if('nome' in data)
        return true;
    else
        return false;
}
showData(object);

// 3) Record
// Útil para quando não sabemos o tipo de dado que vem para o objeto !
