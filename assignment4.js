const numbers = []

for (let i = 0; i <= 10; i++) {
  numbers.push(i)
}

const oddNumbers = numbers.filter(n => n % 2 !== 0)

const evenNumbers = numbers.filter(n => n % 2 === 0)

console.log(oddNumbers)

console.log(evenNumbers)
