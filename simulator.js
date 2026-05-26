let canvas = document.getElementById("space")
let ctx = canvas.getContext("2d")

let centerX = canvas.width/2;
let centerY = canvas.height/2;

let G = 6.67430e-11*5000;

let x1 = centerX + 50
let y1 = centerY - 50
let x2 = centerX - 50
let y2 = centerY + 50

let vx1 = -8;
let vy1 = -8;
let vx2 = 8;
let vy2 = 8;

let m1 = 800;
let m2 = 800;

function calculateForces(){

    const dx = x2 - x1;
    const dy = y2 - y1;
    const d = Math.sqrt(dx * dx + dy * dy);

    let F = 5000*(G*(m1*m2)/d*d);

    const fx = F * dx / d;
    const fy = F * dy / d;

    const ax1 = fx / m1;
    const ay1 = fy / m1;
    const ax2 = - fx / m2;
    const ay2 = - fy / m2;
    
    vx1 += ax1;
    vy1 += ay1;
    vx2 += ax2;
    vy2 += ay2;

}

function updatePostion(){
    x1 += vx1;
    y1 += vy1;
    x2 += vx2;
    y2 += vy2;
}

function draw(){

    ctx.beginPath()
    ctx.clearRect(0,0, canvas.width, canvas.height);
    
    ctx.arc(x1, y1, 20,0,360);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.beginPath()
    ctx.arc(x2, y2, 20,0,360);

    ctx.fillStyle = "blue";
    ctx.fill();

    
}
function animate(){
    calculateForces()
    updatePostion()
    draw()
    requestAnimationFrame(animate)
}

animate()