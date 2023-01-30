//W6 - 1.12
class ShoppingBasket {
  constructor() {
    this.items = [];
    this.discount = 0;
  } 

  addItem(item) {
    this.items.push(item);
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.candies.forEach((candy) => {
      totalPrice += candy.getPrice();
    });

    return totalPrice - this.discount;
    //return this.items.reduce((total, item) => total + item.price, 0);
  }

  getAllItems() {
    return this.items;
  }
}  

module.exports = ShoppingBasket;

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