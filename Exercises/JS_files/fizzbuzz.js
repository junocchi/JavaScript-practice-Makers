const fizzbuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return("FizzBuzz");
  } else if (num % 3 === 0) {
    return("Fizz");
  } else if (num % 5 === 0) {
    return("Buzz");
  } else {
    return(num);
  };
};

module.exports = fizzbuzz;

// fizzbuzz(3);
// fizzbuzz(5);
// fizzbuzz(8);
// fizzbuzz(15);
// fizzbuzz(18);
// fizzbuzz(20);