function toggleMenu()
{
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");  
}

/*CONTACT FORM*/

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" }
    })
    .then(response => {
        if (response.ok) {
            alert("Thanks! Your message has been sent.");
            form.reset();
        } else {
            alert("Oops, something went wrong. Please try again or email me directly.");
        }
    })
    .catch(() => {
        alert("Oops, something went wrong. Please try again or email me directly.");
    });
});

/*ANIMATED TYPING*/

const words = 
[
    "Software Developer",
    "Web Developer",
    "Problem Solver",
    "IT Student",
    "Python Programmer",
    "Data Analyst"
];

const typingElement = document.querySelector(".typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type(){

    const currentWord = words[wordIndex];

    if(!deleting)
    {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if(charIndex === currentWord.length){
            deleting = true;
            setTimeout(type,1500);
            return;
        }

    }
    else
    {

        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if(charIndex === 0){
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
       }

    }
    setTimeout(type, deleting ? 60 : 120);
}

type();


/*LOADING ANIMATION*/
const messages = [
    { at: 0,   text: "initializing" },
    { at: 15,  text: "loading assets" },
    { at: 40,  text: "compiling components" },
    { at: 68,  text: "linking modules" },
    { at: 90,  text: "finalizing" },
    { at: 100, text: "ready" }
  ];
 
  const fill = document.getElementById('progressFill');
  const statusEl = document.getElementById('status');
  const percentEl = document.getElementById('percent');
 
  let progress = 0;
  let msgIndex = 0;
 
  function setStatus(text){
    statusEl.innerHTML = '<span class="prompt">&gt;</span> ' + text;
  }
 
function tick()
{
    // Uneven, slightly organic pacing rather than a linear crawl
    const step = progress < 70 ? Math.random() * 4 + 1.5 : Math.random() * 1.5 + 0.3;
    progress = Math.min(100, progress + step);
 
    fill.style.width = progress + '%';
    percentEl.textContent = Math.floor(progress) + '%';
 
    while (msgIndex < messages.length - 1 && progress >= messages[msgIndex + 1].at) {
      msgIndex++;
      setStatus(messages[msgIndex].text);
    }
 
    if (progress < 100) {
      requestAnimationFrame(() => setTimeout(tick, 60));
    } else {
      setStatus("ready");
      setTimeout(onLoadComplete, 400);
    }
  }
 
function onLoadComplete()
{
    const loader = document.getElementById('loader');
    const content = document.getElementById('portfolio-content');

    loader.style.transition = 'opacity 0.5s ease';
    loader.style.opacity = '0';

    content.style.visibility = 'visible';
    content.style.transition = 'opacity 0.6s ease';
    content.style.opacity = '1';

    document.body.style.overflow = 'auto';
    document.body.style.display = 'block';
    document.body.style.height = 'auto';

    document.documentElement.style.overflow = 'visible';
    document.documentElement.style.display = 'block';
    document.documentElement.style.height = 'auto';

    window.scrollTo(0, 0);

    setTimeout(() => loader.remove(), 500);
}

tick();