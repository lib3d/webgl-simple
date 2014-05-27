;(function(WebGLSimple) {
    "use strict";

    function BasicMaterial() {
        WebGLSimple.Material.apply(this);
        this.diffuseColor = null;
        this.emissiveColor = null;
    }

    WebGLSimple.utils.inherits(BasicMaterial, WebGLSimple.Material);

    WebGLSimple.BasicMaterial = BasicMaterial;
    
})(this.WebGLSimple);