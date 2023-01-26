const searchCandies = (prefix, maxprice) => {
filtrar e colocar resultado em new array
  newarray = 

};

module.exports = searchCandies;

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

//expected behaviour
// searchCandies('Ma', 10);
// [ 'Mars', 'Maltesers' ]

// searchCandies('Ma', 2); // Maltesers excluded: it's more than 2
// [ 'Mars' ]

// searchCandies('S', 10); 
// [ 'Skitties', 'Skittles', 'Starburst' ]

// searchCandies('S', 4); 
// [ 'Skitties', 'Skittles' ] // Starbust excluded: it's more than 4
