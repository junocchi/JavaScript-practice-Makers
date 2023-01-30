class Candy {
  constructor(item, price) {
    this.item = item;
    this.price = price;
  } 

  getItem() {
    return this.item; //{"item": "Mars"}
  }

  getPrice() {
    return this.price; //{"price": 1.49}
  }
}

module.exports = Candy;


//#1 on terminal, enter node and require the files:
// const ShoppingBasket = require('./shoppingBasket');
// const Candy = require('./candy');

//#2 execute the classes Candy and ShoppingBasket to check their functionalities:
// const candy = new Candy('Mars', 4.99);
// candy.getItem(); //output:'Mars'
// candy.getPrice(); //output:4.99
// const basket = new ShoppingBasket();
// console.log(basket.getTotalPrice()); //0
// basket.addItem(candy); 
// basket.addItem(new Candy('Skittle', 3.99)); //
// basket.addItem(new Candy('Skittle', 3.99)); //added 2x Skittle
// console.log(basket.getTotalPrice()); //output: 12.97
// console.log(basket.getAllItems()); //output:
// //[
// //  Candy { item: 'Mars', price: 4.99 },
// //  Candy { item: 'Skittle', price: 3.99 },
// //  Candy { item: 'Skittle', price: 3.99 }
// //]