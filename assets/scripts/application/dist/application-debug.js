define("application/dist/application-debug", [ "./util-debug", "./test-debug", "jquery-debug" ], function(require, exports, module) {
    var util = require("./util-debug");
    var test = require("./test-debug");
    var $ = require("jquery-debug");
    var helloSeaJS = $("#hello-seajs")[0];
    /*var helloSeaJS = document.getElementById('hello-seajs');*/
    /*var helloSeaJS=$("#hello-seajs");*/
    helloSeaJS.style.color = util.randomColor();
    test.hi();
    window.setInterval(function() {
        helloSeaJS.style.color = util.randomColor();
    }, 1500);
});

define("application/dist/util-debug", [], function(require, exports, module) {
    var util = {};
    var colorRange = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F" ];
    util.randomColor = function() {
        return "#" + colorRange[Math.floor(Math.random() * 16)] + colorRange[Math.floor(Math.random() * 16)] + colorRange[Math.floor(Math.random() * 16)] + colorRange[Math.floor(Math.random() * 16)] + colorRange[Math.floor(Math.random() * 16)] + colorRange[Math.floor(Math.random() * 16)];
    };
    module.exports = util;
});

define("application/dist/test-debug", [], function(require, exports, module) {
    var test = {};
    test.hi = function() {
        console.log("HI");
    };
    module.exports = test;
});
