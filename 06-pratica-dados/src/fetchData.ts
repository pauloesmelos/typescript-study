// fazer verificação de erro no fetch com try catch
// toda função async que faz um fetch retorna uma Promisse<> ou null
async function fetchData<Interface>(url: string): Promise<Interface | null> {
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error('Houve um erro no fetchData');
        }
        const json = await response.json();
        return json;
    }
    catch(erro) {
        console.log(erro);
        return null;
    }
}

// normalizar as propriedades do JSON criando um novo objeto
// ex: ['Forma de Pagamento'] -> formaPagamento
export default fetchData;