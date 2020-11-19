/*
?   下面的腳本會輸出什麼？
*/

let name = "Ilya";

alert( `hello ${1}` ); // ?
// *    hello 1

alert( `hello ${"name"}` ); // ?
// *    hello name

alert( `hello ${name}` ); // ?
// *    hello Ilya

// ! 注意：不要忘記前面的 string(字串) "hello"。