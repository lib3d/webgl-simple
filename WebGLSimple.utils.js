;(function(WebGLSimple) {
    "use strict";

    WebGLSimple.utils = {
        inherits: function inherits(C, P) {
            var F = new Function();
            F.prototype = P.prototype;
            C.prototype = new F();
            C.prototype.constructor = C;
        }
    };

})(this.WebGLSimple);