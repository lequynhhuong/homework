const numbers = []
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) continue
  numbers.push(i)
}
console.log(numbers)