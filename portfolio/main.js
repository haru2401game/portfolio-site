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
});