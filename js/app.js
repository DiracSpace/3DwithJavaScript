// DOM variable references
var canvas = document.getElementById('shapes');
var context = canvas.getContext('2d');
context.translate(0.5, 0.5);
var canvasSizes = {
    h: context.canvas.height,
    w: context.canvas.width
}
var centerSizes = {
    h: 1,
    w: 1
}

// function for detecting dom content
document.addEventListener('DOMContentLoaded', () => {
    // evaluation of screen size
    console.log('Height is: ' + canvasSizes.h);
    console.log('Width is: ' + canvasSizes.w);

    // find and fill center
    context.fillStyle = "#FF0000";
    context.fillRect((canvasSizes.w / 2) - (centerSizes.w / 2), (canvasSizes.h / 2) - (centerSizes.h / 2), centerSizes.w, centerSizes.h);

    drawLineX();
    drawLineXInverted();
    drawLineY();
    drawLineYInverted();
    drawLineZ();
    DrawLineZInverted();
});

function drawLineX(color = "Blue") {
    context.beginPath();
    context.moveTo((canvasSizes.w / 2) - (centerSizes.w / 2),0);    // inicio
    context.lineTo((canvasSizes.w / 2) - (centerSizes.w / 2), (canvasSizes.h / 2) - (centerSizes.h / 2)); // fin
    context.strokeStyle = color;
    context.stroke();
}

function drawLineXInverted(color = "LightBlue") {
    context.beginPath();
    context.moveTo((canvasSizes.w / 2) - (centerSizes.w / 2), (canvasSizes.h / 2) - (centerSizes.h / 2));    // inicio
    context.lineTo((canvasSizes.w / 2) - (centerSizes.w / 2),(canvasSizes.w / 2) - (centerSizes.w / 2)); // fin
    context.strokeStyle = color;
    context.stroke();
}

function drawLineY(color = "Red") {
    context.beginPath();
    context.moveTo(0,(canvasSizes.w / 2) - (centerSizes.w / 2));    // inicio
    context.lineTo((canvasSizes.w / 2) - (centerSizes.w / 2), (canvasSizes.h / 2) - (centerSizes.h / 2)); // fin
    context.strokeStyle = color;
    context.stroke();
}

function drawLineYInverted(color = "DarkRed") {
    context.beginPath();
    context.moveTo((canvasSizes.w / 2) - (centerSizes.w / 2), (canvasSizes.h / 2) - (centerSizes.h / 2));    // inicio
    context.lineTo(canvasSizes.w, 0); // fin
    context.strokeStyle = color;
    context.stroke();
}

function drawLineZ(color = "LawnGreen") {
    context.beginPath();
    context.moveTo((canvasSizes.w / 2) - (centerSizes.w / 2), (canvasSizes.h / 2) - (centerSizes.h / 2));    // inicio
    context.lineTo(canvasSizes.w, canvasSizes.h); // fin
    context.strokeStyle = color;
    context.stroke();
}

function DrawLineZInverted(color = "Green") {
    context.beginPath();
    context.moveTo((canvasSizes.w / 2) - (centerSizes.w / 2), (canvasSizes.h / 2) - (centerSizes.h / 2));    // inicio
    context.lineTo(0,0); // fin
    context.strokeStyle = color;
    context.stroke();
}
