"use strict";

window.onload = () => {
    // * 變量
    const items = document.getElementsByName("items");
    const itemsLength = items.length;
    const checkedAllBox = document.getElementById("checkedAllBox");

    // * 函數
    // 獲取 按鈕
    /**
     * @param {*} btnIdStr 按鈕 Id 字符串
     * @param {*} func 函數
     */
    const click = (btnIdStr, func) => {
        const btn = document.getElementById(btnIdStr);
        btn.onclick = func;
    };

    // 檢查目前 items
    const checkItems = () => {
        checkedAllBox.checked = true;
        // console.log('checking...')
        for (let i = 0; i < itemsLength; i++) {
            if (!items[i].checked) { // 利用循環判斷，如果有一個沒勾
                checkedAllBox.checked = false;
                break; // 條件一滿足後就已經出現結果了，不必要繼續循環
            }
        }
    }

    // TODO: 1.#checkedAllBtn 全選
    click("checkedAllBtn", () => {
        for (let i = 0; i < itemsLength; i++) {
            items[i].checked = true;
        }
        checkedAllBox.checked = true;
    });

    // TODO: 2.#checkedNoBtn 全不選
    click("checkedNoBtn", () => {
        for (let i = 0; i < itemsLength; i++) {
            items[i].checked = false;
        }
        checkedAllBox.checked = false;
    });

    // TODO: 3.#checkedRevBtn 反選
    click("checkedRevBtn", () => {
        for(let i = 0; i < itemsLength; i++) {
            items[i].checked = !items[i].checked;
        }
        checkItems();
    });

    // TODO: 4.#sendBtn 提交
    click("sendBtn", () => {
        let array = [];
        for (let i = 0; i < itemsLength; i++) {
            if (items[i].checked) {
                array.push(items[i].value);
            }
        }
        if (array.length > 0) {
            console.log(`已提交：${array.join("、")}。`);
            alert(`已提交：${array.join("、")}。`);
        } else {
            console.log("請選擇你的老婆");
            alert("請選擇你的老婆");
        }
    });

    // TODO: 5.#checkedAllBox 全選/全不選
    click("checkedAllBox", () => {
        for (let i = 0; i < itemsLength; i++) {
            items[i].checked = checkedAllBox.checked;
        }
    });

    // TODO: 6.items 偵測 全選/全不選
    for (let i = 0; i < itemsLength; i++) {
        items[i].onclick = () => {
            checkItems();
        }
    }
};