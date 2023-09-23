export default class Estatistica {
    data;
    constructor(data) {
        this.data = data;
    }
    getTotal() {
        let total = this.data.reduce((ac, item) => {
            return ac + item.valor;
        }, 0);
        return total;
    }
}
//# sourceMappingURL=Estatistica.js.map