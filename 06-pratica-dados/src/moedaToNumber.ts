/**
 * retorna o valor da transação em string, essa função faz a conversão para number
 * 5.000,10 -> 5000.10
 */
export default function moedaToNumber(value: string): number {
    if(value === '-')
        return 0;
    else
        return Number(value.replaceAll('.', '').replaceAll(',','.'));
}