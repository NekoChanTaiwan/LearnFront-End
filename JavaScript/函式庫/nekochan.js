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
    if(obj.addEventListener) {
        obj.addEventListener(evenStr, callbakc, false);
    } else {
        // 兼容 IE8
        obj.attachEvent("on"+eventStr, function() {
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
    if(window.getComputedStyle) {
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
    let reg = new RegExp(`\\b ${classStr}\\b`);
    obj.className = obj.className.replace(reg, "");
}
/**
 * 【NekoChan函式庫】元素切換class
 * @param obj obj：目標元素
 * @param classStr classStr：切換 class值（字符串）
*/
function toggleClass(obj, classStr) {
    if(hasClass(obj, classStr)) {
        removeClass(obj, classStr);
    } else {
        addClass(obj, classStr);
    }
}
// ===================================================