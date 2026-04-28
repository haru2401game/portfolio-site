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

gsap.utils.toArray(".work-card").forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.1,
        ease: "power3.out"
    });
});

/* =========================
INIT
========================= */
window.addEventListener("load", () => {

    gsap.registerPlugin(ScrollTrigger);

    initFade();
    initSkillBars();
});