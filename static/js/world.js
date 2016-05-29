/**
 * Created by blockost on 28/05/16.
 */

define(['three', 'materials', 'scene'], (THREE, materials, scene) => {

    var world = {

        //TODO Regarder si on peut pas laisser juste la scene pour intéragir avec les objets (maybe scene.objects[])
        objects: [],

        createFloor: () => {
            var geometry = new THREE.PlaneGeometry(2000, 2000, 100, 100);
            geometry.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2));

            for (var i = 0, l = geometry.vertices.length; i < l; i++) {
                var vertex = geometry.vertices[i];
                vertex.x += Math.random() * 20 - 10;
                vertex.y += Math.random() * 2;
                vertex.z += Math.random() * 20 - 10;
            }

            for (var i = 0, l = geometry.faces.length; i < l; i++) {
                var face = geometry.faces[i];
                face.vertexColors[0] = new THREE.Color().setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
                face.vertexColors[1] = new THREE.Color().setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
                face.vertexColors[2] = new THREE.Color().setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
            }


            var mesh = new THREE.Mesh(geometry, materials.basic);
            mesh.type = "Floor";
            mesh.id = -1;
            scene.add(mesh);
        },

        createObjects: () => {
            var geometry = new THREE.BoxGeometry(20, 20, 20);
            var mesh, material;

            for (var i = 0, l = geometry.faces.length; i < l; i++) {
                var face = geometry.faces[i];
                face.vertexColors[0] = new THREE.Color().setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
                face.vertexColors[1] = new THREE.Color().setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
                face.vertexColors[2] = new THREE.Color().setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
            }


            for (var i = 0; i < 500; i++) {
                material = materials.phong.clone();
                mesh = new THREE.Mesh(geometry, material);
                mesh.position.x = Math.floor(Math.random() * 20 - 10) * 20;
                mesh.position.y = Math.floor(Math.random() * 20) * 20 + 10;
                mesh.position.z = Math.floor(Math.random() * 20 - 10) * 20;
                mesh.id = i;
                material.color.setHSL(Math.random() * 0.2 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
                scene.add(mesh);
                world.objects.push(mesh);
            }
        }
    };

    return world;
});

