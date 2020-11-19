/*
?   如果參數age大於18，那麼下面的函數返回true。
?   否則它將會要求進行確認，並返回確認結果：
*/

function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Do you have your parents permission to access this page?');
    }
}

// *  解答：

function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}