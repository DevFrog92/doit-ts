import INameable from "./INameable"

let person: object = { name: "yong", age: 30 };
console.log((<{name: string}>person).name)
let obj: object = { name: "Jack" };
let name1 = (<INameable>obj).name
let name2 = (obj as INameable).name
console.log(name1, name2);
