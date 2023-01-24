class User {
  constructor(name) {
    this.name = name;
  } 

  getName() {
    return this.name
  }

  getIntroduction(){
    console.log(`Hi, my name is ${this.name}.`);
  }
}  
  
const user = new User('James');
user.getIntroduction();



// module.exports = User;