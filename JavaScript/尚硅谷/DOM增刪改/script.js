function click(idStr, func) {
    const btn = document.getElementById(idStr);
    btn.onclick = func;
}

window.onload = function() {
    const city = document.querySelector("#city");

    //創建一個"台南"節點,添加到#city下
    click("btn01", () => {
        // <li>台南</li>
        let li = document.createElement("li");
        let text = document.createTextNode("台南");
        li.appendChild(text);
        city.appendChild(li);
    });
    //將"台南"節點插入到#xb前面
    //使用"台南"節點替換#xb節點
    //刪除#xb節點
    //讀取#city內的HTML代碼
    //設置#xb內的HTML代碼
};