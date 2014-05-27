;(function(WebGLSimple) {
    "use strict";

    function Shape() {
        this.vertices = null;
        this.colors = null;
        this.material = null;
    }

    Shape.prototype.numItems = 0;
    Shape.prototype.verticesItemSize = 3;
    Shape.prototype.colorsItemSize = 4;

    Shape.prototype.setVertices = function(vertices) {
        this.vertices = vertices;
    };

    Shape.prototype.setColors = function(colors) {
        this.colors = colors;
    };

    Shape.prototype.setMaterial = function(material) {
        this.material = material;
    };

    WebGLSimple.Shape = Shape;
    
})(this.WebGLSimple);