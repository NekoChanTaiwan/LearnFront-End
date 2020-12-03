"use strict";
// ===================================================
//                      DOM函式庫
// ===================================================
/**
 * 【NekoChan函式庫】綁定事件
 * @param obj obj：目標元素
 * @param eventStr eventStr：要綁定的事件（不要寫on）（字符串）
 * @param callback callback：回調函數
 */
function bind(obj, eventStr, callback) {
	if (obj.addEventListener) {
		obj.addEventListener(evenStr, callbakc, false);
	} else {
		// 兼容 IE8
		obj.attachEvent("on" + eventStr, function () {
			callback.clall(obj); // 重新定義 this
		});
	}
}
/**
 * 【NekoChan函式庫】獲取元素當前樣式
 * @param obj obj：目標元素
 * @param styleStr styleStr：要獲取的樣式名（字符串）
 */
function getStyle(obj, styleStr) {
	if (window.getComputedStyle) {
		return getComputedStyle(obj, null)[styleStr];
	} else {
		// 兼容 IE8
		return obj.current.Style[styleStr];
	}
}
/**
 * 【NekoChan函式庫】元素新增class
 * @param obj obj：目標元素
 * @param classStr classStr：要新增的 class 值（字符串）
 */
function addClass(obj, classStr) {
	if (!hasClass(obj, classStr)) {
		obj.className += ` ${classStr}`;
	}
}
/**
 * 【NekoChan函式庫】元素判斷class
 * @param obj obj：目標元素
 * @param classStr classStr：判斷 class 值（字符串）
 */
function hasClass(obj, classStr) {
	let reg = new RegExp(`\\b${classStr}\\b`);
	return reg.test(obj.className);
}
/**
 * 【NekoChan函式庫】元素刪除class
 * @param obj obj：目標元素
 * @param classStr classStr：刪除 class值（字符串）
 */
function removeClass(obj, classStr) {
	let reg = new RegExp(`\\b${classStr}\\b`);
	obj.className = obj.className.replace(reg, "");
}
/**
 * 【NekoChan函式庫】元素切換class
 * @param obj obj：目標元素
 * @param classStr classStr：切換 class值（字符串）
 */
function toggleClass(obj, classStr) {
	if (hasClass(obj, classStr)) {
		removeClass(obj, classStr);
	} else {
		addClass(obj, classStr);
	}
}
// ===================================================
//                      BOM函式庫
// ===================================================
/**
 * 【NekoChan函式庫】元素動畫
 * @param obj obj：目標元素
 * @param attrStr attrStr：要執行動畫樣式（字符串）
 * @param target target：執行動畫的目標位置
 * @param speed 速度（正值）
 * @param callback 回調函數
 */
let move = (obj, attrStr, target, speed, callback) => {
	clearInterval(obj.timer);
	// 判斷速度的正負值
	let current = parseInt(getComputedStyle(obj, null)[attrStr]);
	if (current > target) {
		speed = -speed;
	}
	// 向執行動畫的物件，新增一個timer屬性，可以防止另一個物件停止其他物件的定時器
	obj.timer = setInterval(function () {
		let oldVaule = parseInt(getComputedStyle(obj, null)[attrStr]);
		let newVaule = oldVaule + speed;

		// 向左移動時(speed < 0)判斷 newValue 是否小於 target
		// 向右移動時(speed > 0)判斷 newValue 是否大於 target
		if ((speed < 0 && newVaule < target) || (speed > 0 && newVaule > target)) {
			newVaule = target;
		}

		obj.style[attrStr] = `${newVaule}px`;

		if (newVaule == target) {
			clearInterval(obj.timer);
			callback && callback();
		}
	}, 30);
};
