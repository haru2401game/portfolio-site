gsap.registerPlugin(ScrollTrigger);

/* =========================
FADE（残す）
========================= */
function initFade() {
    const targets = document.querySelectorAll("[data-fade]");
    if (!targets.length) return;

    gsap.fromTo(targets,
        { opacity: 0, y: 30, scale: 0.98 },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.3,
            stagger: 0.05,
        }
    );
}

/* =========================
WORKS CURSOR（残す）
========================= */
function initSaveCursor() {

    const slots = document.querySelectorAll(".save-slot");
    if (!slots.length) return;

    let index = 0;

    const update = () => {
        slots.forEach((el, i) => {
            el.classList.toggle("active", i === index);
        });
    };

    update();

    document.addEventListener("keydown", (e) => {

        if (e.key === "ArrowDown") index = (index + 1) % slots.length;
        if (e.key === "ArrowUp") index = (index - 1 + slots.length) % slots.length;
        if (e.key === "Enter") slots[index].click();

        update();
    });
}

function initSkillBars() {

    const bars = document.querySelectorAll(".rpg-fill");

    bars.forEach(bar => {

        const level = Number(bar.dataset.level);

        gsap.set(bar, { width: "0%" });

        gsap.to(bar, {
            width: level + "%",
            duration: 0.3,
        });
    });
}

/* =========================
INIT
========================= */
window.addEventListener("load", () => {

    gsap.registerPlugin(ScrollTrigger);

    initFade();
    initSkillBars();
    initSaveCursor();
});