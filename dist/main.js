!function(e){var n={};function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)o.d(t,a,function(n){return e[n]}.bind(null,a));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/dist/",o(o.s=1)}([function(e,n,o){},function(e,n,o){"use strict";o.r(n);o(0);var t=!1,a=400,i=!0,s=new Image;s.src="src/images/pianoManLeft.png";var r=new Image;r.src="src/images/pianoManRight.png";var h=new Image;h.src="src/images/stage.png";var d=new Image;d.src="src/images/piano.png";var l=function(){var e=document.getElementById("myCanvas"),n=e.getContext("2d");e.width="1200",e.height="1000",e.position="absolute",n.scale(.75,.75);for(var o=[s,r,d,h],l=0,u=0;u<o.length;u++)o[u].onload=function(){l++,console.log(l),console.log(o.length),l==o.length&&y()};function y(){a<=0&&(alert("you lose")||window.location.reload()),n.beginPath(),n.save(),n.fillRect(0,0,1200,1100),n.fillStyle="black",n.arc(623,478,a,0,2*Math.PI),n.clip();var e=n.createRadialGradient(623,478,200,623,478,600);e.addColorStop(0,"black"),e.addColorStop(1,"red"),n.fillStyle=e,n.fillRect(0,0,1200,1e3),n.drawImage(h,0,150),n.drawImage(d,529.5,406),i?n.drawImage(r,565.5,402):n.drawImage(s,565.5,402),n.restore(),(a-=.25)<=64?(a=400,alert("you lose")||window.location.reload()):t&&requestAnimationFrame(y)}y()};function u(){a<600&&(a+=10)}l();var y=["He made an enemy, then\nHe made an enemy of all of you\nIt's him, not you\nnewLine\nYou never heard it from me\nBut there's a breach in the hull\nWhere the truth and the water's too deep to prove\nnewLine\nHe made an enemy, then\nHe made an enemy of all of you\nIt's him, not you\nnewLine\nIt's a little red sea- let the miracle worker go free\nSee the paddle go up and the paddle go down\nAnd the paddle go up and the paddle go down\nnewLine\nAnd the paddle go up and the paddle go down\nAnd the man falls in the sea\nnewLine\nHe was a man of many nations\nHad a hundred souls and a hundred to go\nHe was a man of many nations\nTwo hearts, two hands, it's a slippery slope\nnewLine\nHe had a fear of being naked\nBut you're any other man in another man's clothes\nHe was a man of many nations\nWith revelations, oh, revelations\nnewLine\nHe wrote a book about the Bible\nAnd he wrote a book about men in the sky\nHe wrote a book about the smell of winter\nThen two, a little less simple to decipher\nnewLine\nSaying, “I am the water at the foot of the palms\nOh, I'm sand and wind and a shitty mirage\nBut either way, I'm a man of many nations!”\nnewLine\nWas it the mending of the gown\nOr the running it around?\nnewLine\nWas it the mending of the gown\nOr the running and the running it around?\nnewLine\nShe had a name, she had a spirit\nShe had a line in the play, if you waited to hear it\nBut a master of disguises\nHer demise was her design, they said\nnewLine\nWas it the mending of the gown\nOr the running, and the running, and the running it around?\nnewLine\nShe said, 'My name and my spirit are both corrupt\nAnd if you hold me close, you gotta hold me up'\nnewLine\nIt was the tender mending of this slender gown\nThat brought me bending to the ground\nnewLine\nNow you'll wear any old thing\nOh, you'll wear any old thing\nnewLine\nSo she wrapped herself in swaddling\nThat the fever deviated to a broken wing\nnewLine\nIt's an act, I think she's just pretending\nIt's an act, I think, she's just pretending\nnewLine\nIf you burn the virgin flags, then I will shake (Shake!)\nAs the heat waves in the sand\nnewLine\nThis one's for Maggie (This one's for Maggie!)\nThis one's for Sam (This one's for Sam!)\nnewLine\nThis one's for Maggie (This one's for Maggie!)\nThis one's for Sam (This one's for Sam!)\nnewLine\nOr any other random spirit lover busted\nI have lusted after you\nnewLine\nThe way bloodsuckers do!\nThe way bloodsuckers do!\nThe way bloodsuckers do!\nnewLine\nWas it the mending of the gown\nOr the running it around?\nnewLine\nWas it the mending of the gown\nOr the running, and the running\nAnd the running, and the running it around?\nnewLine\nIt was the tender mending of this slender gown\nThat brought me bending to the ground\nBut this ship was built to go down\nnewLine\nSee the paddle go up and the paddle go down!\nAnd the paddle go up and the paddle go down!\nnewLine\nAnd the paddle go up and the paddle go down!\nAnd the paddle go up and the paddle go down!","Would you say that you wish you were worse?\nWould you say that you wish you were worse than you are?\nSee, you made up a list of your luckiest stars\nAnd you made me familiar to you in the dark\nWhen you said that you wish you were worse than you are\nnewLine\nHey you with the gold which you keep or which keeps you in your place\nDo you recoil from it's jealous green and copper taste?\nOh, do you like to dance with it hanging like some hula dress so lightly off your waist?\nnewLine\nWas it magic or Midas that touched you?\nAnd by magic, I mean trickery and by Midas, I mean faith\nBy magic, I mean trickery and by Midas, I mean faith\nnewLine\nThe tricksters speaks of trickery, is your worth the work of the Midas touch?\nDo you close your eyes while you're dancing, the same you close your eyes in your lover's clutches?\nHow dare I speak of trickery, I am not bestowed with the Midas touch\nnewLine\nI don't close my eyes while I'm dancing the same way I close my eyes in my lover's clutches\nHow dare I speak of trickery, when the wild things singing are pulling their sham?\nYou can follow the lead of the jackal to see where I am\nnewLine\nYou can follow the lead of the jackal who waits for the kill to be made by a mightier hand\nYou made up a list of your luckiest stars, and you made me familiar to you in the dark\nnewLine\nYou made up a list of your luckiest stars, and you made me familiar to you in the dark\nAnd you made me familiar to you in the dark, when you said that you wish you were worse than you are\nnewLine\nAnd you made up a list of your luckiest stars, and you made me familiar to you in the dark\nAnd you made me familiar to you in the dark, when you said that you wish you were worse than you are\nnewLine\nAnd I follow the lead of the jackal to see where you are","You're the one who ran in the wild ‘cause you're the one the wild called\nAnd you're the one who followed the child to save the sun from how it falls\nnewLine\nYou're the one who had knives set aside for the throats of hunters\nBut they tricked you with a trinket and a name\nnewLine\nAnd I'm the one who sat at your capture and I'm the one who whispered low\nThat's the one who followed the child to save the son and look it's starting to snow!\nnewLine\nYou're the one who's riding around on a leopard\nYou're the one who's throwing his shit in the air!\nnewLine\nYou're the one whose wild hide will weather\nIn the weathering days to a leather\nMade for princes to lay their princely heads of hair!\nnewLine\nUpon the end of your feral days, upon the end of your feral days\nUpon the end of your feral days oh-oh-oh-oh-oooooooooh\nnewLine\nYou're the one who ran in the wild a virgin to a name\nAnd you're the one who lived off a forsaken land\nI'm the one who sat at your capture\nAnd let the snow fall on this whispering rapture\nAnd you're the one who's kissing your captor's hands\nnewLine\nWell shit, I know we're all growing old but where there's a will, there is a way, so way to go\nSay goodbye to your feral days, say goodbye to your feral days, say-ay goodbye-aye-aye-aye-aaaaaye\nnewLine\nCause you're the one who's riding around on a leopard ba-da-dum\nYou're the one who's throwing dead birds in the air\nAnd you're the one whose wild hide will weather\nIn the weathering days to a leather\nMade soft so princes can lay down their princely white heads of hair!\nnewLine\nSo say goodbye\nSay goodbye to your feral days\nSay-ay goodbye-aye-aye-aye-aye\nnewLine\nYour highness is holding your chains\nYour highness is holding your chains\nYour highness is holding your chains\nYour highness is holding your chains\nYour highness is holding your chains\nYour highness is holding your chains\nYour highness is holding your chains\nYour highness is holding your chains","Well I say it's just smoke\nSo you say it's the hair of ghosts\nSo I say it's the white hair of Poseidon\nEbbing in the tide in some dead sea\nnewLine\nSo you say it's some Shroud of Turin\nAnd the sun wore it white and the earth wore it thin\nOr the son wore it white and his faith wore it thin\nnewLine\nUnraveling heavenward\nIt's saddled to tiny birds\nOr other such winged things\nEither way they are struggling\nnewLine\nEither way they are miniature\nEither way they're invisible\nBut either way they're confused\nAs Hell would have them\nnewLine\nAnd the pattern of flight is chaotic and blind\nBut it's right cause chaos is yours and it's mine\nAnd chaos is luck and luck: love and love: blind\nnewLine\nThe pattern of flight is chaotic and blind\nBut it's right cause chaos is yours and chaos is mine, mine, mine\nAnd chaos is love and they say 'love is blind'\nnewLine\nBut they're subject to hating us\nOh, just like the rest of us\nOh, but just like the best of us\nThey need the rest of us to stay alive\nnewLine\nSo thats not where confusion lies\nThat's not where an allusion to the fact that the truth\nIs just smoke in your eyes does lie\nnewLine\nConfusion lies in which other wicked things to lie with\nConfusion lies in which other wicked things to lie with\nAnd chaos is yours, and chaos is mine\nAnd chaos is love and they say 'love is blind'\nnewLine\nSo I say oh, I see now, it's just smoke\nSo I say oh, I see now, it's just smoke\nOh I say oh, I see now, it's just smoke\nOh I say oh, I see now, it's just smoke"],w=Math.floor(Math.random()*Math.floor(2)),g=document.getElementById(w);console.log(w);var c=document.getElementById("modalBody");window.addEventListener("load",(function(e){c.style.display="flex"})),document.getElementById("start").addEventListener("click",(function(){t=!0,l(),c.style.display="none",g.play(),v(b)}));var m=document.getElementById("pause"),f=!0;m.addEventListener("click",(function(){f?(m.innerHTML="Start Sound",g.pause(),f=!1):(m.innerHTML="Kill Sound",g.play(),f=!0)}));var p=y[w].split("newLine\n"),b=0,k=document.getElementById("showLyrics"),L=document.getElementById("inputLyrics"),I=0;L.addEventListener("input",(function(){i=!i;var e=k.querySelectorAll("span"),n=L.value.split(""),o=!0,t=!1;e.forEach((function(e,a){var i=n[a];null==i?(e.className="neither",o=!1):i==e.innerText?(e.className="correct",I===n.length-1&&(I++,t=!0),console.log(I),console.log(n.length-1)):(e.className="incorrect",o=!1,t=!1)})),t&&u(),o&&b<p.length-1?(b++,v(b),I=0):b>=p.length-1&&alert("You Win!")}));var v=function(e){k.innerHTML="",p[e].split("").forEach((function(e){var n=document.createElement("span");n.innerText=e,k.appendChild(n)})),L.value=""}}]);
//# sourceMappingURL=main.js.map