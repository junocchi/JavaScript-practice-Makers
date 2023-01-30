const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'Skitties', price: 2.99 },
  { name: 'Mars', price: 1.49 },
  { name: 'Maltesers', price: 3.49 },
  { name: 'Skittles', price: 1.49 },
  { name: 'Starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise Tagada', price: 5.99 }
];

//#3
//make sure prefix works when given in lowercase too
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const searchCandies = (prefix, givenprice) => {
  const startwith = capitalizeFirstLetter(prefix)
  const maxprice = candies.filter(candy => candy.price < givenprice);
  const checkname = maxprice.filter(candy => candy.name.startsWith(startwith));
  const result = checkname.map(candy => candy.name);
  return result;
};

//console.log(searchCandies('ma', 10));
//output: [ 'Mars', 'Maltesers' ]

//#2
// const checkName = (prefix) => {
//   const checkname = candies.filter(candy => candy.name.startsWith(prefix));
//   return checkname
// };
// console.log(checkName('Ma'));
//output:
//[ { name: 'Mars', price: 1.49 }, { name: 'Maltesers', price: 3.49 } ]

//#1
// const checkPrice = (givenprice) => {
//   const maxprice = candies.filter(candy => candy.price < givenprice);
//   return maxprice
// };  
// console.log(checkPrice(4));
// output:
// [
//   { name: 'Aero', price: 1.99 },
//   { name: 'Skitties', price: 2.99 },
//   { name: 'Mars', price: 1.49 },
//   { name: 'Maltesers', price: 3.49 },
//   { name: 'Skittles', price: 1.49 },
//   { name: 'Ricola', price: 1.99 }
// ]

module.exports = searchCandies;