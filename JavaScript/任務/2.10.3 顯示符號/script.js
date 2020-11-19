/*
?   使用if..else語句，編寫代碼實現通過prompt獲取一個數字並用alert顯示結果：
?    - 如果這個數字大於0，就顯示1，
?    - 如果這個數字小於0，就顯示-1，
?    - 如果這個數字等於0，就顯示0。
?   在這個任務中，我們假設輸入永遠是一個數字。
*/

// *  解答：

let inputNum = +prompt("Type a number", "0");
if (inputNum > 0) {
  alert(1);
} else if (inputNum < 0) {
  alert(-1);
} else if (inputNum == 0) {
  alert(0);
}