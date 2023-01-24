class Candy {
  constructor(item, price) {
    this.item = item;
    this.price = price;
  } 

  getItem() {
    console.log(this.item);
  }

  getPrice() {
    console.log(this.price);
  }
}

class ShoppingBasket {
  constructor() {
    this.items = [];
  } 

  addItem(item, price) {
    this.items.push({item, price});
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  getAllItems() {
    return this.items;
  }
}  
//const ShoppingBasket = require('./shoppingBasket');

const candy = new Candy('Mars', 4.99);
candy.getItem(); //outputs: Mars
candy.getPrice();//outputs: 4.99

const basket = new ShoppingBasket();
console.log(basket.getTotalPrice()); //outputs: 0
basket.addItem(candy);
basket.addItem(new Candy('Skittle', 3.99));
basket.addItem(new Candy('Skittle', 3.99));
console.log(basket.getTotalPrice()); //outputs: NaN - means Not a Number??
console.log(basket.getAllItems()); //outputs:
//[
//   { item: Candy { item: 'Mars', price: 4.99 }, price: undefined },
//   { item: Candy { item: 'Skittle', price: 3.99 }, price: undefined },
//   { item: Candy { item: 'Skittle', price: 3.99 }, price: undefined }
// ]

module.exports = Candy;
module.exports = ShoppingBasket;