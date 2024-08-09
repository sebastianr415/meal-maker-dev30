var menu = {
    courses: {
        appetizers: ["miso soup"," eggroll", 'handroll'],
        mains: ["california roll","ichibam roll","salmon roll"],
        desserts: ["mochi ice cream","flan","vanilla ice cream"],
    },
    "addDishToCourse": function(courseName,dishName,dishPrice){
        var dish = {
            "name": courseName,
            "price":dishPrice
        }
        dish.push(menu.courses)
    },
    "getRandomDishFromCourse": function(courserName){
        var dishes = menu.courses
        Math.floor(Math.random([0])) * dishes.length
        return dishes
    },
    "generateRandomMeal": function (){
        var appetizers = this.getRandomDishFromCourse('appetizers')
        var main = this.getRandomDishFromCourse('main')
        var dessert = this.getRandomDishFromCourse('dessert')
        return `name: ${dish.name} Price: ${dish.price}`
    }
}

console.log(menu.courses)
