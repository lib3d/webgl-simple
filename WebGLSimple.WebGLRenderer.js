;(function(WebGLSimple) {
    "use strict";

    function WebGLRenderer() {
        WebGLSimple.Renderer.apply(this);
        this.canvas = null;
        this.programs = {};
        this.gl = null;
    }

    WebGLSimple.utils.inherits(WebGLRenderer, WebGLSimple.Renderer);

    WebGLRenderer.prototype.render = function(scene) {
        //TODO: handle camera, lights, etc.
        this.gl.clearColor(0,0,0,1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        WebGLSimple.Renderer.prototype.render.call(this, scene);
    };

    WebGLRenderer.prototype._createShader = function createShader(gl, str, type) {
        var shader = gl.createShader(type);
        gl.shaderSource(shader, str);
        gl.compileShader(shader);
        return shader;
    };

    WebGLRenderer.prototype._createProgram = function createProgram(gl, vsStr, fsStr) {
        var p = gl.createProgram();
        var vs = this._createShader(gl, vsStr, gl.VERTEX_SHADER);
        var fs = this._createShader(gl, fsStr, gl.FRAGMENT_SHADER);
        gl.attachShader(p, vs);
        gl.attachShader(p, fs);
        gl.linkProgram(p);
        return p;
    };

    WebGLRenderer.prototype.setCanvas = function(canvas) {
        this.canvas = canvas;
        this.gl = canvas.getContext('experimental-webgl');
        this.gl.enable(this.gl.DEPTH_TEST);
    };

    WebGLRenderer.prototype.getProgram = function(type) {
        var program = this.programs[type];

        if(program) {
            return program;
        }

        var gl = this.gl;

        switch(type) {
            case 'BasicMaterial':
                //TODO: get GLSL code from somewhere else
                var p = this._createProgram(gl, vs.textContent, fs.textContent);
                var aPos = gl.getAttribLocation(p, 'aPos');
                var aColor = gl.getAttribLocation(p, 'aColor');
                var posBuffer = gl.createBuffer();
                var colorBuffer = gl.createBuffer();
                gl.enableVertexAttribArray(aPos);
                gl.enableVertexAttribArray(aColor);
                program = {
                    program: p,
                    pointers: {
                        aPos: aPos,
                        aColor: aColor
                    },
                    buffers: {
                        aPos: posBuffer,
                        aColor: colorBuffer
                    }
                }
                break;
        }

        if(program) {
            this.programs[type] = program;
            return program;
        } else {
            throw 'no program for this type';
        }
    };

    WebGLRenderer.prototype._renderShape = function(shape) {
        var material = shape.material;
        var program;
        var gl = this.gl;
        switch(material.constructor) {
            case WebGLSimple.BasicMaterial:
                program = this.getProgram('BasicMaterial');

                gl.bindBuffer(gl.ARRAY_BUFFER, program.buffers.aPos);
                gl.vertexAttribPointer(program.pointers.aPos, shape.verticesItemSize, gl.FLOAT, false, 0, 0);
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(shape.vertices), gl.STATIC_DRAW);

                gl.bindBuffer(gl.ARRAY_BUFFER, program.buffers.aColor);
                gl.vertexAttribPointer(program.pointers.aColor, shape.colorsItemSize, gl.UNSIGNED_BYTE, true, 0, 0);
                gl.bufferData(gl.ARRAY_BUFFER, new Uint8Array(shape.colors), gl.STATIC_DRAW);
        }

        this.gl.useProgram(program.program);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, shape.numItems);
    };

    WebGLSimple.WebGLRenderer = WebGLRenderer;
    
})(this.WebGLSimple);