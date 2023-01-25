//W6 -1.10 Array operations
//exercise
// const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

// const generateMessages = (name) => {
//   console.log(`Hi ${name}! 50% off our best candies for you today!`)
//   }

//output:
// Hi Anna! 50% off our best candies for you today!
// Hi Laura! 50% off our best candies for you today!
// Hi Josh! 50% off our best candies for you today!
// Hi Min! 50% off our best candies for you today!
// Hi Karla! 50% off our best candies for you today!

// const offerMessage = names.map(generateMessages);

//challenge
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
//Used map to iterate through the array items and create a new array

//output:
// Hi Anna! 50 % off our best candies for you today!
// Hi Laura! 40 % off our best candies for you today!
// Hi Josh! 30 % off our best candies for you today!
// Hi Min! 50 % off our best candies for you today!
// Hi Karla! 60 % off our best candies for you today!

module.exports = generateMessages
