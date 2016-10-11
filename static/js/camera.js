/**
 * Created by blockost on 21/05/16.
 */

define(['three', 'container', 'renderer'], (THREE, container, renderer) => {

    var camera = new THREE.PerspectiveCamera(
        75, window.innerWidth / window.innerHeight, 1, 1000);

    var onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize, false);


    return camera;
});