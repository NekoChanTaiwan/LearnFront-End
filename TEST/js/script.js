// function Person(name, age, gender) {
// 	this.name = name;
// 	this.age = age;
// 	this.gender = gender;
// 	this.sayName = function () {
// 		alert(this.name);
// 	};
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
// console.log(per);

// --------------------------------------------

// function MyClass() {}

// MyClass.prototype.a = 123

// var mc = new MyClass();

// mc.a = "我是mc中的a"

// var mc2 = new MyClass()

// console.log(MyClass);
// console.log(mc.__proto__);
// console.log(mc.a);
// console.log(mc2.__proto__);

// --------------------------------------------

// function MyClass() {}

// MyClass.prototype.name = "我是原型中的 name";

// var mc = new MyClass();
// console.log("name" in mc);
// console.log(mc.hasOwnProperty("name"));

// console.log(mc.hasOwnProperty("hasOwnProperty"));

// console.log("hasOwnProperty" in mc);

// console.log(MyClass.prototype.__proto__.hasOwnProperty);

// console.log(mc.__proto__.__proto__);

// --------------------------------------------

// onload = () => {
//     let d1 = document.getElementById("d1").parentNode;
//     console.log(d1);
// };

// --------------------------------------------

// function Person(name, age, gender) {
// 	this.name = name;
// 	this.age = age;
// 	this.gender = gender;
// 	this.sayName = function () {
// 		alert(this.name);
// 	};
// }

// --------------------------------------------

// let num = new Number(3);
// let str = new String("hello");
// let bool = new Boolean(true);

// str.name = "world";

// console.log(num);
// console.log(str);
// console.log(bool);

// console.log(str.name);

// --------------------------------------------

// let str = "Hello World";
// console.log(str.charCodeAt(6));

// let result = String.fromCharCode(73);
// console.log(result);

// --------------------------------------------

// let reg = new RegExp("a", "i");

// let str = "a";

// console.log(reg.test(str));
// console.log(reg.test("bca"));
// console.log(reg.test("bb"));
// console.log(reg.test("A"));

// let reg = /a/i;
// let str = "a";
// console.log(typeof reg);

// reg = /a|b|c/m;
// console.log(reg.test("dcd"));

// reg = /a[bde]c/;
// console.log(reg.test("afc"));

// reg = /[^ab]/;
// console.log(reg.test("abc"));

// reg = /[^0-9]/;
// console.log(reg.test("1231"));

// let str = "1a2b3c4d5e6f7";
// let result = str.split(/[a-z]/);
// console.log(result);

// let str = "hello abc hello abc";
// let result = str.search(/a[bef]c/);
// console.log(result);

// let str = "1a2b3c4d5e6f7A8B9C";
// let result = str.match(/[a-z]/gi);
// console.log(result);
// console.log(Array.isArray(result));
// result = str.replace(/[a-z]/gi, "");
// console.log(result);

// let reg = /(ab){3}/;
// console.log(reg.test("ababab"));

// let reg = /ab{1,2}c/;
// console.log(reg.test("abbc"));

// let reg = /ab?c/;
// console.log(reg.test("abbbc"));

// let reg = /^a/;
// reg = /a$/;
// reg = /^a$/;
// console.log(reg.test("abca"));

// let reg = /\./;
// reg = /\\/;
// console.log(reg.test("asds.\\ad"));

// let reg = new RegExp("\\.");
// console.log(reg);

// let reg = /\bchild\b/;
// console.log(reg.test("hello child ren"));

// let str = prompt("輸入用戶名");
// let str = "                   ad  m  in                     ";
// result = str.replace(/\s/gi, "");
// result = str.replace(/^\s*/gi, ""); // 去除開童空格
// result = str.replace(/\s*$/gi, ""); // 去除結尾空格
// result = str.replace(/^\s*|\s*$/g, ""); // 去除前後空格
// console.log(result);

// let object = new Object();
