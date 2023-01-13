var canvas=document.getElementById('canvas1');
var ctx=canvas.getContext('2d')
canvas.width=window.innerWidth
canvas.height=window.innerHeight
let ParticlesStored=[]
mouse={
    x:null,
    y:null,
}
window.addEventListener('mousemove',function(event){
    mouse.x=event.x;
    mouse.y=event.y;
    
for(let i=0;i<5;i++){
    ParticlesStored.push(new Particles())
}

})
class Particles{
    constructor (){
       this.x=mouse.x;
        this.y=mouse.y;

        this.size=Math.random()*10+1
        this.speedX=Math.random()*3-1.5
        this.speedY=Math.random()*3-1.5
    }
    update(){
        this.x+=this.speedX;
        this.y+=this.speedY;
        if(this.size>0.2)this.size-=0.1}
   draw(){
    ctx.beginPath()
    ctx.arc(this.x,this.y,this.size,0,360)
    ctx.fill()
   ctx.fillStyle='white'
    ctx.stroke()
   } 
}


function particleHandler(){
    for (let i=0;i<ParticlesStored.length;i++){
        ParticlesStored[i].update();
        ParticlesStored[i].draw();
       //this line is to calculate the distances btwn circles and drwa a line 
        for( let j=i;j<ParticlesStored.length;j++){
            const dx=ParticlesStored[i].x-ParticlesStored[j].x
            const dy=ParticlesStored[i].y-ParticlesStored[j].y
            const distances=Math.sqrt(dx*dx+dy*dy)
            if(distances<100){
                ctx.beginPath()
                ctx.fillStyle='pink'
                ctx.moveTo(ParticlesStored[i].x,ParticlesStored[i].y)
                ctx.lineTo(ParticlesStored[j].x,ParticlesStored[j].y)
                ctx.stroke()
                ctx.closePath()

            }
        }
        //This check if the partcile is smaller than a certain size else it removes it from the array
        if(ParticlesStored.size>0.3){
            ParticlesStored.splice(i,1);
            i--;
        }
    }
}



function animation(){
    //ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle='rgba(0,0,0,0.01)'
    particleHandler()
    requestAnimationFrame(animation)
}

animation()