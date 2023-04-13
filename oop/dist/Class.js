"use strict";
// class Person {
//     constructor( private  readonly id:number , public name: string , public avg: number ) {}
//     getInf() {
//         return   `${this.id}:  myName:${this.name} and avg ${this.avg}`
//     }
// }
//
// class Person2 extends  Person{
//     index(){
//         return  this.getInf();
//     }
// }
// // let p = new Person(20,'aminsaki',50);
// let p2  =new Person2(80,'amin',50);
// console.log(p2.index());
class Person {
    constructor(name) {
        this.name = name;
    }
    get getName() {
        return this.name;
    }
    set setName(value) {
        this.name = value;
    }
}
let p = new Person('AMIN');
console.log(p.getName);
