/*
?   創建一個multiplyNumeric(obj)函數，把obj所有的數值屬性都乘以2。
*/

// *  解答：

function multiplyNumeric(obj) {
    for (let key in obj) {
        // if (!isNaN(obj[key])) { // * 當key值不會等於NaN時
        if (typeof obj[key] === "number") {// * 當類型等於number時
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

for (let key in menu) {
    alert(menu[key]);
}