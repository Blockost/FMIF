/**
 * Created by blockost on 21/05/16.
 */

define(['three'], (THREE) => {

    var rays = {
        top: new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, 1, 0), 1, 10),
        bottom: new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, -1, 0), 0, 10),
        left: new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(-1, 0, 0), 1, 10),
        right: new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(1, 0, 0), 1, 10),
        front: new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, 0, -1), 1, 10),
        back: new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, 0, 1), 1, 10),
        cameraPointer: new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(), 0, 10000)
    };

    return rays;

});