interface Person {
    name: string;
    readonly age: number
    [key:string]: any;
}

let client: Person = {
    name: "Alex",
    age: 35,
    last_name: "Marin"
}

// client.age = 45