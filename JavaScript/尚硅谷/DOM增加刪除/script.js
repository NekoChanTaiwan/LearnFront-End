// 點擊函數
let click = (str, func) => {
    str.onclick = func;
}

// 刪除函數
let deleteA = function() {
    let tr = this.parentNode.parentNode; // 獲取 a標籤 的 tr標籤
    let name = tr.children[0].innerHTML; // 獲取 tr標籤 裡的第一個子元素
    let check = confirm(`確定要刪除 ${name} 嗎?`); // 確認提示字框
    if (check) {
        tr.parentNode.removeChild(tr); // 判斷是否刪除
    }
    return false; // 取消超連結的默認行為
}

window.onload = () => {
    // 設定 a標籤 新增 點擊函數 & 刪除函數
    let a = document.getElementsByTagName("a");
    for (let i = 0; i < a.length; i++) {
        click(a[i], deleteA);
    }

    // 新增功能
    click(document.getElementById("addEmpButton"), () => {
        // 獲取 input值
        let name = document.getElementById("empName").value;
        let email = document.getElementById("email").value;
        let salary = document.getElementById("salary").value;

        // 創建新的 tr元素
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${name}</td>
                        <td>${email}</td>
                        <td>${salary}</td>
                        <td><a href="javascript:;">Delete</a></td>`;

        // 新增 tr元素 至 employeeTable 裡的 tbody
        let empTab = document.getElementById("employeeTable").getElementsByTagName("tbody")[0];
        empTab.appendChild(tr);

        // 將新增的 tr元素 裡的 a標籤 新增 點擊函數 & 刪除函數
        click(tr.getElementsByTagName("a")[0], deleteA);
    });
}