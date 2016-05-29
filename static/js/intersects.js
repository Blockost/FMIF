/**
 * Created by blockost on 28/05/16.
 */

define(['controls', 'raycaster'], (controls, rays) => {

    var intersects = {
        getObjectsIntersections: (objects) => {
            var intersects = [];
            var pos = controls.getObject().position;

            // Top
            rays.top.ray.origin.copy(pos);
            var intersects_with_top = rays.top.intersectObjects(objects);

            // Bottom
            rays.bottom.ray.origin.copy(pos);
            rays.bottom.ray.origin.y -= 10; // The camera is (and should stay) 10 above the ground
            var intersects_with_bottom = rays.bottom.intersectObjects(objects);

            // Left
            rays.left.ray.origin.copy(pos);
            var intersects_with_left = rays.left.intersectObjects(objects);

            // Right
            rays.right.ray.origin.copy(pos);
            var intersects_with_right = rays.right.intersectObjects(objects);

            // Front
            rays.front.ray.origin.copy(pos);
            var intersects_with_front = rays.front.intersectObjects(objects);

            // Back
            rays.back.ray.origin.copy(pos);
            var intersects_with_back = rays.back.intersectObjects(objects);

            if (intersects_with_top.length > 0) intersects.push("top");
            if (intersects_with_bottom.length > 0) intersects.push("bottom");
            if (intersects_with_right.length > 0) intersects.push("right");
            if (intersects_with_left.length > 0)    intersects.push("left");
            if (intersects_with_front.length > 0) intersects.push("front");
            if (intersects_with_back.length > 0)    intersects.push("back");

            return intersects;
        },

        getBulletIntersections: (objects) => {
            rays.cameraPointer.ray.origin.copy(controls.getObject().position);
            rays.cameraPointer.ray.direction.copy(controls.getDirection());
            // Recursive search = true (all objects)
            return rays.cameraPointer.intersectObjects(objects, true);
        }
    };


    return intersects;
});




