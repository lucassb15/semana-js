/*

Quando usar o map:

Quando você precisa obter um novo array, com a
mesma quantidade de itens do array original

*/

// Exemplo 01:

// const numbers = [1, 2, 3];

//  numbers.map((item, index, array) => {
//    console.log(item, index, array);
//  });

// new arr
// const doubledNumbers = numbers.map (item => item * 2)

// console.log(numbers);
// console.log(doubledNumbers);


// Exemplo 02:

// const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// const salePrices = prices.map(price => price / 2)

// console.log(salePrices);

// Exemplo 03:

const products = [
    { name: 'Mouse sem Fio', price: 30},
    { name: 'Pen Drive', price: 25},
    { name: 'Cartucho de tinta', price: 50},
    { name: 'Suporte ergonômico para notebook', price: 23},
    { name: 'Repetir de sinal Wi-fi', price: 44},
];

const saleProducts = products.map(product => {
    if(product.price >= 30) {
        return {
            name: product.name,
            price: product.price / 2,
        } 
    }
    return product
});

console.log(saleProducts);