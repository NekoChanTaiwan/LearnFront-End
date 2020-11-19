/*
?   重寫代碼，在保證不改變其行為的情況下，將for循環更改為while（輸出應保持不變）。
*/

for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
}

// *  解答：
let i = 0;
while (i < 3) {
    alert(`number ${i}`)
    i++;
}