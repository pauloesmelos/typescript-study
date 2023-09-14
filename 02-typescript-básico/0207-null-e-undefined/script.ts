const button = document.querySelector('button');
const config = localStorage.getItem('config');
if(button)
    button.addEventListener('click',() => console.log('Clicou'));
// ou button?.addEventListener('click',arrow function);
if(config)
    console.log(config);

// undefined - variável instanciada, mas não possui valor.
let total;
const data = {};
console.log(data.nome); // undefined

// propriedades opcionais, permitindo passar types ou interface e criar ou não as mesmas propriedades
interface Product{
    nome?: string;
    preco?: number;
}
const Jogo: Product = {
    nome: "Fifa"
};
const Livro: Product = {};
//modo 1
console.log(Livro.nome?.toString());
//modo 2
if(Livro.nome){
    console.log(Livro.nome);
}