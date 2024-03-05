let countDownDate = new Date("June 12, 2024 23:59:59").getTime();


let counter = setInterval(() => {

let dateNow = new Date().getTime();

let dateDiff = countDownDate - dateNow;


let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

if (dateDiff < 0) {
    clearInterval(counter);
}
}, 1000);






let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
  // Skills Animate Width
if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
    span.style.width = span.dataset.width;
    });
}
  // Stats Increase Number
if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
    nums.forEach((num) => startCount(num));
    }
    started = true;
}
};


function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
        clearInterval(count);
    }
    }, 2000 / goal);
}





// Change image in vid section
const myImg = document.getElementById("myImg");
const myButton = document.getElementById("mybtn1");
const myButton2 = document.getElementById("mybtn2");
const myButton3 = document.getElementById("mybtn3");
const myButton4 = document.getElementById("mybtn4");
const myButton5 = document.getElementById("mybtn5");
const myButton6 = document.getElementById("mybtn6");
const myButton7 = document.getElementById("mybtn7");


myButton.addEventListener("click", function() {
  myImg.src = "../Zero-three-temp/imgs/video-preview.jpg";
});

myButton2.addEventListener("click", function() {
  myImg.src = "../Zero-three-temp/imgs/image5.jpg";
});

myButton3.addEventListener("click", function() {
  myImg.src = "../Zero-three-temp/imgs/image3.webp";
});

myButton4.addEventListener("click", function() {
  myImg.src = "../Zero-three-temp/imgs/image4.jpg";
});

myButton5.addEventListener("click", function() {
  myImg.src = "../Zero-three-temp/imgs/image2.jpg";
});

myButton6.addEventListener("click", function() {
  myImg.src = "../Zero-three-temp/imgs/image6.jpg";
});

myButton7.addEventListener("click", function() {
  myImg.src = "../Zero-three-temp/imgs/image7.jpg";
});






// Calc Scroll Page

let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
})







// Mega menu Button
let links = document.getElementById("mega-menu");
let opacity = 0;
function hideShow() {
  if(opacity == 1) {
    links.style.opacity = 1;
    links.style.zIndex = 100;
    opacity = 0;
    
  } else {
    links.style.opacity = 0;
    links.style.zIndex = 0;
    opacity = 1;
  }
}