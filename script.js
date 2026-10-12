
const app = document.getElementById("app");
const navLinks = document.getElementById("navLinks");
const menuBtn = document.getElementById("menuBtn");

const pages = {
    home: `
        <section class="hero">
        <div class="hero-layout">
    <div class="hero-content">
            <p class="eyebrow">CREATIVE DEVELOPER PORTFOLIO</p>
            <h1>Ideas into<br><span>digital reality.</span></h1>
            <p class="hero-text">
                Welcome to NOVA — a collection of web experiments,
                interactive applications and creative technology projects.
                Explore the work without full-page reloads.
            </p>
            <a href="#projects" class="primary-btn">Explore Projects →</a>
                </div>
    <div class="hero-visual">
        <img src="images/nova-hero.png" alt="Futuristic purple 3D technology artwork">
    </div>
</div>

            
            <div class="stats-strip">
                <div class="stat-item">
                    <span class="stat-number">04</span>
                    <span class="stat-label">Featured Projects</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">03</span>
                    <span class="stat-label">Core Technologies</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">SPA</span>
                    <span class="stat-label">Single Page Experience</span>
                </div>
            </div>

        </section>

        <section class="page-section">
            <p class="eyebrow">THE NOVA EXPERIENCE</p>
            <h1>Built to feel different.</h1>
            <p>
                A modern Single Page Application featuring client-side routing,
                responsive layouts, smooth transitions and interactive components.
            </p>
            <div class="card-grid">
                <article class="content-card">
                    <h3>01 / Seamless Navigation</h3>
                    <p>Move between views without reloading the entire document.</p>
                </article>
                <article class="content-card">
                    <h3>02 / Responsive Design</h3>
                    <p>A consistent experience across desktop, tablet and mobile.</p>
                </article>
            </div>
        </section>
    `,

    about: `
        <section class="page-section">
            <p class="eyebrow">A LITTLE ABOUT NOVA</p>
            <h1>Technology meets creativity.</h1>
            <p>
                NOVA is a student-built digital portfolio and Single Page
                Application created with HTML, CSS and vanilla JavaScript.
            </p>
            <p>
                The project demonstrates how a website can update its content
                dynamically, respond to URL changes and support browser history
                without loading a separate page for each section.
            </p>
            <div class="card-grid">
                <article class="content-card">
                    <h3>Our Mission</h3>
                    <p>Build useful digital experiences with clean design and simple technology.</p>
                </article>
                <article class="content-card">
                    <h3>Our Approach</h3>
                    <p>Combine accessible interfaces, responsive styling and client-side routing.</p>
                </article>
            </div>
        </section>
    `,

    projects: `
        <section class="page-section">
            <p class="eyebrow">SELECTED WORK / 2026</p>
            <h1>Projects that<br>bring ideas to life.</h1>
            <p>
                A selection of web, logic and game projects. Select a project
                to explore its purpose and technology.
            </p>

            <div class="card-grid project-grid">
                <article class="content-card project-card">
                    <img
                        class="project-image"
                        src="images/password-generator.jpg"
                        alt="Password generator application preview"
                        loading="lazy"
                        onerror="this.style.display='none'">
                    <p class="project-number">PROJECT 01</p>
                    <h3>Password Generator</h3>
                    <p>A utility that creates random passwords with customizable options.</p>
                    <p class="project-tags">HTML · CSS · JavaScript</p>
                </article>

                <article class="content-card project-card">
                    <img
                        class="project-image"
                        src="images/chess-game.jpg"
                        alt="Chess game interface preview"
                        loading="lazy"
                        onerror="this.style.display='none'">
                    <p class="project-number">PROJECT 02</p>
                    <h3>Chess Game</h3>
                    <p>A chess-themed game project focused on board layout and interaction.</p>
                    <p class="project-tags">Java · Game Logic</p>
                </article>

                <article class="content-card project-card">
                    <img
                        class="project-image"
                        src="images/portfolio-website.jpg"
                        alt="Responsive portfolio website preview"
                        loading="lazy"
                        onerror="this.style.display='none'">
                    <p class="project-number">PROJECT 03</p>
                    <h3>Responsive Portfolio</h3>
                    <p>A personal portfolio featuring responsive navigation and interactive UI elements.</p>
                    <p class="project-tags">HTML · CSS · JavaScript</p>
                </article>

                <article class="content-card project-card">
                    <img
                        class="project-image"
                        src="images/car-racing-game.jpg"
                        alt="Car racing game road and vehicle preview"
                        loading="lazy"
                        onerror="this.style.display='none'">
                    <p class="project-number">PROJECT 04</p>
                    <h3>Smart Car Racing</h3>
                    <p>A browser-based racing game experiment with a 3D car model and driving controls.</p>
                    <p class="project-tags">JavaScript · Three.js · 3D</p>
                </article>
            </div>
        </section>
    `,

    contact: `
        <section class="page-section">
            <p class="eyebrow">START A CONVERSATION</p>
            <h1>Let's connect.</h1>
            <p>
                Send a test message using the form below.
                This demonstration validates the input in your browser;
                it does not send email or store messages on a server.
            </p>

            <form class="contact-form" id="contactForm">
                <label for="contactName">Your Name</label>
                <input id="contactName" name="name" type="text"
                    placeholder="Enter your name"
                    autocomplete="name" required>

                <label for="contactEmail">Your Email</label>
                <input id="contactEmail" name="email" type="email"
                    placeholder="you@example.com"
                    autocomplete="email" required>

                <label for="contactMessage">Your Message</label>
                <textarea id="contactMessage" name="message"
                    placeholder="Write your message..." required></textarea>

                <button type="submit" class="primary-btn">Send Message →</button>
                <p class="form-message" id="formMessage" aria-live="polite"></p>
            </form>
        </section>
    `
};

function renderPage() {
    const route = window.location.hash.slice(1) || "home";

    if (Object.prototype.hasOwnProperty.call(pages, route)) {
        app.innerHTML = pages[route];
    } else {
        app.innerHTML = `
            <section class="page-section">
                <p class="eyebrow">ERROR 404</p>
                <h1>This route doesn't exist.</h1>
                <p>The page may have moved or the URL may be incorrect.</p>
                <a href="#home" class="primary-btn">Return Home →</a>
            </section>
        `;
    }

    document.querySelectorAll(".nav-link").forEach(link => {
        const active = link.getAttribute("href") === `#${route}`;
        link.classList.toggle("active", active);

        if (active) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });

    if (navLinks && menuBtn) {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open navigation menu");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("hashchange", renderPage);

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", String(isOpen));
        menuBtn.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });
}

document.addEventListener("submit", event => {
    if (event.target.id !== "contactForm") return;

    event.preventDefault();

    const form = event.target;
    const message = document.getElementById("formMessage");

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    message.textContent =
        "Thank you! Your demo message passed validation successfully.";
    message.style.color = "#a78bfa";
    form.reset();
});

renderPage();
