// 1) tuples - existem dois jeitos de criar e utilizartuplas
const produto1 = ["Notebook", 5000];
const produto2: [string, number] = ["Geladeira",6000];

if(typeof produto1[0] === 'string') {
    console.log(produto1[0].toUpperCase());
}
console.log(produto2[0].toLowerCase());

// desestruturando
let [produto, preco] = produto2;
console.log(preco);

// 2) as const - passado no retorno do método, tornando o dado readonly e inferindo o tipo de dado mais
// correto aos elementos. Em métodos q retornam array, passa a retorna tupla

function getInnerTextAndElement(selector: string) {
    const element = document.querySelector<HTMLElement>(selector);
    if(element) {
        return [element.innerText, element] as const;
    }
    else 
        return null;
}
const myButton = getInnerTextAndElement('.btn');
console.log(myButton); // ["texto",HTMLElement]
if(myButton) {
    const [innerText, elemento] = myButton;
    console.log(innerText); // 'Gerar boleto'
    console.log(elemento); // <button class="btn">Gerar Boleto</button>
}

// Exercício
// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela

async function fetchVendas() {
    const response = await fetch('https://api.origamid.dev/json/vendas.json');
    const json = await response.json();
    sumTotal(json);
}
fetchVendas();
interface InfoProduto {
    marca: string;
    cor: string;
}
type Venda = [string, number, string, InfoProduto];
function sumTotal(data: Array<Venda>) {
    let total: number = 0;
    let total2: number = 0;
    if(data) {
        // com forEach
        data.forEach(e => {
            if(e) {
                const [item, preco, dataVenda, infos] = e;
                total += preco;
            }
        });
        if(total){
            document.body.innerHTML = `
        <h3> Total de vendas: R$ ${total}</h3>
        `;
        }
        // com reduce
        total2 = data.reduce((total,elemento) => {
            console.log(total); // 0 até number aleatório (contador)
            console.log(elemento); // percorre todos arrays de objeto
            return total + elemento[1]; // elemento[1] = preço
        }, 0); // valor inicial - tipo retorno
        if(total2) {
            document.body.innerHTML += `
            <h3> Total de vendas 2: R$ ${total2}</h3>
            `;
        }
    }
}