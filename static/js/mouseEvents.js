/**
 * Created by blockost on 28/05/16.
 */

define(['mouseActions'], (mouseActions) => {
    var mouseEvents = {
        onMouseDown: (event) => {
            switch (event.which) {
                case 1: // left-click
                    mouseActions.fire();
                    break;
                case 2: // molette
                    break;
                case 3: // right-click
                    mouseActions.zoom();
                    break;
                default:
                    console.log("mouse button " + event.which + " not handled...!");
                    break;
            }
        },

        onMouseUp: (event) => {
            switch (event.which) {
                case 1: // left-click
                    break;
                case 2: // molette
                    break;
                case 3: // right-click
                    mouseActions.unzoom();
                    break;
                default:
                    console.log("mouse button " + event.which + " not handled...!");
                    break;
            }
        }
    };

    return mouseEvents;
});