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