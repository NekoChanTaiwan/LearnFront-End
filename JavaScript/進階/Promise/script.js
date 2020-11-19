let X = false;

let promise = new Promise(function(resolve, reject) {
    if (X) {
        resolve("Promise 完成");
    } else {
        reject("Promise 出錯");
    }
});

promise
// 接收 resolve值 和 reject值
// .then(resolve => console.log(resolve))
// .then(null, reject => console.log(reject));
// .catch(reject => console.log(reject));

// 捕捉內部值
// .then(result => console.log(result))
// .catch(error => console.log(error));