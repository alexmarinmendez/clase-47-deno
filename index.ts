type Operation = 'multiply' | 'add' | 'divide'
const calculador = (a:number, b:number, op:Operation): number => {
    if (op === 'multiply') return a*b
    if (op === 'add') return a+b
    if (op === 'divide') {
        if ( b === 0 ) throw new Error('No se puede')
        return a / b
    }
    throw new Error('Operacion desconocida')
}

try {
    console.log(calculador(1, 3, "multiply"))
} catch(e) {
    console.log(e)
}