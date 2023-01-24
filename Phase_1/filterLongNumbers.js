const checkLength = (phone_num) => {
  if (phone_num.length <= 10) {
    return true;
  } else {
    return false;
  }
}

const filterLongNumbers = (phonenumbers) => {
  return phonenumbers.filter(checkLength)
}

const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

console.log(filterLongNumbers(numbers));
// [ '1763687364', '4763687363', '7867867862' ]
console.log(filterLongNumbers(['4763687363', '7867867862']));
// [ '4763687363', '7867867862' ]
