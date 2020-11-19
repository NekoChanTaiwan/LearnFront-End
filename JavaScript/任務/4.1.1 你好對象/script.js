/*
?   按下面的要求寫代碼，一條對應一行代碼：
?   1. 創建一個空的對象user。
?   2. 為這個對象增加一個屬性，鍵是name，值是John。
?   3. 再增加一個屬性，鍵是surname，值是Smith。
?   4. 把鍵為name的屬性的值改成Pete。
?   5. 刪除這個對像中鍵為name的屬性。
*/

// *  解答：
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;