/**
 * Created by blockost on 29/05/16.
 */

/**
 * Socket io logic
 */
define(['socketIO'], (io) => {

    /*socket.on('shot_confirmed', (data) => {
     alert('Shot confirmed ! ');
     });

     socket.on('move', (data) => {
     console.log(data);
     }); */

    var socket = io();

    var COMM = {
        initCommunication: () => {
            socket.on('new_player', (player) => {

                /*//Create an object which represents the player
                 mesh = new THREE.Mesh(geometry, material);
                 mesh.position.copy(player.position);
                 mesh.type = "Player";
                 mesh.id = player.nickname;
                 objects.push(mesh);
                 scene.add(mesh);*/

                console.log("lAAAAA");

            });
        }
    };

    return COMM;


});