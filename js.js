var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;

mainImage = new Image();
mainImage.ready = false;
mainImage.onload = checkReady;
mainImage.src = "pac.png";

function checkReady() {
    this.ready = true;
    playgame();
}


function playgame() {
    render();
}


function render() {
    context.fillStyle = "black";

    context.fillRect(0,0,canvas.width,canvas.height);
}
    




document.body.appendChild(canvas);

