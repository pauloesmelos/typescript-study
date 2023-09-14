let total: string | number = 200;
total = '400';
console.log(total);

const isNumber = (value: string | number) => {
    if(typeof value === 'number'){
        return true;
    }
    else
        return false;
}

//1) Union type no DOM

// HTMLButtonElement ou null
const button = document.querySelector('button');

button?.click(); // só executa a função caso o button seja diferente de null e undefined;

// Exercício 1) crie uma função toNumber que pode receber number | string
// se receber número. retorne um número, se receber uma string, retorne um número
// se receber algo diferente, retorne um erro (throw "")

const toNumber = (valor: number | string) => {
    if(typeof valor === "number")
        return valor;
    else if(typeof valor === "string")
        return Number(valor);
    else throw "O valor deve ser uma string ou number";
}
console.log(toNumber("5") + 5);