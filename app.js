;(function(WebGLSimple) {
    "use strict";

    var renderer = new WebGLSimple.WebGLRenderer();
    renderer.setCanvas(canvas);

    var scene = new WebGLSimple.Scene();
    var group = new WebGLSimple.Group();

    var shape = new WebGLSimple.Shape();
    var material = new WebGLSimple.BasicMaterial();

    shape.setMaterial(material);
    shape.numItems = 4;
    shape.verticesItemSize = 3;
    shape.setVertices([
        -0.5,-0.5,0.0,
        0.1,-0.5,0.0,
        -0.5,0.1,0.0,
        0.1,0.1,0.0
    ]);
    shape.setColors([
        0,255,0,255,
        255,0,255,255,
        0,0,255,255,
        255,255,0,255
    ]);


    var shape2 = new WebGLSimple.Shape();

    shape2.setMaterial(material);
    shape2.numItems = 4;
    shape2.verticesItemSize = 3;
    shape2.setVertices([
        -0.1,-0.1,0.0,
        0.5,-0.1,0.0,
        -0.1,0.5,0.0,
        0.5,0.5,0.0
    ]);
    shape2.setColors([
        0,255,0,255,
        255,0,255,255,
        0,0,255,255,
        255,255,0,255
    ]);

    group.appendChild(shape, shape2);
    scene.appendChild(group);

    renderer.render(scene);


})(this.WebGLSimple);