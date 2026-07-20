function toggleMenu()
{
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");  
}

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