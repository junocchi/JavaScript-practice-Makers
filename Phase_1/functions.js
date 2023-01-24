function lowercaseMessage(string) {
  return string.toLowerCase();
}

function transform(string, transformFunc) {
  return transformFunc(string);
} 

console.log(transform('WHY ARE YOU SHOUTING?', lowercaseMessage));


function notifyByEmail(email) {
  return `Email sent to: ${email}`;
}

function notifyByText(phone_num) {
  return `Text sent to: ${phone_num}`;
}

function notify(string, notifyFunc) {
  return notifyFunc(string);
}

console.log(notify('hello@makers.tech.test', notifyByEmail));
console.log(notify('+10000000000', notifyByText));