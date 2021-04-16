var canvas = new fabric.Canvas("myCanvas");
player_x = 10;
player_y = 10;
block_image_width = 30;
block_image_height = 30;
var player_object = "";
var block_image_objects = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_objects = Img;

        block_image_objects.scaleToWidth(block_image_width);
        block_image_objects.scaleToHeight(block_image_height);
        block_image_objects.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_objects);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("Current_width").innerHTML = block_image_width;
        document.getElementById("Current_height").innerHTML = block_image_height;
    } if (e.shiftKey && keyPressed == '77') {
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10; block_image_height = block_image_height - 10;
        document.getElementById("Current_width").innerHTML = block_image_width;
        document.getElementById("Current_height").innerHTML = block_image_height;
    }


    if (keyPressed == '38') {
        up();
        console.log("up pressed");
    } if (keyPressed == '40') {
        down();
        console.log("down pressed");
    } if (keyPressed == '39') {
        right();
        console.log("right pressed");
    } if (keyPressed == '37') {
        left();
        console.log('left pressed');
    }
    if (keyPressed == '68') {
        new_image("");
    }
    if (keyPressed == '87') {
        new_image("");
    }
    if (keyPressed == '82') {
        new_image("");
    }
    if (keyPressed == '80') {
        new_image("");
    }
    if (keyPressed == '89') {
        new_image("");
    }
    if (keyPressed == '85') {
        new_image("");
    }
    if (keyPressed == '71') {
        new_image("");
    }
    if (keyPressed == '76') {
        new_image(");
    }
    if (keyPressed == '67') {
        new_image("");
    }
}
function up() {
    if (player_y >= 0) {
        player_y = player_y - block_image_height;
        console.log(block_image_height);
        canvas.remove(player_object);
        player_update();
    }
}
function down() {
    if (player_y <= 460) {
        player_y = player_y + block_image_height;
        console.log(block_image_height);
        canvas.remove(player_object);
        player_update();
    }
}
function left() {
    if (player_x >= 0) {
        player_x = player_x - block_image_width;
        console.log(block_image_width);
        canvas.remove(player_object);
        player_update();
    }
}
function right() {
    if (player_x <= 850) {
        player_x = player_x + block_image_width;
        console.log(block_image_width);
        canvas.remove(player_object);
        player_update();
    }
}
