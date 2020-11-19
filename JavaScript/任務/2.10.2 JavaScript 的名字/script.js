/*
?   使用if..else結構，實現提問“What is the “official” name of JavaScript?”的代碼
?   如果訪問者輸入了“ECMAScript”，輸出就提示“Right!”，否則— 輸出：“Didn't know? ECMAScript!”
*/

// *  解答：

let input = prompt("What is the official name of the JavaScript?", "");
if (input == "ECMAScript") {
  message = "Right!";
} else {
  message = "Didn't know ? ECMAScript!";
}
alert(message);