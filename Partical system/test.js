var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createParticles() {
    for (let i = 0; i < 500; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 10 + 1,
            speedX: Math.random() * 3 - 1.5,
            speedY: Math.random() * 3 - 1.5
        });
    }
}

function updateParticles() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].x += particles[i].speedX;
        particles[i].y += particles[i].speedY;
    }
}

function drawParticles() {
    for (let i = 0; i < particles.length; i++) {
        ctx.beginPath();
        ctx.fillRect(particles[i].x, particles[i].y, particles[i].size, particles[i].size);
        ctx.fillStyle = 'white';
        ctx.stroke();
    }
}

createParticles();

function animation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateParticles();
    drawParticles();
    setTimeout(animation, 5);
}

animation();