function draw(event) {
    const canvas = document.getElementById("myCanvas");
    if (!canvas.getContext) return;
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    canvas.width = 300;
    canvas.height = 100;

    var x = event.clientX;
    var y = event.clientY;

    context.beginPath();
    context.arc((x+60)%320-10, (y+30)%120-10, 10, 0, 2 * Math.PI);
    context.fillStyle = "blue";
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc(((x+40)/2)%320-10, ((y+80)/2)%120-10, 10, 0, 2 * Math.PI);
    context.fillStyle = "red";
    context.fill();
    context.stroke();

    context.beginPath();
    context.arc((x/4)%320-10, (y/4)%120-10, 10, 0, 2 * Math.PI);
    context.fillStyle = "purple";
    context.fill();
    context.stroke();

    context.stroke();
}

window.addEventListener("load", draw);