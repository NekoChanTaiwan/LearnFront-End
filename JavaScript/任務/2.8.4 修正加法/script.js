/*
?   這裡有一段代碼，要求用戶輸入兩個數字並顯示它們的總和。
?   它的運行結果不正確。下面例子中的輸出是12（對於默認的prompt的值）。
?   為什麼會這樣？修正它。結果應該是3。
*/

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
alert(a + b); // 12

/*
* 原因：prompt 傳入的值會等於字串，必須使用 + 或 Number() 轉換類型。
*/

// * 修正方法 1 +prompt
let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);
alert(a + b);

// * 修正方法 2 Number(prompt())
let a = Number(prompt("First number?", 1));
let b = Number(prompt("Second number?", 2));
alert(a + b);

// * 修正方法 3 +a, +b
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
alert(+a + +b);

// * 修正方法 4 Number(a), Number(b)
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
alert(Number(a) + Number(b));