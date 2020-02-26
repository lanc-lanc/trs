/*
  * @Description: 以1920设计稿为基准，计算时，将设计稿上的尺寸除以100即可  
  * @Company: TRS  
  * @Date: 2019-11-03 13:07:26 
  * @LastEditors: tanyaohua 
 */
"use strict";

!function (n) {
  var e = n.document,
    t = e.documentElement,
    i = 1920,
    d = i / 100,
    o = "orientationchange" in n ? "orientationchange" : "resize",
    a = function () {
      var n = t.clientWidth || 320; n > 1920 && (n = 1920);
      t.style.fontSize = n / d + "px"
    };
  e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener("DOMContentLoaded", a, !1))
}(window);
