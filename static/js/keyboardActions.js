/**
 * Created by blockost on 29/05/16.
 */

/**
 * Define actions associated to a key press
 */
define(['renderer', 'globals'], (renderer, globals) => {


    var keyboardActions = {
        vars: {
            moveForward: false,
            moveBackward: false,
            moveLeft: false,
            moveRight: false,
            jump: false,
            canJump: false
        },

        moveForward: () => {
            keyboardActions.vars.moveForward = true;
        },

        moveBackward: () => {
            keyboardActions.vars.moveBackward = true;
        },

        moveLeft: () => {
            keyboardActions.vars.moveLeft = true;

        },

        moveRight: () => {
            keyboardActions.vars.moveRight = true;
        },

        jump: () => {
            keyboardActions.vars.jump = true;
        },

        changeBG: () => {
            if (renderer.getClearColor().getHex() == globals.colors.Deep_Sky_Blue.toString()) {
                renderer.setClearColor(globals.colors.Sky_Blue);
            } else {
                renderer.setClearColor(globals.colors.Deep_Sky_Blue);
            }
        }
    };

    return keyboardActions;
});