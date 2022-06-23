const suma = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

const sumarOMultiplicar = fn => fn(2.4,5400);

console.log(sumarOMultiplicar( suma));
console.log(sumarOMultiplicar( multiplicar ));