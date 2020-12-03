onload = () => {
	// span選單
	let menuSpan = document.querySelectorAll(".menuSpan");
	// 當前開啟的div
	let openDiv = menuSpan[0].parentNode;

	for (let i = 0; i < menuSpan.length; i++) {
		// 綁定onclick
		menuSpan[i].onclick = function () {
			// 獲取 menuSpan 的 div
			let parentDiv = this.parentNode;

			toggleMenu(parentDiv);

			// 當 parentDiv 和 openDiv 不等於 && openDiv 沒有 collapsed;
			if (parentDiv !== openDiv && !hasClass(openDiv, "collapsed")) {
				// 把當前div給合起來
				// addClass(openDiv, "collapsed");
				// 為了統一處理ˇ動畫效果，此處toggleClass()沒有移除功能
				// toggleClass(openDiv, "collapsed");
				toggleMenu(openDiv);
			}

			// 更新當前開啟div
			openDiv = parentDiv;
		};
	}
	// 切換選單的摺疊顯示狀
	function toggleMenu(obj) {
		// 在切換之前獲取div高度
		let beginHeight = obj.offsetHeight;

		// 切換 div
		toggleClass(obj, "collapsed");

		// 在切換之後獲取div高度
		let endHeight = obj.offsetHeight;

		// console.log(`begin: ${beginHeight} height: ${endHeight}`);

		// 動畫效果 beginHeight -> endHeight

		// 重制高度為begin
		obj.style.height = `${beginHeight}px`;

		// 執行動畫
		move(obj, "height", endHeight, 10, function () {
			// 執行完動畫後移除內連樣式
			obj.style.height = ``;
		});
	}
};
