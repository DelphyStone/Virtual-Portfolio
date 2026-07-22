# Delphy Stone — Virtual Portfolio

## Overview
A personal portfolio website showcasing my background as a final-year BSc Information Technology student, along with my projects, education, and technical skills. Built from scratch with HTML, CSS, and vanilla JavaScript — no frameworks — to demonstrate core front-end fundamentals.

## Live Demo
🔗 [View the live site](https://delphystone.github.io/Virtual-Portfolio/)

## Features
- Custom animated loading screen with a progress bar and status messages
- Responsive navigation with a desktop nav bar and a mobile hamburger menu
- Animated typing effect cycling through job titles/roles
- About section with a technical skills breakdown (progress bars per language/tool)
- Education section detailing academic background and key courses
- Projects section with GitHub and Live Demo links for each project
- Working contact form that emails submissions directly via Formspree
- Fully responsive layout across desktop, tablet, and mobile via media queries

## Tech Stack
- **HTML5** — semantic page structure
- **CSS3** — custom properties (CSS variables), Flexbox, Grid, keyframe animations, media queries
- **JavaScript** — DOM manipulation, event listeners, no external frameworks
- **[Formspree](https://formspree.io/)** — handles contact form submissions and email delivery
- **Google Fonts** — Poppins (body text), JetBrains Mono (loader)
- **GitHub Pages** — hosting/deployment

## Project Structure
Virtual-Portfolio/
├── index.html            # Main page — all sections live here
├── headerstyle.css       # Nav bar + hamburger menu styling
├── sectionstyle.css      # General section layout (profile, about)
├── Education.css         # Education section styling
├── Projectstyle.css       # Projects section styling
├── Contact.css            # Contact section + form styling
├── Animations.css        # Loading screen animation styling
├── mediaqueries.css       # Responsive breakpoints for all sections
├── script.js              # Hamburger menu, typing effect, loader logic, contact form handler
├── ICONS/                 # Icon assets (social links, tech stack, education, etc.)
├── PROJECTS/               # Project screenshot images
├── ME.webp                 # Profile picture
└── Stone TD CV.pdf         # Downloadable CV

## Getting Started / Running Locally
1. Clone the repository:
   git clone https://github.com/DelphyStone/Virtual-Portfolio.git
2. Open the folder in VS Code
3. Install the **Live Server** extension (if not already installed)
4. Right-click "index.html" → **Open with Live Server**
5. The site will open at `http://127.0.0.1:5500` (or similar)

## Contact Form Setup
The contact form submits directly to [Formspree](https://formspree.io/), which forwards messages to my email — no backend server required. JavaScript intercepts the default form submission (`script.js`) so visitors stay on the page and see a confirmation message instead of being redirected to a generic Formspree page.

To reconfigure the form for a different email address:
1. Create a new form at [formspree.io](https://formspree.io)
2. Replace the `action` URL in the `<form>` tag in `index.html` with the new Formspree endpoint

## Future Improvements
- [ ] Add more project repos and live demo links (currently placeholders)
- [ ] Expand the Education section with an Experience section
- [ ] Add a dark mode toggle
- [ ] Add starry background animation

## Contact
- **Email:** tshegostone31@gmail.com
- **LinkedIn:** [linkedin.com/in/tshegofatso-stone-390085347](https://www.linkedin.com/in/tshegofatso-stone-390085347/)

## License
This project is open for viewing and reference. Please reach out if you'd like to reuse any part of it.
