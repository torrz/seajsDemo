define(function(require,exports,module){

    var util = require('./util');
    var $ = require("jquery");
    var helloSeaJS = $('#hello-seajs');
    /*var helloSeaJS = document.getElementById('hello-seajs');*/
    /*var helloSeaJS=$("#hello-seajs");*/
    helloSeaJS.style.color = util.randomColor();
    window.setInterval(function(){
        helloSeaJS.style.color = util.randomColor();
    },1500);
});