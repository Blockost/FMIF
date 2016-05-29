/**
 * Created by blockost on 21/05/16.
 */

define(['three', 'container', 'globals'], (THREE, container, globals) => {
    var renderer = new THREE.WebGLRenderer();

    renderer.setClearColor(globals.colors.Sky_Blue);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    return renderer;
});