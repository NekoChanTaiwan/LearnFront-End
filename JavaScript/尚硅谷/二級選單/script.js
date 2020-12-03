window.onload = function () {
	var menuSpan = document.querySelectorAll(".menuSpan");
	for (var i = 0; i < menuSpan.length; i++) {
		menuSpan[i].onclick = function () {
			// alert("hello");
			var parentDiv = this.parentNode;
			toggleClass(parentDiv, "collapsed");
			// toggleClass(parentDiv, "collapsed");
		};
	}
};
