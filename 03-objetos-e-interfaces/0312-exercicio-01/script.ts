// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData

// Resposta

interface Window {
    UserData: any;
}
window.UserData = {};
interface UserData {
    nome?: string;
    email?: string;
    cpf?: string;
}

const form = <HTMLFormElement>document.getElementById('form');
form?.addEventListener('keyup', handleForm);
function handleForm({target}: KeyboardEvent) {
    if( target instanceof HTMLInputElement )
        window.UserData[target.id] = target.value;
    localStorage.setItem('item',JSON.stringify(window.UserData));
}
// carregando dados do localStorage
function isValidJson(json: string) {
    try {
        JSON.parse(json);
    }
    catch{
        return false;
    }
    return true;
}
function isValidUserData(data: unknown): data is UserData{
    if(data && typeof data === 'object' && ('nome' in data || 'email' in data || 'cpf' in data))
        return true;
    else 
        return false;
}
function loadLocalStorage() {
    const dados = localStorage.getItem('item') || null ;
    if(dados && isValidJson(dados)){
        const userData = JSON.parse(dados);
        if(isValidUserData(userData)){
            console.log('Ok');
            Object.entries(userData).forEach(([key, value]) => {
                // e[0] = chave
                // e[1] = valor
                // ([key, value]) = desestruturando o array
                let input = document.getElementById(key);
                if(input instanceof HTMLInputElement) {
                    input.value = value;
                    window.UserData[key] = value;
                }
            });
        }
    }
}
loadLocalStorage();