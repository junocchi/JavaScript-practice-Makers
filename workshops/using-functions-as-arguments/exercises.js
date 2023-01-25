// Look at the README for instructions.

// Exercise 1 (if we want to return 'Hello!' twice) - better option
const sayHello = () => {
  console.log("Hello!");
};

const doubleCall = (fn) => {
  fn();
  fn();
};

doubleCall(sayHello);

// Exercise 1 alternative
// const sayHello = () => {
//   console.log("Hello!");
// };

// const doubleCall = (callback) => {
//   let times = 2
//   for(let i = 0; i < times; i++) {
//     callback();
//   }
// };

// doubleCall(sayHello);


// Exercise 2 - cb = callback
const obnoxiousFn = (cb) => {
  console.log("EXECUTING CALLBACK!");
  return cb();
};

// // Exercise 3
const currentTime = (callback) => {
  const date = new Date();
  const time = date.toLocaleTimeString();
  callback(time); //here we are executing the 
  //callback function, so we dont need the 'return' keyword
};

// // Bonus Exercise
// best option (works the same way that .map does)
const myMap = (array, callback) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const oldElement = array[i];
    const newElement = callback(oldElement);
    newArray.push(newElement);
  }
  return newArray;
};

//option using .map
const myMap = (array, callback) => {
  return array.map((item) => {
    return callback(item);
  });
};

module.exports = {
  doubleCall,
  obnoxiousFn,
  currentTime,
  myMap,
};

/////the following function
(item) => {
  return callback(item);
}
//is the same as the build in function below
callback