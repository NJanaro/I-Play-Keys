
import "../images/Piano_man.png";
// import "../styles/00-canvas.scss";

let img = document.getElementById("piano-man");
let r = 400;

const draw = ()=>{   
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = "1200";
    canvas.height = "1000";
    canvas.position = "absolute";
     
    img = new Image();
    img.onload=unpaint;
    img.src="src/images/Piano_man_big.png";

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
        ctx.drawImage(img,529.5,406);
        ctx.restore();
        r -= .25; 
        if(r <= 64) {
            r = 400;
            if(!alert("you lose")) window.location.reload();
        }else{  
            requestAnimationFrame(unpaint);
        }
    }

    unpaint();
}

export function grow(){
    r+=.1;
}

export function shrink(){
    r-=.1;
}

draw();
