# Using Functions as Arguments (aka. callbacks)
In JavaScript, functions can be passed around like any other data. They can be
stored in variables, and used as arguments to other functions. When a function
is used as an argument for a second function, it's often called a callback.

Learning objectives:
- Understand that functions can be used and manipulated in a similar way to how
  we can use strings, arrays, objects etc.
- Be able to write functions that take callbacks as arguments


Here is a function which converts a string to capital letters.
We'll be using it later.
```js
const convertToCaps = (string) => {
  return string.toUpperCase();
};
```

Here is a function which adds an exclamation mark to a string.
We'll be using it later.
```js
const exclaim = (string) => {
  return string + "!";
};
```

Here is a function which takes one argument, called `callback`. This argument
should be a function. No matter what function it's given as `callback`,
the callback will be executed and will be passed `'Makers'` as an argument.
```js
const makersBiggestFan = (callback) => {
  callback("Makers");
};
```

Let's try it out!

Before running this code, see if you can follow precisely the logic
of what is happening. Make a prediction of what you will see and
why.
```js
const res1 = makersBiggestFan(convertToCaps);
console.log("res1:", res1);

const res2 = makersBiggestFan(exclaim);
console.log("res2:", res2);
```
Was your prediction correct? If not, what do you think actually happened?

--

These examples have so far used _named functions_, i.e. functions
which have been assigned to a variable such as `exclaim` and `convertToCaps`.

But we don't _have_ to put these functions in a variable before we use them.
We can create them directly where they're used:

```js
const res3 = makersBiggestFan((string) => {
  return string + string;
});
```

This code is doing exactly the same thing as before,
except we haven't first put the function into a variable.

This is just a more compact syntax, which is commonly used
when the callback doesn't need to be reused elsewhere.

It's analogous to doing something like:

```js
const statement = 'I love javascript'
const excitingStatement = exclaim(statement)
```
  vs.
```js
const excitingStatement = exclaim('I love Javascript')
```

## Exercises
For each of these exercises, you have been provided an empty function inside
`exercises.js`. There are tests for each exercise inside `exercises.test.js`,
**you do not need to edit these tests**.

You can run the tests by navigating to this folder, making sure the package is installed with `npm install` and then run the tests with `npx jest`.

### Exercise 1:
`makersBiggestFan` executes whatever callback we give it with the string `'Makers'`.

Can you write a function called `doubleCall` which executes whatever callback
we give it twice?
```js
// Example behaviour
const sayHello = () => {
  console.log("Hello!");
};

doubleCall(sayHello); // Should print 'Hello!' twice.
```

### Exercise 2:
Can you write a function called `obnoxiousFn` that takes a callback, and announces loudly it's executing its callback, before doing it and returning the result?
```js
// Example behaviour
const four = obnoxiousFn(() => {
  return 2 + 2;
}); // Should print 'EXECUTING CALLBACK!!' and return 4
console.log(four); // Should print 4
```

### Exercise 3:
Can you write a function `currentTime` that takes a callback, and executes the given callback using the current time as an argument? The time should be a string in the format 'HH:MM:SS'.

Hint:
> You can use `new Date()` to get a date object representing the current time.
>
> Date objects have a `.toLocaleTimeString()` method on them: `date.toLocaleTimeString()`
```js
// Example behaviour
currentTime((time) => {
  console.log(`The time is ${time}`);
}); // Should output the current time in the format: "The time is 16:48:07".
```

### Bonus:
The `.map()` function takes a callback, and executes it with each element of an array:
```js
const strings = [1,2,3].map((number) => { return number.toString() })
console.log(strings) // ['1', '2', '3']
```

Can you write your own version of the map function called `myMap`? It should be used like this:

```js
// Example behaviour
const lettersArray = ["a", "b", "c"];
const numbersArray = [1, 2, 3, 5];

const toUpperCase = (str) => {
  return str.toUpperCase();
};
const double = (num) => {
  return num * 2;
};

const uppercaseArray = myMap(lettersArray, toUpperCase); // uppercaseArray should be ['A', 'B', 'C']
const doubledArray = myMap(numbersArray, double);   // doubledArray should be [2, 4, 6, 10]
```

> Hint: You will need to use a `for` loop here.

<!-- BEGIN GENERATED SECTION DO NOT EDIT -->

---

**How was this resource?**  
[😫](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-fundamentals&prefill_File=workshops%2Fusing-functions-as-arguments%2FREADME.md&prefill_Sentiment=😫) [😕](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-fundamentals&prefill_File=workshops%2Fusing-functions-as-arguments%2FREADME.md&prefill_Sentiment=😕) [😐](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-fundamentals&prefill_File=workshops%2Fusing-functions-as-arguments%2FREADME.md&prefill_Sentiment=😐) [🙂](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-fundamentals&prefill_File=workshops%2Fusing-functions-as-arguments%2FREADME.md&prefill_Sentiment=🙂) [😀](https://airtable.com/shrUJ3t7KLMqVRFKR?prefill_Repository=makersacademy%2Fjavascript-fundamentals&prefill_File=workshops%2Fusing-functions-as-arguments%2FREADME.md&prefill_Sentiment=😀)  
Click an emoji to tell us.

<!-- END GENERATED SECTION DO NOT EDIT -->
