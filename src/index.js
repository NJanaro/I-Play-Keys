import "./styles/index.scss";
import "./scripts/canvas";
import * as Lyrics from './scripts/lyrics';
import {grow, shrink, changePianoMan, starter, draw} from './scripts/canvas';

// const getRandomInt = max=>{
//   return Math.floor(Math.random() * Math.floor(max));
// }
const lyrics = [Lyrics.wingedWickedThings, Lyrics.theMendingOfTheGown];


const modal = document.getElementById("modalBody")

window.addEventListener('load', (e)=> {
  modal.style.display = "block";
})

document.getElementById("start").addEventListener("click", () => {
  starter();
  draw();
  modal.style.display = "none";

})

let song = lyrics[ Math.floor(Math.random() * Math.floor(2))];
let verse = song.split("newLine\n");
let verseIdx = 0;

const lyricShowEle =document.getElementById("showLyrics");
const inputLyricsEle = document.getElementById("inputLyrics");


inputLyricsEle.addEventListener("input", ()=>{
  
    changePianoMan();
    const lyricsArray = lyricShowEle.querySelectorAll("span"); //creates a NodeList of all the chars that were turned into spans in our render lyrics method. NodeList can be iterated through like an array to check against our inputValue
    const inputValue = inputLyricsEle.value.split(""); //turns input from user into an array to loop through chars to check for accuracy 

    let correct = true;
    let growth = false;
    lyricsArray.forEach(function(lyricSpan, idx){
      // let lyricsChar = lyricSpan[idx];
      let inputChar = inputValue[idx];
      if (inputChar == null){
        lyricSpan.className = "neither";
        correct = false;
      }else if (inputChar == lyricSpan.innerText){ //if statement checks imput to lyrics and changes classname for individual
        lyricSpan.className = "correct";
        console.log("grow");
        growth = true;
      }else{
        lyricSpan.className = "incorrect";
        correct = false;
        growth = false;
      }
      growth ? grow() : shrink();
    })
    

    if (correct && verseIdx < verse.length - 1){
      verseIdx+=1
      renderVerse(verseIdx);
    }else if(verseIdx >= verse.length - 1){
      alert("You Win!");
    }
})

const myShrink = ()=>{
  shrink();
}
const myGrow = ()=>{
  grow();
}


const renderVerse = (v)=>{
  // console.log(v);
  lyricShowEle.innerHTML = ""; //starts our lyric showing nothing (we will append to it in this function individual span elements that can have individual classNames)
  

  verse[v].split("").forEach(char => {
    const lyricSpan = document.createElement('span');
    lyricSpan.innerText = char; //creates the individual char span from the lyrics string
    lyricShowEle.appendChild(lyricSpan) //this creates the lyric show as mentioned above as individual spans holding each char that can have a className
  })

  inputLyricsEle.value = "";
}

renderVerse(verseIdx);




