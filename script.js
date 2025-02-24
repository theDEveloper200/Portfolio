// for Background Design
const colors = ["whitesmoke"];

const numBalls = 250;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 470)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 3000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});

// for UI/UX text animation
const words = ["Designer", "Developer"];
let index = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;
const textElement = document.querySelector(".dev");

function typeEffect() {
    if (!isDeleting && charIndex < words[index].length) {
        currentWord += words[index].charAt(charIndex);
        charIndex++;
    } else if (isDeleting && charIndex > 0) {
        currentWord = currentWord.slice(0, -1);
        charIndex--;
    }
    
    textElement.textContent = currentWord;

    let typingSpeed = isDeleting ? 100 : 150;
    
    if (!isDeleting && charIndex === words[index].length) {
        typingSpeed = 3000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % words.length;
        typingSpeed = 1000;
    }
    
    setTimeout(typeEffect, typingSpeed);
}

typeEffect();




// for animation in work section
// let pages = document.querySelectorAll('.skw-page');
//         let currentIndex = 0;
//         let isScrolling = false;

//         function scrollPage(event) {
//             if (isScrolling) return;
//             isScrolling = true;

//             if (event.deltaY > 0 && currentIndex < pages.length - 1) {
//                 pages[currentIndex].classList.remove('active');
//                 currentIndex++;
//                 pages[currentIndex].classList.add('active');
//             } else if (event.deltaY < 0 && currentIndex > 0) {
//                 pages[currentIndex].classList.remove('active');
//                 currentIndex--;
//                 pages[currentIndex].classList.add('active');
//             }

//             setTimeout(() => { isScrolling = false; }, 900);
//         }

//         window.addEventListener('wheel', scrollPage);

//   let pages = document.querySelectorAll('.skw-page');
// let currentIndex = 0;
// let isScrolling = false;

// function scrollPage(event) {
//     if (isScrolling) return;
//     isScrolling = true;

//     setTimeout(() => {
//         if (event.deltaY > 0 && currentIndex < pages.length - 1) {
//             pages[currentIndex].classList.remove('active');
//             currentIndex++;
//             pages[currentIndex].classList.add('active');
//         } else if (event.deltaY < 0 && currentIndex > 0) {
//             pages[currentIndex].classList.remove('active');
//             currentIndex--;
//             pages[currentIndex].classList.add('active');
//         }
        
//         document.body.style.transition = "background 1s ease-in-out";
//         document.body.style.background = pages[currentIndex].getAttribute('data-bg');

//         setTimeout(() => {
//             isScrolling = false;
//         }, 800); // Adjusted to match animation duration
//     }, 300); // Delay before transition starts
// }

// document.querySelector('.skw-pages').addEventListener('wheel', scrollPage);


// for stars animation in skills
document.addEventListener("DOMContentLoaded", function () {
  const numStars = 50; // Number of stars
  const starsDiv = document.getElementById("my-stars-div"); // Target div

  for (let i = 0; i < numStars; i++) {
      let star = document.createElement("div");
      star.classList.add("star");

      // Random Position inside the div
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;

      // Random Blink Speed
      let duration = Math.random() * 3 + 1; // Between 1s and 4s
      star.style.animationDuration = `${duration}s`;

      starsDiv.appendChild(star); // Append stars inside the div
  }
});

// for box animation in footer
function createBox() {
  const box = document.createElement('div');
  box.classList.add('squarebox');
  
  let size = Math.random() * 70 + 30; // Random size between 20px - 70px
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  
  box.style.left = Math.random() * window.innerWidth + 'px'; // Random X position
  box.style.animationDuration = (Math.random() * 5 + 4) + 's'; // Random fall speed (4s - 9s)
  
  document.getElementById('falling-boxes').appendChild(box);
  
  setTimeout(() => { box.remove(); }, 5000); // Remove box after animation
}

setInterval(createBox, 500); // Generate a new box every 500ms

// ChatBox

document.getElementById('chatForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const phoneInput = document.getElementById('phone');
  const emailInput = document.getElementById('email');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!/^[0-9]{10}$/.test(phoneInput.value)) {
      alert('Phone number must be exactly 10 digits');
      return;
  }

  if (!emailPattern.test(emailInput.value)) {
      alert('Please enter a valid email address');
      return;
  }

  const responseMessage = document.getElementById('responseMessage');
  responseMessage.innerText = 'You will get a response soon!';
  responseMessage.style.display = 'block';
  
  setTimeout(() => {
      document.getElementById('chatForm').reset();
      responseMessage.style.display = 'none';
  }, 3000);
});

