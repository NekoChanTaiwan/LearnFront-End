/*
?   實現使用prompt進行登陸校驗的代碼。
?   如果訪問者輸入"Admin"，那麼使用prompt引導獲取密碼，如果輸入的用戶名為空或者按下了Esc鍵——顯示“Canceled”，如果是其他字符串——顯示“I don't know you”。

?   密碼的校驗規則如下：
?   如果輸入的是“TheMaster”，顯示“Welcome!”，
?   其他字符串—— 顯示“Wrong password”，
?   空字符串或取消了輸入，顯示“Canceled.”。
*/

// *  解答：

const userName = prompt("Who's there?");

if (userName == "Admin"){

    const pass = prompt("Password?");

    if (pass == "The Master") {
        alert("Welcome!");
    } else if (pass == null || password == "") {
        alert("Canceled");
    } else {
        alert("Wrong password");
    }

}else if (userName == null || userName == ""){
    alert("Canceled");
} else {
    alert("I don't know you");
}