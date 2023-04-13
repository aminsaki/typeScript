class DataStorage<T extends string | number> {
    data:T[]= [];


    public setData(itme:T) {
        this.data.push(itme);
    }

    getData() {
        return this.data;
    }

    public removData(itme:T) {
        return this.data = this.data.filter((i) => i != itme);
    }

}

const results = new DataStorage<number>();
results.setData(25);
results.setData(2);
results.removData(25);
console.log(results.getData());
