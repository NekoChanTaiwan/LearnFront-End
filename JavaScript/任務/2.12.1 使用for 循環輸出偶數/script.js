/*
?   使用for循環輸出從2到10的偶數。
*/

// *  解答：

// * 1
for (let i = 2; i <= 10; i++) {
    if (i % 2) continue;
    alert(i);
}

// * 2
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) alert (i);
}