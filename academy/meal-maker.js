let menu = {
  _courses : {
    appetizers : [],
    main : [],
    desserts : []
  },
  get courses(){
    return this._courses;
  },
  addDishToCourse(courseName,dishName,dishPrice){
    let dish = {
      name : dishName,
      price : dishPrice
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName){
    const dishes = this.courses[courseName];
    const index = Math.floor(Math.random() * dishes.length);
    return dishes[index];
  },
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('main');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Appetizer: ${appetizer.name} & Main: ${main.name} & Dessert: ${dessert.name} & Total Price: ${totalPrice}`;
    }
};

menu.addDishToCourse('appetizers','Fernet',50);
menu.addDishToCourse('appetizers','Campari',150);
menu.addDishToCourse('appetizers','Rum',80);

menu.addDishToCourse('main','Pizza',50);
menu.addDishToCourse('main','Pasta',80);
menu.addDishToCourse('main','Chiken',180);

menu.addDishToCourse('desserts','Tiramisu',150);
menu.addDishToCourse('desserts','Lemon Pie',120);
menu.addDishToCourse('desserts','Amaretto',80);

const meal = menu.generateRandomMeal();
console.log(meal);