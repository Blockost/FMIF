/**
 * Created by blockost on 29/05/16.
 */

define(['three'], (THREE) => {
    var global = {
        colors: {
            Deep_Sky_Blue: 0x00bfff,
            Sky_Blue: 0x87ceeb,
            Light_Sky_Blue: 0x87cefa
        },
        env: {
            velocity: new THREE.Vector3(),
            gravity: 100.0,
            delta: 0.01
        }
    };

    return global;
});