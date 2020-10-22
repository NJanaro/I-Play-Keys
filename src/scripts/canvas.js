
import "../images/piano.png";
import "../images/stage.png";
import "../images/pianoManLeft.png";
import "../images/pianoManRight.png";


// import "../styles/00-canvas.scss";

// let pianoMan = document.getElementById("piano-man");
let r = 400;
let right = true;
const pianoManLeft = new Image();
pianoManLeft.src="src/images/pianoManLeft.png";

const pianoManRight = new Image();
pianoManRight.src="src/images/pianoManRight.png";

const stage = new Image();
stage.src="src/images/stage.png";

const piano = new Image();
piano.src="src/images/piano.png";

export const draw = ()=>{   
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = "1200";
    canvas.height = "1000";
    canvas.position = "absolute";
    
    
    const images = [pianoManLeft, pianoManRight, piano, stage];
    
    let imagesLoaded = 0;
    // console.log(imagesLoaded);
    for (let i = 0; i < images.length; i++) {
        images[i].onload = function(){
            imagesLoaded++;
            console.log(imagesLoaded);
            console.log(images.length);
            if(imagesLoaded == images.length)unpaint();
        }
        
    }
    
    
    
    function unpaint(){      
        if(r <= 0) {
            if(!alert("you lose")) window.location.reload();
        }
        ctx.beginPath();
        ctx.save();
        ctx.fillRect(0,0,1200, 1000);
        ctx.fillStyle = "black";
        
        ctx.arc(623, 478, r, 0, 2*Math.PI);
        ctx.clip();
        ctx.fillStyle = "red";
        ctx.fillRect(0,0,1200, 1000);
        ctx.drawImage(stage, 0, 150);
        ctx.drawImage(piano, 529.5, 406);
        if (right){
            ctx.drawImage(pianoManRight,565.5,402);
        }else{
            ctx.drawImage(pianoManLeft,565.5,402);
        }
        ctx.restore();
        r -= .25; 
        if(r <= 64) {
            r = 400;
            if(!alert("you lose")) window.location.reload();
        }else{  
            requestAnimationFrame(unpaint);
        }
    }
    
    // unpaint();
}

export function grow(){
    r+=.1;
}

export function shrink(){
    r-=.1;
}

export function changePianoMan(){
    right ? right = false : right = true;
}

