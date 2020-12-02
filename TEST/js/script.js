// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.sayName = function() {
//         alert(this.name);
//     }
// }

// function Dog() {
// }

// let per = new Person("NekoChan", 18, "男");
// let per2 = new Person("凱劉", 16, "女");
// let dog = new Dog();

// console.log(dog instanceof Person);

// Person.prototype.toString = function() {
//         return `Name: ${this.name}, Age: ${this.age} Gender:${this.gender}`;
// }

// alert(per);
// alert(per2);

// --------------------------------------------

// function MyClass() {

// }

// MyClass.prototype.a = 123

// var mc = new MyClass();

// mc.a = "我是mc中的a"

// var mc2 = new MyClass()

// console.log(MyClass.prototype);
// console.log(mc.__proto__);
// console.log(mc.a);
// console.log(mc2.__proto__);

// --------------------------------------------

// function MyClass() {
// }

// MyClass.prototype.name = "我是原型中的 name"

// var mc = new MyClass();

// console.log("name" in mc);
// console.log(mc.hasOwnProperty("name"));

// console.log(mc.hasOwnProperty("hasOwnProperty"));

// console.log("hasOwnProperty" in mc);

// console.log(MyClass.prototype.__proto__.hasOwnProperty)

// console.log(mc.__proto__.__proto__)

// --------------------------------------------

// onload = () => {
//     let d1 = document.getElementById("d1").parentNode;
//     console.log(d1);
// };

// --------------------------------------------

let let = 1;
console.log(let);
