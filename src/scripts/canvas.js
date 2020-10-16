
import "../images/Piano_man.png";
// import "../styles/00-canvas.scss";

let img = document.getElementById("piano-man");
let r = 200;

const draw = (option)=>{   
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = "1200";
    canvas.height = "1000";
    canvas.position = "absolute";
    // canvas.zindex = 1;

    option == "paint" ? paint : unpaint;
    
    
    img = new Image();
    img.onload=paint;
    img.src="src/images/Piano_man_big.png";

    
    function paint(){ //when defining a function that will run onload, must be in this format (named phat arrow functions don't work)
        ctx.beginPath();
        ctx.save();
        ctx.arc(623, 478, r, 0, 2*Math.PI);
        ctx.clip()
        ctx.fillStyle = "red";
        ctx.fillRect(0,0,1200, 1000);
        ctx.drawImage(img,529.5,406);
        r+=2
        ctx.restore();
        if(r < 200) {
                requestAnimationFrame(paint);
        } else {
                requestAnimationFrame(unpaint);
        }
    }
    // requestAnimationFrame(paint);

    function unpaint(){
        
        if(r <= 0){
            // alert("you lose");
            if(!alert("you lose")) window.location.reload();
        }else{
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
        r -= .5; 
        // if(r > 1) {
            requestAnimationFrame(unpaint);
        // }
            // ctx.restore();
            // requestAnimationFrame(paint);
        }
    }
}

export function grow(){
    r+=.1;
}

export function shrink(){
    r-=.15;
}

draw("unpaint");
