import moedaToNumber from "./moedaToNumber.js";
import stringToDate from "./stringToDate.js";
declare global {
    type FormPayment = 'Cartão de Crédito' | 'Boleto';
    interface TransactionAPI {
        Nome: string;
        Status: string;
        Email: string;
        Data: string;
        ID: number;
        ['Cliente Novo']: number;
        ['Forma de Pagamento']: FormPayment; // cuidado, pois esse tipo só aceita dois tipos de pagamento
        ['Valor (R$)']: string;
    }
    interface Transaction {
        nome: string;
        status: string;
        email: string;
        data: Date;
        id: number;
        novo: boolean;
        formaPagamento: FormPayment;
        moeda: string;
        valor: number; 
    }
} // não é recomendado usar `declare global` em projetos onde muitos devs trabalham juntos(evitar conflito)
export default function normalizeTransaction(data: TransactionAPI) {
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
    }
}