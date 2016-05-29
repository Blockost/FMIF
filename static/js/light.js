/**
 * Created by blockost on 21/05/16.
 */

define(['three'], (THREE) => {
    var light = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.75);
    light.position.set(0.5, 1, 0.75);
    return light;
});