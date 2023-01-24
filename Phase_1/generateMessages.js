const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const generateMessages = (item) => {
  console.log(`Hi ${item.name}! ${item.discount} % off our best candies for you today!`);
}

const newarray = namesAndDiscounts.map(generateMessages);

// module.exports = ___;
