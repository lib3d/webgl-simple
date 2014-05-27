;(function(WebGLSimple) {
    "use strict";

    function Renderer() {

    }

    Renderer.prototype.render = function(scene) {
        this._renderGroup(scene);
    };

    Renderer.prototype._renderGroup = function(group) {
        var self = this;
        var children = group.children;
        var i = children.length;
        var child;
        while(i--) {
            child = children[i];
            if(child instanceof WebGLSimple.Group) {
                self._renderGroup(child);
            } else if(child instanceof WebGLSimple.Shape) {
                self._renderShape(child);
            }
        }
    };

    Renderer.prototype._renderShape = function() {
        throw 'abstract renderer _renderShape cannot be called';
    };

    WebGLSimple.Renderer = Renderer;
    
})(this.WebGLSimple);