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

// --------------------------------------------

// console.log(console.constructor == Object);

// window.console.log("123");
// console.log(window);
// console.log(navigator.appName);
// console.log(navigator.userAgent);

// --------------------------------------------

// let name = () => {
// 	console.log("test");
// };

// let name = function () {
// 	console.log("test");
// };

// function name() {
// 	console.log("test");
// }

// name();

// --------------------------------------------

// let p = {};
// let propName = "myAge";
// let value = 18;

// p.propName = value;
// p[propName] = value;

// console.log(p);

// function showInfo(age) {
// 	if (age < 18) {
// 		console.log("未成年");
// 	} else if (age > 60) {
// 		console.log("算了吧");
// 	} else {
// 		console.log("剛好");
// 	}
// }

// showInfo(17);
// showInfo(65);
// showInfo(25);

// function fn1() {
// 	// 函式聲明
// 	console.log("fn1()");
// }

// let fn2 = function () {
// 	// 函式表達式
// 	console.log("fn2()");
// };

// fn1();
// fn2();

// let obj = {};

// function test2() {
// 	this.xxx = "hi";
// }

// test2.call(obj); // 可以讓一個函式成為指定任意物件的方法進行調用
// console.log(obj.xxx);
// --------------------------------------------

// (function () {
// 	var a = 1;
// 	function test() {
// 		console.log(++a);
// 	}
// 	function test2() {
// 		console.log("test2()");
// 	}
// 	window.$ = function () {
// 		// 向外暴露一個全局函式
// 		return {
// 			test: test,
// 		};
// 	};
// })();

// $().test(); // 1. $是一個函數名 2. $執行後返回的是一個物件

// --------------------------------------------

// function Person(color) {
// 	console.log(this)
// 	this.color = color
// 	this.getColor = function () {
// 		console.log(this)
// 		return this.color
// 	}
// 	this.setColor = function (color) {
// 		console.log(this)
// 		this.color = color
// 	}
// }

// Person('red') // this = window

// let p = new Person('yellow') // this = p

// p.getColor() // this = p

// let obj = {}
// p.setColor.call(obj, 'black') // this = obj

// let test = p.setColor
// test() // test = window

// function fun1() {
// 	function fun2() {
// 		console.log(this)
// 	}
// 	fun2() // this = window
// }
// fun1()

// --------------------------------------------
// console.log(typeof Date.prototype)
// console.log(Date.prototype)
// function Fun() {}

// console.log(fun.prototype)

// console.log(Date.prototype.constructor === Date)
// console.log(Fun.prototype.constructor === Fun)

// 給原型物件添加屬性(通常是方法) === > 實俐物件可以使用
// Fun.prototype.test = function () {
// 	console.log('test()')
// }

// let fun = new Fun()

// fun.test()

function Fn() {}
console.log(Fn.prototype)

let fn = new Fn()
console.log(fn.__proto__)

console.log(Fn.prototype === fn.__proto__)
