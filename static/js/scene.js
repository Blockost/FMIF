/**
 * Created by blockost on 21/05/16.
 */

define(['three', 'controls', 'light', 'axes'], (THREE, controls, light, axes) => {
    var scene = new THREE.Scene();
    //scene.fog = new THREE.Fog( 0xffffff, 0, 750 );
    scene.add(controls.getObject());
    scene.add(light);
    scene.add(axes);
    return scene;
});