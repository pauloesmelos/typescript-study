// 3) Extends - indica o tipo genérico que geve herdar uma interface específica 
// extrair o innerText de elementos HTML(link e button) e usar um método específo de cada um 
const button = document.querySelector('button');
const a = document.querySelector('a');

const extractText = <T extends HTMLElement>(element: T) => {
    return {
        text: element.innerText,
        element
    };
}

if(button)
    console.log(extractText(button).element.click); // HTMLButtonElement
if(a)
    console.log(extractText(a).element.href); // HTMLAnchorElement

// criar uma função de jquery semelhante ao querySelector, que retorna um HTMLElement apartir de um text

const $ = <T extends HTMLElement>(query: string): T | null => { // $('nav');
    return document.querySelector(query);
}
const anchor = $<HTMLAnchorElement>('a')?.href;
const botao = document.querySelector<HTMLButtonElement>('.btn');

if(botao instanceof HTMLButtonElement)
    botao.click();

// 4) É útil utilizar Generics em funções assincronas que fazem fetch
interface Product {
    nome: string;
    preco: number;
    descricao: string;
}
const fetchData = async <T extends Product>(url: string): Promise<T> => {
    const response = await fetch(url);
    return await response.json();
}
// a) definindo o tipo da variável manualmente
/* const getProduct = async (product: string) => {
    const notebook: Product = await fetchData('https://api.origamid.dev/json/notebook.json');
    console.log(notebook);
} */
// b) defindo a função fetchData com generics
const getProduct = async (product: string) => {
    const notebook = await fetchData('https://api.origamid.dev/json/notebook.json');
    console.log(notebook.nome);
}
getProduct('notebook');