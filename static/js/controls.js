/**
 * Created by blockost on 21/05/16.
 */

define(['three', 'camera'], (THREE, camera) => {
    var controls = new THREE.PointerLockControls(camera);
    controls.getObject().position.y = 500;
    return controls;
});