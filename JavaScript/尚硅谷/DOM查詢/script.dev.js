"use strict";

/**
 * * click function
 * @param idStr button ID(string)
 * @param fun 自訂 function
*/
function click(idStr, fun) {
  var btn = document.getElementById(idStr);
  btn.onclick = fun;
}

;

window.onload = function () {
  // TODO: 查找 #xb 節點
  // const btn01 = document.getElementById("btn01");
  // btn01.onclick = () => {
  //     console.log(document.getElementById("xb").innerHTML);
  // };
  click("btn01", function () {
    console.log(document.getElementById("xb"));
  }); // TODO: 查找所有 li 節點
  // const btn02 = document.getElementById("btn02");
  // btn02.onclick = () => {
  //     const lis = document.getElementsByTagName("li");
  //     for (let i = 0; i < lis.length; i++) {
  //         console.log(lis[i]);
  //     }
  // };

  click("btn02", function () {
    var lis = document.getElementsByTagName("li");
    var lisLength = lis.length;

    for (var i = 0; i < lisLength; i++) {
      console.log(lis[i]);
    }
  }); // TODO: 查找 name=gender 的所有節點
  // const btn03 = document.getElementById("btn03");
  // btn03.onclick = () => {
  //     const inputs = document.getElementsByName("gender");
  //     for (let i = 0; i < inputs.length; i++) {
  //         console.log(inputs[i].value);
  //     }
  // };

  click("btn03", function () {
    var inputs = document.getElementsByName("gender");
    var inputsLength = inputs.length;

    for (var i = 0; i < inputsLength; i++) {
      console.log(inputs[i].value);
    }
  }); // TODO: 查找 #city 下所有 li 節點
  // const btn04 = document.getElementById("btn04");
  // btn04.onclick = () => {
  //     const city = document.getElementById("city");
  //     const lis = city.getElementsByTagName("li");
  //     const lisLength = lis.length;
  //     for (let i = 0; i < lisLength; i++) {
  //         console.log(lis[i].innerHTML);
  //     }
  // };

  click("btn04", function () {
    var lis = document.getElementById("city").getElementsByTagName("li");
    var lisLength = lis.length;

    for (var i = 0; i < lisLength; i++) {
      console.log(lis[i]);
    }
  }); // TODO: 返回 #city 的所有子節點
  // const btn05 = document.getElementById("btn05");
  // btn05.onclick = () => {
  // 	const city = document.getElementById("city");
  // 	// const cityNodes = city.childNodes;
  // 	const cityChildren = city.children;
  // 	// const cityNodesLength = cityNodes.length;
  // 	const cityChildrenLength = cityChildren.length;
  // 	for (let i = 0; i < cityChildrenLength; i++) {
  // 		console.log(cityChildren[i]);
  // 	}
  // };

  click("btn05", function () {
    // const city = document.getElementById("city");
    var cityChildren = document.getElementById("city").children;
    var cityChildrenLength = cityChildren.length;

    for (var i = 0; i < cityChildrenLength; i++) {
      console.log(cityChildren[i]);
    }
  }); // TODO: 返回 #phone 的第一個子節點
  // const btn06 = document.getElementById("btn06");
  // btn06.onclick = () => {
  // 	const phone = document.getElementById("phone");
  // 	console.log(phone.firstChild);
  // };

  click("btn06", function () {
    // const phone = document.getElementById("phone");
    // console.log(phone.firstChild);
    console.log(document.getElementById("phone").firstChild);
  }); // TODO: 返回 #xb 的父節點

  click("btn07", function () {
    // const xb = document.getElementById("xb");
    // console.log(xb.parentNode);
    console.log(document.getElementById("xb").parentNode);
  }); // TODO: 返回 #android 的前一個兄弟節點

  click("btn08", function () {
    // const android = document.getElementById("android");
    // console.log(android.previousSibling);
    console.log(document.getElementById("android").previousSibling);
  }); // TODO: 讀取 #username 的 value 屬性值

  click("btn09", function () {
    console.log(document.getElementById("username").value);
  }); // TODO: 設置 #username 的 value 屬性值

  click("btn10", function () {
    var username = document.getElementById("username");
    username.value = "HelloWorld";
    console.log(username.value);
  }); // TODO: 返回 #xb 文本節點的文本值

  click("btn11", function () {
    var xb = document.getElementById("xb");
    console.log(xb.firstChild.nodeValue);
  });
};