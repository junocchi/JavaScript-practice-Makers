let counter = 0;

function increment() {
  counter++;
  console.log(counter);
}

setInterval(increment, 2000);
// myFunction will execute every 2 seconds
// printing numbers until I stop it (there's no break)