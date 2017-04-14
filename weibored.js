// ==UserScript==
// @name         Weibored.js
// @namespace    http://vito.sdf.org
// @version      0.1
// @description  删除所有微博
// @author       Vito Van
// @match        http://weibo.com/p/*
// @grant        none
// ==/UserScript==
'use strict';

var s = document.createElement("script");
s.setAttribute("src","https://lib.sinaapp.com/js/jquery/2.0.3/jquery-2.0.3.min.js");
s.onload = function(){
    setInterval(function(){
        $('a[title="删除此条微博"]')[0].click();
        $('a[action-type="ok"]')[0].click();
    }, 800);
}
document.head.appendChild(s);
