const names = ['Nath', 'Juli', 'Lila'];
const newNames = names.concat('Rapha', 'Mari', 'Lara');

console.log(newNames);

//outputs: [ 'Nath', 'Juli', 'Lila', 'Rapha', 'Mari', 'Lara' ]


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function interatorFunction(number){
  console.log(number);
}

numbers.forEach(interatorFunction);
//puts numbers from 1 to 10

let sum = 0;

numbers.forEach((number) => {
  sum += number
  });
// sums up all numbers

console.log(sum);
// 55