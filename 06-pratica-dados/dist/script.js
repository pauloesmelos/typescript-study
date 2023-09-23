import Estatistica from "./Estatistica.js";
import fetchData from "./fetchData.js";
import normalizeTransaction from "./normalizeTransaction.js";
async function handleFetch() {
    const data = await fetchData('https://api.origamid.dev/json/transacoes.json');
    if (!data)
        return;
    else if (data && typeof data === 'object') {
        const transactions = data.map(normalizeTransaction);
        fillTable(transactions);
        fillStatistic(transactions);
    }
}
handleFetch();
function fillStatistic(data) {
    const div = document.getElementById('estatistica');
    const total = document.querySelector('.total');
    let estatistica = new Estatistica(data);
    if (total)
        total.innerText = estatistica.getTotal().toString();
}
const fillTable = (data) => {
    const tbody = document.querySelector('#table-transactions tbody');
    if (!tbody)
        return;
    data.map(e => {
        tbody.innerHTML += `
        <tr>
            <td>${e.nome}</td>
            <td>${e.email}</td>
            <td>R$ ${e.valor}</td>
            <td>${e.formaPagamento}</td>
            <td>${e.status}</td>
        </tr>
        `;
    });
};
// Exercício Prática de Dos
/* 1 - Acesse os dados da api: https://api.origamid.dev/json/transacoes.json

2 - Mostre em uma tabela os dados de cada transação.

3 - Calcule:

3.1 - Soma total dos valores

3.2 - Transações por meio de pagamento.

3.3 - Transações por status.

3.4 - Total de vendas por dia da semana.

3.5 - Dia da semana com mais vendas.

4 - Mostre as estatísticas na tela.

5 - Organize o código em pequenos módulos.

6 - Normalize os dados da API se achar necessário. */ 
//# sourceMappingURL=script.js.map