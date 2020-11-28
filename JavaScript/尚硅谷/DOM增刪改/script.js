let click = (idStr, func) => {
    const btn = document.getElementById(idStr);
    btn.onclick = func;
}

window.onload = function() {
    const city = document.querySelector("#city");

    // TODO: 創建一個"台南"節點,添加到#city下
    click("btn01", () => {
        // <li>台南</li>
        let li = document.createElement("li");
        let text = document.createTextNode("台南");
        li.appendChild(text);
        city.appendChild(li);
    });
    // TODO: 將"台南"節點插入到#xb前面
    click("btn02", () => {
        
    });

    // TODO: 使用"台南"節點替換#xb節點
    // TODO: 刪除#xb節點
    // TODO: 讀取#city內的HTML代碼
    // TODO: 設置#xb內的HTML代碼
};