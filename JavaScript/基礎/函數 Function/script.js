// * 函數
function name() {
    something();
    return something;
}

// * 簡易加法
function sum(num1, num2) {
    return num1 + num2;
}

// * 等差數列的和
function getSum(max) {
    let sum = 0;
    for(let i = 1; i <= max; ++i) {
        sum = sum + i;
    }
    return sum;
}

// * 等差數列的和(公式)
function getSum2(max) {
    return ( 1 + max ) * max / 2 ;
}

// * 利用回傳值
let result = getSum(10) * getSum2(10); // 55 * 55 = 3025

// ? 函數表達式(重要)
let nameF1 = function() {
    something();
    return something;
};

// ? 箭頭函數(技巧)
let nameF2 = () => something;

// ? 箭頭函數(技巧)
let nameF3 = () => {
    something();
    return something;
};

// ? 簡易加法
let sumF = (num1, num2) => {
    return num1 + num2;
};

// ? 簡易減法
let lessF = (num1, num2) => num1 - num2;

// ? 等差數列的和
let getSumF = (max) => ( 1 + max ) * max / 2 ;

// ? 函數賦值
let getSumF2 = getSumF;

// console.log());