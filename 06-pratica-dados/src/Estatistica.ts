export default class Estatistica {
    data;
    constructor(data: Transaction[]) {
        this.data = data;
    }
    public getTotal() {
        let total =  this.data.reduce((ac,item) => {
            return ac + item.valor;
        },0);
        return total;
    }
}