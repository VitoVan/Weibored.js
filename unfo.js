// ==UserScript==
// @name         Weibored.js
// @namespace    http://ivanjiang.com
// @version      0.1
// @description  remove all users you're following
// @author       Ivan Jiang
// @match        http://weibo.com/*/*follow*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var s = document.createElement("script");
    s.setAttribute("src","https://lib.sinaapp.com/js/jquery/2.0.3/jquery-2.0.3.min.js");
    s.onload = function(){
        setInterval(function(){
            var $unfoBtn = $('a[action-type="cancel_follow_single"]'), 
                $confirm;
            if ($unfoBtn.length) {
                $unfoBtn[0].click();
                $confirm = $('a[action-type="ok"]');
                $confirm[$confirm.length - 1].click();
            } else {
                location.reload();
            }
        }, 1200);
    };
    document.head.appendChild(s);
})();
