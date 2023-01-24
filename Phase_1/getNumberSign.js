function getNumberSign(num){
  if (num > 0) {
    return 'positive'
  } else if (num === 0) {
    return 'zero'
  } else {
    return 'negative'
  }
}

console.log(getNumberSign(7))
console.log(getNumberSign(-4))
console.log(getNumberSign(0))

const isValidLength = (phoneNumber) => {
  const validLength = 11;
  if (phoneNumber.length == validLength) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidLength("07898987445"))
console.log(isValidLength("078989874"))
