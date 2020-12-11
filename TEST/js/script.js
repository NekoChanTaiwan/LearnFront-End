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

// function Fn() {}
// console.log(Fn.prototype)

// let fn = new Fn()
// console.log(fn.__proto__)

// console.log(Fn.prototype === fn.__proto__)

// --------------------------------------------

// console.log(Object.prototype)

// function Fn() {
// 	this.test1 = function () {
// 		console.log('test()')
// 	}
// }

// console.log(Fn.prototype)
// console.log(Fn.prototype instanceof Object)

// Fn.prototype.test2 = function () {
// 	console.log('test2()')
// }

// let fn = new Fn()

// console.log(fn.__proto__)

// fn.test1()
// fn.test2()

// console.log(fn.toString())
// fn.test3()

// console.log(Function.prototype instanceof Object)

// console.log(Function.__proto__ === Function.prototype)

// console.log(Function.prototype.__proto__ === Object.prototype)

// console.log(
// 	Function.prototype.__proto__.__proto__ === Object.prototype.__proto__
// )

// console.log(Function instanceof Object)

// console.log(typeof Object === typeof Function)

// console.log(Object.prototype.__proto__)

// let a = new String()
// let b = new Number()
// let c = new Object()

// console.log(String.prototype === a.__proto__)

// console.log(a.__proto__.__proto__ === b.__proto__.__proto__)
// console.log(a.__proto__.__proto__ === c.__proto__)

// --------------------------------------------

// var a = 3
// function fn() {
// 	console.log(a) // undefined (變量提升)
// 	var a = 4
// }
// fn()

// fn2() // 可調用 (函式提升)

// console.log(b) // undefined (變量提升)
// var b = 3

// function fn2() {
// 	console.log('fn2()')
// }

// --------------------------------------------

// console.log(a1)
// a2()
// console.log(this)
// var a1 = 3
// function a2() {
//     console.log('a2()')
// }

// function fn(a1) {
// 	console.log(a1) // 2
// 	console.log(a2) // undefined
// 	a3() // a3()
// 	console.log(this) // window
// 	console.log(arguments) // 2, 3

// 	var a2 = 3
// 	function a3() {
// 		console.log('fun()')
// 	}
// }

// fn(2, 3)

// --------------------------------------------

// var a = 10
// var bar = function (x) {
// 	var b = 5
// 	foo(x + b) // 15
// }
// var foo = function (y) {
// 	var c = 5
// 	console.log(a + c + y)
// }
// bar(10)

// --------------------------------------------

// 面試題

// console.log(`global begin: ${i}`) // undefined
// var i = 1
// foo(1)
// function foo(i) {
// 	if (i == 4) {
// 		return
// 	}
// 	console.log(`foo() begin: ${i}`)
// 	foo(i + 1) // 遞規調用：在函式內部調用幾
// 	console.log(`foo() end: ${i}`)
// }
// console.log(`global end: ${i}`)

// 1. 輸出順序：
// global begin: undefined
// foo() begin: 1
// foo() begin: 2
// foo() begin: 3
// foo() end: 3
// foo() end: 2
// foo() end: 1
// global end: 1

// 2. 整個過程執行了幾次上下文？ 5次

// 測試題1：因為函式提升是最後的，所以答案是 function
// function a() {} // 函式提升(2)
// var a // 變量提升(1)
// console.log(typeof a) // function

// 測試題2：
// if (!(b in window)) {
// 	var b = 1
// }
// console.log(b) // undefined

// 測試題3：
// var c = 1
// function c(c) {
// 	console.log(c)
// }
// c(2)
// 上下文預處理後：
// var c
// function c(c) {
// 	console.log(c)
// }
// c = 1
// c(2) // 報錯，因為 c 不是函式

// --------------------------------------------

// var a = 10,
// 	b = 20
// function fn(x) {
// 	var a = 100
// 	c = 300
// 	console.log(`fn()`, a, b, c, x)
// 	function bar(x) {
// 		var a = 1000
// 		d = 400
// 		console.log(`bar()`, a, b, c, d, x)
// 	}
// 	bar(100)
// 	bar(200)
// }
// fn(10)

// --------------------------------------------

// var a = 1
// function fn1() {
// 	var b = 2
// 	function fn2() {
// 		var c = 3
// 		console.log(c)
// 		console.log(b)
// 		console.log(a)
// 		console.log(d)
// 	}
// 	fn2()
// }
// fn1()

// --------------------------------------------

// var x = 10
// function fn() {
// 	console.log(x)
// }

// function show(f) {
// 	var x = 20
// 	f()
// }
// show(fn) // 20

// var fn = function () {
// 	console.log(fn)
// }
// fn()
// function () {
// 	console.log(fn)
// }

// var obj = {
// 	fn2: function () {
// 		console.log(fn2)
// 	},
// }
// obj.fn2() // 報錯 fn2 不是變量

// --------------------------------------------

// onload = () => {
// let btn = document.querySelectorAll('button')
// 方法一
// for (let i = 0, Length = btn.length; i < Length; i++) {
// 	btn[i].onclick = () => {
// 		alert(`第${i + 1}個`)
// 	}
// }
// 方法二（閉包）
// for (let i = 0, Length = btn.length; i < Length; i++) {
// 	;(function (i) {
// 		btn[i].onclick = () => {
// 			alert(`第${i + 1}個`)
// 		}
// 	})(i)
// }
// }

// --------------------------------------------

// function fn1() {
// 	let a = 2
// 	function f2() {
// 		console.log(a)
// 	}
// }
// fn1()

// 1. 將函式作為實參傳遞給另一個函式調用
// function fn1() {
// 	let a = 2
// 	function fn2() {
// 		a++
// 		console.log(a)
// 	}
// 	return fn2
// }
// let f = fn1()
// f() // 3
// f() // 4

// 2. 將函式做為實參傳遞給另一個函式
// function showDelay(msg, time) {
// 	setTimeout(function () {
// 		alert(msg)
// 	}, time)
// }

// showDelay('Hello World', 2000)

// --------------------------------------------

// 外部 JS
// function myModule() {
// 	let msg = 'Hello World'
// 	function UpperCase() {
// 		console.log(`UpperCase() ${msg.toUpperCase()}`)
// 	}
// 	function LowerCase() {
// 		console.log(`LowerCase() ${msg.toLowerCase()}`)
// 	}
// 	return {
// 		Uppercase: UpperCase,
// 		LowerCase: LowerCase,
// 	}
// }
// 使用外部 JS
// let fn = myModule()
// fn.UpperCase()
// fn.LowerCase()

// 外部 JS
// ;(() => {
// 	let msg = 'Hello World'
// 	function UpperCase() {
// 		console.log(`UpperCase() ${msg.toUpperCase()}`)
// 	}
// 	function LowerCase() {
// 		console.log(`LowerCase() ${msg.toLowerCase()}`)
// 	}
// 	window.myModule = {
// 		Uppercase: UpperCase,
// 		LowerCase: LowerCase,
// 	}
// })()
// 使用外部 JS
// myModule.UpperCase()
// myModule.LowerCase()

// --------------------------------------------

// var name = 'The Window'
// let object = {
// 	name: 'My Object',
// 	getName: function () {
// 		return function () {
// 			return this.name
// 		}
// 	},
// }
// console.log(object.getName()()) // 'The Window' (函式裡的函式 this = window)

// let name2 = 'The Window'
// let object2 = {
// 	name2: 'My Object',
// 	getName: function () {
// 		let that = this
// 		return function () {
// 			return that.name2 // 使用閉包
// 		}
// 	},
// }
// console.log(object2.getName()()) // 'My Object' (that = object 的 this)

// --------------------------------------------

// function fun(n, o) {
// 	console.log(o)
// 	return {
// 		fun: function (n) {
// 			return fun(m, n)
// 		},
// 	}
// }

// let a = fun(0)
// a.fun(1)
// a.fun(2)
// a.fun(3)
// undefined, 0, 0, 0

// let b = fun(0).fun(1).fun(2).fun(3)
// undefined, 0, 1, 2

// let c = fun(0).fun(1)
// c.fun(2)
// c.fun(3)
// undefined, 0, 1, 1

// --------------------------------------------

// 方法一：Object構造函式模式
// 套數：先創建空 Object 物件，在動態添加屬性/方法
// 適用場景：起始時不確定物件內部數據
// 缺點：語句太多
// let p = new Object()
// p.name = 'Tom'
// p.age = 12
// p.setName = function (name) {
// 	this.name = name
// }

// 方法二：Object字面量模式
// 套路：使用{}創建物件，同時指定屬性/方法
// 適用場景：起始時物件物件內部數據是確定的
// 缺點：如果創建多個物件，有重複程式碼
// let p = {
// 	name: 'Tom',
// 	age: 12,
// 	setName: function (name) {
// 		this.name = name
// 	},
// }

// p.setName('jack')
// console.log(p.name)
// console.log(p.age)
// console.log(p)

// 方法三：工廠模式（不常用）
// 套路：通過工廠函是創建物件並返回
// 適用場景：需要創建多個物件
// 缺點：物件沒有一個具體的類型，都是 Object 類型
// function createPerson(name, age) {
// 	let obj = {
// 		name: name,
// 		age: age,
// 		setName: function () {
// 			this.name = name
// 		},
// 	}
// 	return obj // 工廠函式的特點
// }

// let p1 = createPerson('Tom', 12)
// let p2 = createPerson('Bob', 13)
// console.log(p1)
// console.log(p2)

// 方法四：字定義構造函式模式
// 套路：自定義構造函式，通過 new 創建物件
// 適用場景：需要創建多個類型確定的物件
// 缺點：每個物件都有相同的數據，浪費記憶體
// function Person(name, age) {
// 	this.name = name
// 	this.age = age
// 	this.setName = function (name) {
// 		this.name = name
// 	}
// }

// function food(name, price) {
// 	this.name = name
// 	this.price = price
// }

// let p1 = new Person('Tom', 12)
// p1.setName('Jack')
// console.log(p1.name, p1.age)

// let cake = new food('Cake', 300)
// console.log(cake.name, cake.price)

// console.log(cake instanceof Person)
// console.log(p1 instanceof food)

// let p2 = new Person('Tony', 23)
// console.log(p1, p2)

// 方法五：構造函式＋原型的組合模式
// 套路：自定義構造函式，屬性在函式中初始化，方法添加在原型上
// 適用場景：需要創建多個類型的物件，含有方法。
// 好處：比構造函式還要省更多記憶體，因為每個實例的方法都在原型裡
// function Person(name, age) {
// 	this.name = name
// 	this.age = age
// }
// Person.prototype.setName = function (name) {
// 	this.name = name
// }

// let p1 = new Person('D.VA', 18)
// let p2 = new Person('Tracer', 22)

// console.log(p1, p2)

// --------------------------------------------

// 原型鏈繼承
// 父
// function Supper() {
// 	this.supProp = 'Supper property'
// }
// Supper.prototype.showSupperProp = function () {
// 	console.log(this.supProp)
// }
// 子
// function Sub() {
// 	this.subProp = 'Sub property'
// }
// Sub.prototype = new Supper() // 將子類型的原型成為父類型的實例
// Sub.prototype.constructor = Sub // 讓子類型的原型constructor指向子類型
// Sub.prototype.showSubProp = function () {
// 	console.log(this.subProp)
// }

// let sub = new Sub()
// sub.showSupperProp()
// sub.toString()

// console.log(sub.constructor)

// 借用構造函式繼承
// function Person(name, age) {
// 	;(this.name = name), (this.age = age)
// }
// function Student(name, age, price) {
// 	Person.call(this, name, age) // 相當於：this.Person(name, age)
// 	this.price = price
// }

// let p = new Student('D.VA', 18, 100)
// console.log(p)
// console.log(p.name, p.age, p.price)

// 方法三：組合繼承
// function Person(name, age) {
// 	;(this.name = name), (this.age = age)
// }
// Person.prototype.setName = function (name) {
// 	this.name = name
// }
// function Student(name, age, price) {
// 	Person.call(this, name, age) // 為了得到屬性
// 	this.price = price
// }
// Student.prototype = new Person() // 能看到父類型的方法
// Student.prototype.constructor = Student // 修正
// Student.prototype.setPrice = function (price) {
// 	this.price = price
// }

// let p = new Student('D.VA', 18, 100)
// console.log(p.name, p.age, p.price)
// p.setName('Tracer')
// p.setPrice(50)
// console.log(p.name, p.age, p.price)

// --------------------------------------------

// onload = () => {
// 	document.querySelector('button').onclick = () => {
// 		let start = Date.now()
// 		console.log('啟動定時器前...')
// 		setTimeout(() => {
// 			console.log('定時器執行了', Date.now() - start)
// 		}, 200)
// 		console.log('啟動定時器後...')

// 		// for (let i = 0; i < 1000000000; i++) {}
// 	}
// }

// --------------------------------------------
