/*
?   有一個可以上下移動的ladder對象：
*/

// *  解答：


let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() {
        alert( this.step );
        return this;
    }
};

ladder.up().up().down().up().down().showStep(); // 1