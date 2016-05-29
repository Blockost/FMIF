/**
 * Created by blockost on 29/05/16.
 */

define(['three'], (THREE) => {

    var materials = {
        basic: new THREE.MeshBasicMaterial({vertexColors: THREE.VertexColors}),
        phong: new THREE.MeshPhongMaterial({
            specular: 0xffffff,
            shading: THREE.FlatShading,
            vertexColors: THREE.VertexColors,
        })
    };

    return materials;
});