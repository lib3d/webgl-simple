;(function(WebGLSimple) {
    "use strict";

    function Scene() {
        WebGLSimple.Group.apply(this);
    }

    WebGLSimple.utils.inherits(Scene, WebGLSimple.Group);

    WebGLSimple.Scene = Scene;
    
})(this.WebGLSimple);