// 1) A interface de uma função é definida durante a sua declaração

// c é um parâmetro opcional
const somar = (a: number, b:number, c?:number) => a + b + (c?c:0);
console.log(somar(5,2,1));

// 2) Void - no js, uma função sem return retornará undenif
// no ts, uma função que não retorna nada é definida como void

const pintarTela = (cor: string) => {
    document.body.style.cssText = `color: ${cor}`; // função retorna void - pois não há NENHUM retorno
}
const isString = (element: any) => {
    if(typeof element === 'string')
        return true; // função retorna boolean | undefined
}

// 3) Never é um tipo de retorno utilizado em casos que a função gera erro ou termina a aplicação
const interrupt = (message: string): never => {
    throw new Error(message);
}
//interrupt('Erro, fechando a aplicação.'); //abaixo disso nada é executado
console.log('teste,aq não é executado');

// 4) Métodos dentro de objetos ou interfaces
interface Quadrado {
    lado: number;
    perimetro(lado: number): number;
}
function calcular(objeto: Quadrado){
    return objeto.perimetro(3);
}

// 5) Overload
// é algo extremamente importante dentro do TS
// permite declarar várias interfaces pra uma função, utilizando o mesmo nome
// e na função principal passamos os diversos tipos de parametros E retorno

//INDICAR TODAS AS POSSIBILIDADES DE USO
function normalize(text: string): string;
function normalize(text: Array<string>): Array<string>;
function normalize(text: string | Array<string>): string | Array<string> { // deve aceitar tanto string quanto array de string
    if(typeof text === 'string')
        return text.trim().toUpperCase();
    else
        return text.map(e => e.trim().toUpperCase());
}
console.log(normalize(' paulo '));
console.log(normalize(['  Palmeiras', 'paulo   ']));

// exemplo 2 - replicar o seletor $ do jquery para pegar uma tag video e a (acessar os métodos de cada um)
function $(seletor: 'a'): HTMLAnchorElement;
function $(seletor: 'button'): HTMLButtonElement;
function $(seletor: 'video'): HTMLVideoElement;
function $(seletor: string): HTMLElement;
function $(seletor: string): HTMLElement | null {
    return document.querySelector(seletor);
};
console.log($('a')?.href);
console.log($('video')?.volume);
console.log($('.caixa'));
// o overload deve receber todas os tipos de declarações