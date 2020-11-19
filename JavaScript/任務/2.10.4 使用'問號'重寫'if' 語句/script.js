/*
?   使用條件運算符'?'重寫下面的if語句：
*/

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

// *  解答：

let result = (a + b < 4) ? "Below": "Over";