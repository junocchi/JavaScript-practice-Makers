const person = {
  name: 'Maxine',
  age: 32,
  address: {
    city: 'London',
    postcode: 'E1 123'
  },
  hobbies: ['writing', 'tennis', 'cooking']
};

console.log(person.name); //outputs: Maxine
console.log(person['name']); //outputs: Maxine
console.log(person.address.city); //outputs: London
console.log(person.address['city']); //outputs: London
console.log(person.hobbies[1]); //outputs: tennis