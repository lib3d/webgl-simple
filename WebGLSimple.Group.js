;(function(WebGLSimple) {
    "use strict";

    function Group() {
        this.children = [];
    }

    Group.prototype.appendChild = function() {
        this.children.push.apply(this.children, arguments);
    };

    WebGLSimple.Group = Group;
    
})(this.WebGLSimple);