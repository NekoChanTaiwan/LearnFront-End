function sumInput() {
    let array = [0];
    let x = prompt("A number please", 0);
    while(true) {
        if (x === null || +x === NaN || x === " " || x === "") break;
        array[0] += +x;
        x = prompt("A number please", 0);
    }
    return alert(array[0]);
}

sumInput();