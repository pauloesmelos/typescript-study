// 1) Type Assertion - as

// usar o as é como ter um carro blindado e andar com os vidros abertos
// diminuimos o type safety com seu uso
// CUIDADO AO USAR

const video = document.querySelector('#video') as HTMLVideoElement;
//video.volume; // não existe nenhum elemento com esse id, geraria erro

// 2) Type assertion em get
interface Produto {
    nome: string;
    preco: number;
    descricao: string;
}
async function fetchProd (){
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    return response.json();
}
async function handleProduct (){
    const json = await fetchProd() as Produto;
    console.log(json.nome);
}
handleProduct();

// 3) non-null operator
// indica que é impossível um elemento ser null
// também não garante type safety, pode gerar erro !

const video2 = document.querySelector('video')!;
video2.volume;
const video3 = document.querySelector('video');
video3?.volume

// 4) outras sintaxes
const a = document.querySelector<HTMLAnchorElement>('a');
const a2 = <HTMLAnchorElement>document.querySelector('a');