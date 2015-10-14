define(function(require,exports,module){

    var util = require('./util');
    var test = require('./test');
    var $ = require("jquery");
    var helloSeaJS = $('#hello-seajs')[0];
    /*var helloSeaJS = document.getElementById('hello-seajs');*/
    /*var helloSeaJS=$("#hello-seajs");*/
    helloSeaJS.style.color = util.randomColor();
    test.hi();
    window.setInterval(function(){
        helloSeaJS.style.color = util.randomColor();
    },1500);
});