// 1) define o tipo de dado passado como argumento na função, e também o tipo de dado do retorno da função.

// function default
function mytext<retorno>(text: retorno){
    return text;
}
// arrow function
const mynumber = (num: number): number => {
    return num;
}
console.log(mytext("Bom dia"));
console.log(mynumber(5));

// 2)
const numeros = [1,2,3,4,5,6,7,8,9];
const frutas = ["Banana", "Uva", "Pêra", "Laranja", "Limão", "Maçã"];

// <Tipo dado argumento>(parametro: Tipo parametro): Tipo retorno
const firstFive = <lista>(list: Array<lista>): Array<lista> => {
    return list.slice(0,5);
}
console.log(firstFive(numeros));
console.log(firstFive(frutas));

const notNull = <T>(data: T) => {
    if(data)
        return data;
    else
        return null;
}
console.log(notNull(1)?.toFixed);
console.log(notNull("A")?.toString());

// generic
const informacoesDado =<T> (a: T): {} => {
    return {
        info: a,
        tipo: typeof a
    }
};
console.log(informacoesDado(255));