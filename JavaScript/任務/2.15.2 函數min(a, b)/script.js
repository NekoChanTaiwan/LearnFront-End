/*
?   寫一個返回數字a和b中較小的那個數字的函數min(a,b)。
*/

// ? 例如：
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

// *  解答：

// * ?
function min(a, b) {
    return a > b ? b : a;
}

// * if
function min(a, b) {
    if (a > b) {
        return b;
    }else {
        return a;
    }
}