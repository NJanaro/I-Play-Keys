import "./styles/index.scss";
import "./scripts/canvas";
import * as Lyrics from "./scripts/lyrics";
import {
  textArea,
  grow,
  stopDraw,
  changePianoMan,
  starter,
  draw,
} from "./scripts/canvas";

const zoom = ()=>{
            document.body.style.zoom = "80%" 
        }

      if (screen.width < 1600) {
          zoom();
      }
      

const lyrics = [
  Lyrics.t01,
  Lyrics.t02,
  Lyrics.t03,
  Lyrics.t04,
  Lyrics.t05,
  Lyrics.t06,
  Lyrics.t07,
  Lyrics.t08,
  Lyrics.t09,
  Lyrics.t10,
  Lyrics.t11,
  Lyrics.t12,
  Lyrics.tTest,
];

let songIdx = Math.floor(Math.random() * Math.floor(12));
// let songIdx = 2;
export const audio = document.getElementById(songIdx);
const modalStart = document.getElementById("modalBodyStart");
const modalWin = document.getElementById("modalBodyWin");

window.addEventListener("load", (e) => {
  modalStart.style.display = "flex";
});

const restart = document.getElementsByClassName("restart");
Array.from(restart).forEach((btn) => {
  btn.addEventListener("click", () => {
    location.reload();
  });
});

const start = document.getElementById("start");
start.addEventListener("click", () => {
  starter();
  draw();
  modalStart.style.display = "none";
  audio.play();
  renderVerse(verseIdx);
});
const stop = document.getElementById("pause");
let pausePlay = true;
stop.addEventListener("click", () => {
  if (pausePlay) {
    stop.innerHTML = "Start Sound";
    audio.pause();
    pausePlay = false;
  } else {
    stop.innerHTML = "Kill Sound";
    audio.play();
    pausePlay = true;
  }
});

let song = lyrics[songIdx];
let verse = song.split("newLine\n");
let verseIdx = 0;

const lyricShowEle = document.getElementById("showLyrics");
const inputLyricsEle = document.getElementById("inputLyrics");

let lastCorrect = 0;

inputLyricsEle.addEventListener("input", () => {
  changePianoMan();
  const lyricsArray = lyricShowEle.querySelectorAll("span"); //creates a NodeList of all the chars that were turned into spans in our render lyrics method. NodeList can be iterated through like an array to check against our inputValue
  const inputValue = inputLyricsEle.value.split(""); //turns input from user into an array to loop through chars to check for accuracy

  let correct = true;
  let growth = false;
  lyricsArray.forEach(function (lyricSpan, idx) {
    // let lyricsChar = lyricSpan[idx];
    let inputChar = inputValue[idx];
    if (inputChar == null) {
      lyricSpan.className = "neither";
      correct = false;
    } else if (inputChar === lyricSpan.innerText) {
      //if statement checks imput to lyrics and changes classname and grow command var
      lyricSpan.className = "correct";
      if (lastCorrect === inputValue.length - 1) {
        lastCorrect++;
        growth = true;
      }
    } else {
      lyricSpan.className = "incorrect";
      correct = false;
      growth = false;
    }
  });

  if (growth) grow();

  if (correct && verseIdx < verse.length - 1) {
    verseIdx++;
    renderVerse(verseIdx);
    lastCorrect = 0;
  } else if (correct && verseIdx >= verse.length - 1) {
    modalWin.style.display = "flex";
    myStop();
    audio.pause();
    textArea.readOnly = true;
  }
});

const myGrow = () => {
  grow();
};

const myStop = () => {
  stopDraw();
};

const renderVerse = (v) => {
  lyricShowEle.innerHTML = ""; //starts our lyric showing nothing (we will append to it in this function individual span elements that can have individual classNames)

  verse[v].split("").forEach((char) => {
    const lyricSpan = document.createElement("span");
    lyricSpan.innerText = char; //creates the individual char span from the lyrics string
    lyricShowEle.appendChild(lyricSpan); //this creates the lyric show as mentioned above as individual spans holding each char that can have a className
  });

  inputLyricsEle.value = "";
};
