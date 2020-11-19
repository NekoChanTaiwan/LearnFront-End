// * 獲取DOM
function showAlert() {
    let message = "showAlert";
    console.log(`function showAlert`)
    alert(`Hello i'm ${message} function.`);
}

let title = document.getElementById("title");
title.addEventListener("click", showAlert);

let btn = document.getElementById("btn");
btn.innerHTML = "Button [ Id 選擇 ]"
btn.addEventListener("click", () => title.innerHTML = "You Click the button.");

let contentElement = document.getElementsByClassName("content");
console.log(contentElement);

let pElement = contentElement[0];
pElement.innerHTML = "content 1 [ Class 選擇 ]";

let pElements = document.getElementsByTagName("p");
console.log(pElements);

let tag = pElements[0];
tag.innerHTML = 'text [ Tag 選擇 ]';

let inputs = document.getElementsByName("search");
console.log(inputs[0]);