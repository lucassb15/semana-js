/*
Quando usar o reduce:

Quando baseado no array original, você precisa "reduzir" o
array á um valor.

[1,2,3], 6
*/


// Exemplo 01:

// const numbers = [1,2,3];

// const sumResult = numbers.reduce((accumulator, item) => accumulator + item, 0);

// console.log(sumResult);

// const phaseScores = [
//     { name: 'Vinicius Costa', score: 337 },
//     { name: 'Roger Melo', score: 43 },
//     { name: 'Alfredo Braga', score: 234 },
//     { name: 'Pedro H. Silva', score: 261 },
//     { name: 'Ana Paula Rocha', score: 491 },
//     { name: 'Vinicius Costa', score: 167 },
//     { name: 'Roger Melo', score: 137 },
//     { name: 'Alfredo Braga', score: 135 },
//     { name: 'Ana Paula Rocha', score: 359 },
//     { name: 'Pedro H. Silva', score: 133 }
// ];

// const rogerScore = phaseScores.reduce((accumulator, phaseScore) => {
//     if (phaseScore.name === 'Roger Melo') {
//         return accumulator + phaseScore.score
//     }
//     return accumulator
// }, 0)

// console.log(rogerScore);

