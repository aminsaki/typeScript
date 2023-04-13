"use strict";
class DataStorage {
    data = [];
    setData(itme) {
        this.data.push(itme);
    }
    getData() {
        return this.data;
    }
    removData(itme) {
        return this.data = this.data.filter((i) => i != itme);
    }
}
const results = new DataStorage();
results.setData(25);
results.setData(2);
results.removData(25);
console.log(results.getData());
//# sourceMappingURL=MainClass.js.map