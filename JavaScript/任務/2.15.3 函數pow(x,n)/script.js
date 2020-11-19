/*
?   寫一個函數pow(x,n)，返回x的n次方。換句話說，將x與自身相乘n次，返回最終結果。
?   創建一個web頁面，提示輸入x和n，然後返回pow(x,n)的運算結果。
*/

// *  解答：

function calcPow(x, n) {
    let result = x

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = +prompt("Type x");
let n = +prompt("Type n");

if (n < 1) {
    alert(`錯誤：${n}小於 1`);
} else {
    alert( calcPow(x, n) );
}