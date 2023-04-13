interface Info<T extends string | number> {
    name: T
    avg: T
}

//
// let person: Partial<Info> = {}
// person.name = "rez";
// person.avg = 50;
// console.log(person);

let person: Info<number> = {

}