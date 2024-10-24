document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.querySelector(".hamburger-button");
    const menuOverlay = document.createElement("div");
    const closeBtn = document.createElement("span");

    menuOverlay.classList.add("overlay-menu");
    closeBtn.classList.add("menu-close");
    closeBtn.innerHTML = "&times;";
    menuOverlay.innerHTML = `
        <nav>
            <ul>
                <li><a href="#about" class="menu-link">About</a></li>
                <li><a href="#projects" class="menu-link">Projects</a></li>
                <li><a href="#contact" class="menu-link">Contact</a></li>
            </ul>
        </nav>
    `;

    menuOverlay.prepend(closeBtn);
    document.body.appendChild(menuOverlay);

    hamburgerBtn.addEventListener("click", () => {
        menuOverlay.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        menuOverlay.classList.remove("active");
    });

    document.querySelectorAll(".menu-link").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            menuOverlay.classList.remove("active");
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
