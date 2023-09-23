import moedaToNumber from "./moedaToNumber.js";
import stringToDate from "./stringToDate.js";
export default function normalizeTransaction(data) {
    return {
        nome: data.Nome,
        status: data.Status,
        email: data.Email,
        data: stringToDate(data.Data),
        id: data.ID,
        novo: Boolean(data['Cliente Novo']),
        formaPagamento: data['Forma de Pagamento'],
        moeda: data['Valor (R$)'],
        valor: moedaToNumber(data['Valor (R$)'])
    };
}
//# sourceMappingURL=normalizeTransaction.js.map