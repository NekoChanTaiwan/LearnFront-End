/*
?   我們有一個保存著團隊成員工資的對象：
*/

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
/*
?   寫一段代碼求出我們的工資總和，將計算結果保存到變量sum。從所給的信息來看，結果應該是390。
?   如果salaries是一個空對象，那結果就為0。
*/

// *  解答：

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}

alert(sum);