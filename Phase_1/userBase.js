class UserBase {
  constructor(names) {
    this.names = names;
  } 

  count() {
    console.log(this.names.length);
  }

  getNames() {
    console.log(this.names);
  }

  getIntroduction() {
    const generatingIntro = (names) => {
      return (`Hi, my names is ${names}.`);
    }
    console.log(this.names.map(generatingIntro));
  }
}  
  
const list = new UserBase(['Uma', 'Josh', 'Ollie']);

list.count();
list.getNames();
list.getIntroduction();

module.exports = UserBase;