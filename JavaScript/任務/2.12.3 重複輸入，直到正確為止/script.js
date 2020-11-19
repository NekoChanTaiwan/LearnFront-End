/*
?   編寫一個提示用戶輸入大於100的數字的循環。如果用戶輸入其他數值——請他重新輸入。
?   循環一直在請求一個數字，直到用戶輸入了一個大於100的數字、取消輸入或輸入了一個空行為止。
?   在這我們假設用戶只會輸入數字。在本題目中，不需要對非數值輸入進行特殊處理。
*/

// *  解答：
/*
outer:while(1) {
    let inputNum = +prompt('type a number > 100', 0);
    if (inputNum > 100 || inputNum == null) break outer;
}*/

let num;

do {
    num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);