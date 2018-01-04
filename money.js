let jpy = 10
const name = (money) => {
  if (money < 0) {
    let vnd = 0
    return vnd
  } else {
    let text = 'It\'s' + money * 202.272727 + 'Vietnam dong'
    return text
  }
}


console.log(name(100))