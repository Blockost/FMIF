/**
 * Sandbox: Models, animations, sounds and effects testing room
 */

define(['three', 'materials', 'scene', 'camera'], (THREE, materials, scene, camera) => {

    var sandbox = {


        buildSandCastles: () => {
            var JSONLoader = new THREE.JSONLoader();

            JSONLoader.load("/static/game_design/models/animated/animals/cow.json", (geometry, materials) => {
                var cow = new THREE.Mesh(geometry, new THREE.MultiMaterial(materials));
                cow.position.z = -600;
                scene.add(cow);
})
JSONLoader.load("/static/game_design/models/animated/animals/horse.json", (geometry, materials) => {
                var horse = new THREE.MorphAnimMesh(geometry, new THREE.MultiMaterial(materials));
                horse.position.z = -600;
                horse.position.x = 100;

                var morphAnimation = THREE.MorphAnimation(horse);
                ///morphAnimation.play();
                THREE.MorphAnimation.play();
                THREE.MorphAnimation.update(25);
                scene.add(horse);
})
var ObjectLoader = new THREE.ObjectLoader();
            ObjectLoader.load("/static/game_design/models/animated/monsters/monster.json", (monster) => {
                scene.add(monster);
})

/*var loader = new THREE.ColladaLoader();
            loader.options.convertUpAxis = true;
            loader.load("/static/game_design/models/animated/monsters/monster.dae", function ( collada ) {
                var dae = collada.scene;
                dae.traverse( function ( child ) {
                    if (child instanceof THREE.SkinnedMesh) {
                        var animation = new THREE.Animation(child, child.geometry.animation);
                        animation.play();
                    }
                });
                scene.add(dae);
            });*/
        }
}
return sandbox;
})