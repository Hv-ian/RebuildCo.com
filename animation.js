$(function() {
                
  var welcomeSection = $('.welcome-section'),
      enterButton = welcomeSection.find('.enter-button');
  
  setTimeout(function() {
      welcomeSection.removeClass('content-hidden');
  }, 1000);
  
  enterButton.on('click', function(e) {
    welcomeSection.addClass('content-hidden').fadeOut();
    
  });
});

const firstGreetings = [
  "Welcome to",
  "Добро пожаловать в",
  "こんにちは ",
  "Բարիգալուստ"
];
const secondGreetings = [
  "REBUILD CO",
  "REBUILD CO",
  "Rebuild CO",
  "Rebuild CO"
]
const languageChoice = [
  "Please choose a language:",
  "Пожалуйста, выберите язык:",
  "言語を選択してください:",
  "խնդրում ենք ընտրել լեզու:"
]

let i = 0;
let j = 0;
let z = 0;
setInterval(() => {
  document.getElementById("greetingOne").innerHTML = firstGreetings[i];
  document.getElementById("greetingSec").innerHTML = secondGreetings[j];
  document.getElementById("welcome_language").innerHTML = languageChoice[z];
  i = (i + 1) % firstGreetings.length;
  j = (j + 1) % secondGreetings.length;
  z = (z + 1) % languageChoice.length;

},4500);


// <-----------------  -----------------> numbers ubdate
function update() {
  let counts1 = setInterval(updated1);
  let upto1 = 0;
  function updated1() {
    var count1 = document.getElementById("counter1");
    count1.innerHTML = ++upto1;
    if (upto1 === 348) {
      clearInterval(counts1);
    }
  }
}

function update2() {
  let counts2 = setInterval(updated2);
  var upto2 = 0;
  function updated2() {
    var count1 = document.getElementById("counter2");
    count1.innerHTML = ++upto2;
    if (upto2 === 522) {
      clearInterval(counts2);
    }
  }
}

function update3() {
  let counts3 = setInterval(updated3);
  let upto3 = 0;
  function updated3() {
    var count1 = document.getElementById("counter3");
    count1.innerHTML = ++upto3;
    if (upto3 === 250) {
      clearInterval(counts3);
    }
  }
}

function checkSection() {
  const section = document.querySelector('.section9');
  if (!section) {
    return;
  }

  const rect = section.getBoundingClientRect();

  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    update();
    update2();
    update3();
  }
}

// <-----------------------------  -----------------------------------------> backgound update navbar


setTimeout(function() {

}, 3000);


function backgroundChange() {
  let nav = document.getElementById('nav');
  nav.style.background = "linear-gradient(-45deg, #ffcc00af, #ed9e0096, #d29a01a7, #ffb700a6)"
}

function normalBackground() {
  let nav = document.getElementById('nav');
  nav.style.background = "linear-gradient(-45deg, #ffcc00, #ed9e00, #d29a01, #ffb700)"
}

window.addEventListener('scroll', checkSection)
// Setup isScrolling variable
var isScrolling;

// Listen for scroll events
window.addEventListener('scroll', function ( event ) {
backgroundChange();
// Clear our timeout throughout the scroll
window.clearTimeout( isScrolling );

// Set a timeout to run after scrolling ends
isScrolling = setTimeout(function() {

  // Run the callback
  normalBackground();

}, 2000);

}, false);



// <-------------------------------------------------- ----------------------------------------------->

// const nav = document.querySelector('nav');
// let prevScroller = window.pageYOffset;

// window.addEventListener('scroll', () => {
//   let currentScroller = window.pageYOffset;

//   if(prevScroller < currentScroller) {
//     nav.classList.add('hide');
//   }else {
//     nav.classList.remove('hide')
//   }
// })

