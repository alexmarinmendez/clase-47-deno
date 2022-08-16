// let frutas: [string, boolean, string] = ['orange', true, 'banana']
// frutas[1] = false
// let x: string = false as any as string;
// console.log(x)

let user: {
    name: string;
    age: number;
    [key:string]: any
}

user = {
    name: "Alex",
    age: 35
}

user.last_name = "Marin"
user.employ = true
