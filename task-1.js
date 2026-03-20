// task:1
let name = "Naveen";
let age = 22;
let city = "Bangalore";
 
console.log("My name is " + name + ".");
console.log("I am " + age + " years old.");
console.log("I am from " + city + ".");
 
// task2:
let userName = prompt("Enter your name:");
 
alert("Welcome " + userName + "!");
 
let learnJS = confirm("Do you want to learn JavaScript?");
 
if (learnJS) {
  alert("Great Choice!");
} else {
  alert("No Problem!");
}
console.log(learnJS);
 
//task3:
let str = "Hello";
let num = 100;
let bool = true;
let undef;
let empty = null;
console.log("Value:", str, "| Type:", typeof str);
console.log("Value:", num, "| Type:", typeof num);
console.log("Value:", bool, "| Type:", typeof bool);
console.log("Value:", undef, "| Type:", typeof undef);
console.log("Value:", empty, "| Type:", typeof empty);
 
 
//task4:
let colors = ["Red", "Blue", "Green", "Yellow", "Black", "White"];
 
console.log("First color:", colors[0]);
console.log("Last color:", colors[colors.length - 1]);
console.log("Total colors:", colors.length);
 
for (let i = 0; i < colors.length; i++) {
  console.log("Color at index", i, ":", colors[i]);
}
 
//task5:
let subjects = ["Math", "Science", "English", "History", "Computer"];
let index = prompt("Enter index number (0 to 4):");
console.log("Selected subject:", subjects[index]);
 
 
//task6:
let student = {
  name: "Rahul",
  age: 21,
  course: "B.Tech",
  skills: ["HTML", "CSS", "JavaScript"]
};
 
console.log("Student Name:", student.name);
console.log("Second Skill:", student.skills[1]);
console.log("Course Name:", student.course);
 
//task7:
let product = {
  name: "Laptop",
  price: 45000,
  category: "Electronics",
  inStock: true
};
 
console.log("Product Name:", product.name);
console.log("Price:", product.price);
 
if (product.inStock) {
  console.log("Available: Yes");
} else {
  console.log("Out of Stock");
}
 
//task8:
let fruits = {
  tropical: ["mango", "pineapple"],
  berries: ["strawberry", "blueberry"],
  citrus: ["orange", "lemon"]
};
 
console.log("Blueberry:", fruits.berries[1]);
console.log("Mango:", fruits.tropical[0]);
console.log("Lemon:", fruits.citrus[1]);
 
console.log("Total Categories:", Object.keys(fruits).length);
