/**
 * Created by blockost on 21/05/16.
 * From https://soledadpenades.com/articles/three-js-tutorials/drawing-the-coordinate-axes/
 */

define(['three'], (THREE) => {

    function buildAxis(src, dest, hexColor, dashed) {
        var geom = new THREE.Geometry();
        var mat;

        if (dashed) {
            mat = new THREE.LineDashedMaterial({linewidth: 3, color: hexColor, dashSize: 0.5, gapSize: 0.5});
        } else {
            mat = new THREE.LineBasicMaterial({linewidth: 3, color: hexColor});
        }

        geom.vertices.push(src.clone());
        geom.vertices.push(dest.clone());
        geom.computeLineDistances(); // This one is SUPER important, otherwise dashed lines will appear as simple plain lines

        return new THREE.LineSegments(geom, mat);

    }

    var axes = new THREE.Object3D();
    var length = 100;

    axes.add(buildAxis(new THREE.Vector3(0, 15, 0), new THREE.Vector3(length, 15, 0), 0xFF0000, false)); // +X
    axes.add(buildAxis(new THREE.Vector3(0, 15, 0), new THREE.Vector3(-length, 15, 0), 0xFF0000, true)); // -X
    axes.add(buildAxis(new THREE.Vector3(0, 15, 0), new THREE.Vector3(0, length, 0), 0x00FF00, false)); // +Y
    axes.add(buildAxis(new THREE.Vector3(0, 15, 0), new THREE.Vector3(0, -length, 0), 0x00FF00, true)); // -Y
    axes.add(buildAxis(new THREE.Vector3(0, 15, 0), new THREE.Vector3(0, 15, length), 0x0000FF, false)); // +Z
    axes.add(buildAxis(new THREE.Vector3(0, 15, 0), new THREE.Vector3(0, 15, -length), 0x0000FF, true)); // -Z

    return axes;

});

