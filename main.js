var mouseEvent="empty";
var l_x,l_y;

color="blue";
line_width=3;

canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseLeave";  
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseUp";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    cx=e.clientX-canvas.offsetLeft;
    cy=e.clientY-canvas.offsetTop;
    
    if (mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=line_width;

        console.log("Last position of x and y coordinates= ");
        console.log(" x= "+l_x+"y= "+ l_y);
        ctx.moveTo(l_x,l_y);

        console.log("Current position of x and y coordinates= ");
        console.log(" x= "+cx+"y= "+ cy);
        ctx.lineTo(cx,cy);
        ctx.stroke();
    }

    l_x=cx;
    l_y=cy;
}


