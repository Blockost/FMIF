/**
 * Created by blockost on 29/05/16.
 */

define(['keyboardActions', 'container'], (keyboardActions, container) => {

    var keyboardEvents = {
        attachEventListeners: () => {
            container.addEventListener('keydown', keyboardEvents.onKeyDown, false);
            container.addEventListener("keyup", keyboardEvents.onKeyUp, false);
        },

        onKeyDown: (event) => {
            switch (event.keyCode) {
                case 38: // up
                case 90: // z
                    keyboardActions.moveForward();
                    break;
                case 37: // left
                case 81: // q
                    keyboardActions.moveLeft();
                    break;
                case 40: // down
                case 83: // s
                    keyboardActions.moveBackward();
                    break;
                case 39: // right
                case 68: // d
                    keyboardActions.moveRight();
                    break;
                case 32: // space
                    keyboardActions.jump();
                    break;
                case 69: //e
                    keyboardActions.changeBG();
                    break;
                default:
                    console.log('Key: ' + event.keyCode + ' not supported (yet =D)...');
            }
        },

        onKeyUp: (event) => {
            switch (event.keyCode) {
                case 38: // up
                case 90: // z
                    keyboardActions.vars.moveForward = false;
                    break;
                case 37: // left
                case 81: // q
                    keyboardActions.vars.moveLeft = false;
                    break;
                case 40: // down
                case 83: // s
                    keyboardActions.vars.moveBackward = false;
                    break;
                case 39: // right
                case 68: // d
                    keyboardActions.vars.moveRight = false;
                    break;
                case 32: // space
                    keyboardActions.vars.jump = false;
                    break;
            }
        }
    };

    return keyboardEvents;
});