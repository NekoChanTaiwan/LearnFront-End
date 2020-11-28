let click = (idStr, func) => {
    const btn = document.getElementById(idStr);
    btn.onclick = func;
}

window.onload = function() {
    const city = document.querySelector("#city");
    const xb = document.querySelector("#xb");

    // TODO: 創建一個"台南"節點,添加到#city下
    click("btn01", () => {
        let li = document.createElement("li");
        let text = document.createTextNode("台南");
        li.appendChild(text);

        city.appendChild(li);
    });
    // TODO: 將"台南"節點插入到#xb前面
    click("btn02", () => {
        let li = document.createElement("li");
        let text = document.createTextNode("台南");
        li.appendChild(text);

        // city.insertBefore(li, xb);
        xb.parendNode.inserBefor(li, xb);
    });

    // TODO: 使用"台南"節點替換#xb節點
    click("btn03", () => {
        let li = document.createElement("li");
        let text = document.createTextNode("台南");
        li.appendChild(text);

        // city.replaceChild(li, xb);
        xb.parentNode.appendChild(li, xb);
    });
    // TODO: 刪除#xb節點
    click("btn04", () => {
        // city.removeChild(xb);
        xb.parentNode.removeChild(xb);
    });
    // TODO: 讀取#city內的HTML代碼
    click("btn05", () => {
        console.log(city.innerHTML);
    });
    // TODO: 設置#xb內的HTML代碼
    click("btn06", () => {
        xb.innerHTML = "東京";
    });

    click("btn07", () => {
        let li = document.createElement("li");
        // let text = document.createTextNode("台南");
        li.innerHTML = "台南";
        city.appendChild(li);
    });
};