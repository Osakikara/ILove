let fallDirection = 1;
document
  .querySelectorAll('input[name="trailside"]')
  .forEach(
  r => {
    r.addEventListener(
      'change',
      e => {
        fallDirection = parseInt(e.target.value);
        //console.log(fallDirection);
      }
    );
  }
);

let x1=0, y1=0;
window.client
const 
  vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
  dist_to_draw = 50,
  delay = 1000,
  fsize = [
    '1.1rem', '1.4rem', '.8rem', '1.7rem'
  ],
  colors = [
  '#E23636',
  '#F9F3EE',
  '#E1F8DC',
  '#B8AFE6',
  '#AEE1CD',
  '#5EB0E5'
],
  rand = (min, max) => 
    Math.floor(Math.random() * (max - min + 1)) + min,
  selRand = (o) => o[rand(0, o.length -1)],
  distanceTo =  (x1, y1, x2, y2) => 
    Math.sqrt((Math.pow(x2-x1,2))+(Math.pow(y2-y1,2))),
  shouldDraw = (x, y) => 
    (distanceTo(x1, y1, x, y) >= dist_to_draw),
  addStr = (x, y) => {
    const str = document.createElement("div");
    str.innerHTML = '&#10022;';
    str.className = 'star';
    str.style.top = `${y + rand(-20,20)}px`;
    str.style.left = `${x}px`;
    str.style.color = selRand(colors);
    str.style.fontSize = selRand(fsize);
    document.body.appendChild(str);
    //console.log(rand(0, 3));
    const fs = 10 + 5 * parseFloat(getComputedStyle(str).fontSize);
    //console.log(vh, y, fs);
    //console.log((y+fs)>vh?vh-y:fs);
    str.animate(
      {
        translate: [
          `${rand(-5, 5)}px ${((y+fs)>vh?vh-y:fs) * fallDirection * .3}px`,
          `${rand(-20, 20)}px ${((y+fs)>vh?vh-y:fs) * fallDirection}px`],
        opacity: [1,0],
        transform: ['rotateX(0) rotateY(0)',`rotateX(${rand(1, 500)}deg) rotateY(${rand(1, 500)}deg)`]
      }, {
        duration: delay,
        fill: 'forwards',
        rangeStart: ["cover 0% ", "cover 40%"],
        rangeEnd: ["cover 40% ", "cover 100%"]
    });
    //could add a animation terminate listener, but why add the additional load
    setTimeout(() => {
        str.remove();
      }, delay);
  }

addEventListener("mousemove", (e) => {
  const {clientX, clientY} = e;
  if(shouldDraw(clientX, clientY)){
    addStr(clientX, clientY);
    x1 = clientX;
    y1 = clientY;
  }
});




var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}