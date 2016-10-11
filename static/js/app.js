/**
 * Main file: game logic
 */
define(['jquery', 'three', 'camera', 'scene', 'renderer', 'container', 'light', 'controls', 'raycaster', 'world', 'intersects', 'globals', 'keyboardEvents', 'keyboardActions', 'communicator'],
    ($, THREE, camera, scene, renderer, container, light, controls, rays, world, intersects, globals, keyboardEvents, keyboardActions, COMM) => {


        var app = {

            init: () => {

                keyboardEvents.attachEventListeners();
                world.createFloor();
                world.createObjects();
                world.createGameGUI();

                // Retrieve the changes applied by the players
                world.update();
                
                COMM.initReceiver();

            },
            animate: () => {
                // Loop
                requestAnimationFrame(app.animate);

                // test if the games is activated
                if (controls.enabled) {

                    /**
                     * At each turn, decrease the velocity of the player (momentum)
                     */
                    globals.env.velocity.x -= globals.env.velocity.x * 10.0 * globals.env.delta;
                    globals.env.velocity.y -= 9.8 * globals.env.gravity * globals.env.delta;
                    globals.env.velocity.z -= globals.env.velocity.z * 10.0 * globals.env.delta;

                    if (keyboardActions.vars.moveForward) globals.env.velocity.z += -2000.0 * globals.env.delta;
                    if (keyboardActions.vars.moveBackward) globals.env.velocity.z += 2000.0 * globals.env.delta;

                    if (keyboardActions.vars.moveLeft) globals.env.velocity.x -= 2000.0 * globals.env.delta;
                    if (keyboardActions.vars.moveRight) globals.env.velocity.x += 2000.0 * globals.env.delta;


                    //TODO Rename the method !
                    /**
                     * Check if the player collides a block
                     */
                    var intersections = intersects.getObjectsIntersections(world.objects);
                    var intersect_length = intersections.length;

                    /**
                     * If intersections table contains element, then...
                     * */
                    if (intersect_length > 0) {
                        // Camera collides with one or more objects
                        for (var i = 0; i < intersect_length; i++) {
                            /*if(intersections[i] == "left" && velocity.x < 0) velocity.x = 0;
                             if(intersections[i] == "right" && velocity.x > 0) velocity.x = 0;

                             if(intersections[i] == "front" && velocity.z < 0) velocity.z = 0;
                             if(intersections[i] == "back" && velocity.z > 0) velocity.z = 0;

                             if(intersections[i] == "top" && velocity.y > 0){
                             canJump = false;
                             velocity.y = 0;
                             }*/
                            if (intersections[i] == "bottom") {
                                globals.env.velocity.y = 0;
                                keyboardActions.vars.canJump = true;
                            }
                        }
                    }//TODO find a way to cancel jump on the air
                    /*else{
                     keyboardActions.vars.canJump = false;
                     }*/

                    if (keyboardActions.vars.jump && keyboardActions.vars.canJump) {
                        globals.env.velocity.y += 350;
                        keyboardActions.vars.canJump = false;
                    }


                    /**
                     * Thanks to the updated globals variables, move the camera smoothly
                     */
                    // Move left/right
                    controls.getObject().translateX(globals.env.velocity.x * globals.env.delta);
                    // Jump / fall
                    controls.getObject().translateY(globals.env.velocity.y * globals.env.delta);
                    // Move forward/backward
                    controls.getObject().translateZ(globals.env.velocity.z * globals.env.delta);

                    // Keep camera above the ground
                    if (controls.getObject().position.y < 10) {
                        globals.env.velocity.y = 0;
                        controls.getObject().position.y = 10;
                        keyboardActions.vars.canJump = true;
                    }

                    /**
                     * Send to the server the coord
                     */
                    COMM.emitter.sendPosition(controls);

                    /*var obj_intersects = arr_intersects.reduce(
                     (previousValue, currentValue, currentIndex, array) => {
                     array[currentIndex] = currentValue;
                     return array;
                     }, {});*/

                    // Intersects need to be an object {"1", value1, "2", value2, etc...}


                }
                renderer.render(scene, camera);
            }

        };


        return app;
    }
);




