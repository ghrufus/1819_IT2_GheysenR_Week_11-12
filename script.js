// GRADIENTS
function generate() {

  var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];

  function populate(a) {
    for ( var i = 0; i < 6; i++ ) {
      var x = Math.round( Math.random() * 14 );
      var y = hexValues[x];
      a += y;
    }
    return a;
  }

  var newColor1 = populate('#');
  var newColor2 = populate('#');
  var angle = Math.round( Math.random() * 360 );

  var gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";

  document.getElementById("container").style.background = gradient;
}
document.onload = generate();



// SLIDESHOW
/*let mijnDivs = document.querySelector(".slideshow");
let toon = 1;

for (let i = 1; i < mijnDivs.length; i++) {
  mijnDivs[i].className = "verborgen";
}

function volgende() {
  for(let i = 0; i < mijnDivs.length; i++) {
    mijnDivs[i].className = "verborgen";
  }
  mijnDivs[toon].className = "";
  toon++;
  if (toon === 3) {
    toon = 0;
  }
}

function pauzeer() {
  clearInterval(carousel);
  mijnParagrafen[toon].classList.remove("verborgen");
}

let carousel = setInterval(volgende, 1000);
for (let i = 0; i < mijnDivs.length; i++) {
  mijnDivs[i].addEventListener("click", pauzeer)
} */

$("#slideshow > div:gt(0)").hide();

setInterval(function(){
  $("#slideshow > div:first")
  .fadeOut(200)
  .next()
  .fadeIn(200)
  .end()
  .appendTo("#slideshow");
  }
  , 3000);

/* let mijnImgs = document.querySelectorAll("img");
let positie = 0;


function main() {
  let i = 0;
  while (i < mijnImgs.length) {
    if (mijnImgs.classlist.contains("aanwezig")) {
        mijnImgs[i].classList.remove("aanweizg");
        positie = i;
    }

    if (positie === 3) {
      positie = 0;
    }
  }
  document.querySelectorAll("img")[positie].className = "aanwezig";
}

setInterval(main,1000); */





/*
function main() {
			// STAP 4: doorloop de divs met while loop
      let i = 0;
      while (i < mijnDivs.length) {
            if (mijnDivs[i].classList.contains("gekleurd")) {
                mijnDivs[i].classList.remove("gekleurd");
                positie = i;
                }
            i++;
      }
      if (positie === 24) {
            richting = "op"
      } else if (positie === 0) {
            richting = "neer"
      }

      if (richting === "neer") {
            positie++;
       } else {
            positie--;
       }

      document.querySelectorAll("div")[positie].className = "gekleurd";
} */
