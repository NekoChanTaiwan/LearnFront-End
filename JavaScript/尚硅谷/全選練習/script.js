"use strict";
/**
 * * click function
 * @param {*} btnIdStr 按鈕 Id 字符串
 * @param {*} func 函數
 */
const click = (btnIdStr, func) => {
    const btn = document.getElementById(btnIdStr);
    btn.onclick = func;
};

window.onload = () => {
    // * 全局變量
    const items = document.getElementsByName("items");
    const itemsLength = items.length;

    // TODO: 1.#checkedAllBtn 全選 checkbox
    click("checkedAllBtn", () => {
        for (let i = 0; i < itemsLength; i++) {
            items[i].checked = true;
        }
    });
    // TODO: 2.#checkedNoBtn 取消全選
    click("checkedNoBtn", () => {
        for (let i = 0; i < itemsLength; i++) {
            items[i].checked = false;
        }
    });
    // TODO: 3.#checkedRevBtn 反選
    click("checkedRevBtn", () => {
        for(let i = 0; i < itemsLength; i++) {
            if (items[i].checked == true) {
                items[i].checked = false;
            } else {
                items[i].checked = true;
            }
        }
    });
    // TODO: 4.#sendBtn
    click("sendBtn", () => {
        let showMessage = "已提交：";
        for (let i = 0; i < itemsLength; i++) {
            if (items[i].checked == true) {
                if (i > 0) {
                    showMessage += `、${items[i].value}`;
                } else {
                    showMessage += items[i].value;
                }
            }
        }
        console.log(showMessage);
        alert(showMessage);
    });
    // TODO: 5.#checkedAllBox
    // TODO: 6.items
};