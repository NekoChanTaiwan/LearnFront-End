/*
?   寫一個isEmpty(obj)函數，當對像沒有屬性的時候返回true，否則返回false。
?   應該像這樣：
*/
/*
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
*/

// *  解答：

function isEmpty(obj) {
    for (key in obj) {
        return false;
    }
    return true;
}