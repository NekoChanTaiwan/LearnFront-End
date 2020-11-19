// * 物件
let object1 = new Object();             // ? 構造函數   語法
let object2 = {};                       // ? 字面量     語法

// * 建立 構造函數語法 物件
let point = new Object();

point.x = 3;                           // * 物件屬性
point.y = 4;
point.getPosition = function() {       // ! 不能使用箭頭符號
    console.log(this.x+","+this.y);    // * 物件函數
};

// * 使用物件
// point.getPosition()

// * 建立 字面量語法 物件
let player = {
    name: "Aaron",
    hp: 100,
    fight() {
        this.hp -= 2;
    },
    rest() {
        this.hp++;
    },
    report() {
        console.log(this.hp);
    }
}

// * 使用物件
// player.fight();
// player.rest();
// player.report();

// ? 建構式                                             // ? 利用建構式建立物件（可以防止寫重複的物件）
function Player(userName = "Anonymous", HP = 100) {     // * 建構式函數（習慣：首字大寫），"=" 預設值。
    this.name = userName;
    this.hp = HP;
    this.fight = function() {
        this.hp -= 2;
    };
    this.rest = function() {
        this.hp++;
    };
    this.report = function() {
        console.log(this.name+": "+this.hp);
    };
}

// ? 使用建構式
// let player1 = new Player("NekoChan", 80);
// player1.fight();
// player1.rest();
// player1.report();

// let player2 = new Player("Loli", 10);
// player2.fight();
// player2.rest();
// player2.report();

// let player3 = new Player();
// player3.fight();
// player3.rest();
// player3.report();