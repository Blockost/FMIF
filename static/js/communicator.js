/**
 * Created by blockost on 29/05/16.
 */

/**
 * Socket io logic
 */
define(['socketIO', 'world'], (io, world) => {

    var socket = io();

    var COMM = {
        /**
         * Handler for incoming message
         */
        initReceiver: () => {

            socket.on('worldUpdates', (updates) => {
                console.log(JSON.stringify(updates));
                if (updates.size == 0)
                    console.log('NO UPDATES TO APPLY');
            });

            socket.on('new_player', (player) => {

                /*//Create an object which represents the player
                 mesh = new THREE.Mesh(geometry, material);
                 mesh.position.copy(player.position);
                 mesh.type = "Player";
                 mesh.id = player.nickname;
                 objects.push(mesh);
                 scene.add(mesh);*/

                console.log("A new player is connected !");
            });

            socket.on('shot_confirmed', (data) => {
                console.log(JSON.stringify(data));
                var obj = world.objects.filter((obj) => {
                    return obj.id == data.id
                });
                console.log(obj);
                obj[0].material.color.setHex(0x000000);
            });

            socket.on('move', (data) => {
                console.log(data);
            });
        },


        emitter: {
            sendPosition: (controls) => {
                socket.emit('move', {
                    /**
                     * Change id = controls.id to player.id
                     */
                    id: controls.getObject().id,
                    x: controls.getObject().position.x,
                    y: controls.getObject().position.y,
                    z: controls.getObject().position.z,
                });
            },

            fire: (mesh_id) => {
                socket.emit('shot', {id: mesh_id});
            }
        }
    };

    return COMM;


});