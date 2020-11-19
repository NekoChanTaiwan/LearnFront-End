/*
?   創建一個有三個方法的calculator對象：
?    - read() 提示輸入兩個值，並將其保存為對象屬性。
?    - sum() 返回保存的值的和。
?    - mul() 將保存的值相乘並返回計算結果。
*/

// *  解答：


let calculator = {
    sum() {
        return this.a + this.b;
    },
    mul() {
      return this.a * this.b;
    },

    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );