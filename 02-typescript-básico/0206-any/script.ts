// type any
// tomar cuidado ao usar o any, porque é como se não usássemos TypeScript

function removeTextSpaces(text: any){
    return text.trim();
}
console.log(removeTextSpaces("          olaa    "));//ok
console.log(removeTextSpaces(4));// problema

// Uso do any - em alguns casos faz sentido, como no retorno de um json ([{}],{}) entre outros
interface jsonWithArray{
    // {[]}
    nome: string;
    idade: number;
}
async function fetchJSON(url: string){
    const response = await fetch(url);
    const json = await response.json();
    showJson(json);
}
function showJson(data: Array<jsonWithArray>){

}