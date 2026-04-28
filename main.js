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

gsap.utils.toArray(".node").forEach((node, i) => {
    gsap.from(node, {
        scrollTrigger: {
            trigger: node,
            start: "top 90%"
        },
        x: -30,
        opacity: 0,
        duration: 0.5,
        delay: i * 0.1,
        ease: "power2.out"
    });
});

const nodes = document.querySelectorAll(".node");
const detail = document.getElementById("treeDetail");
const title = document.getElementById("detailTitle");
const text = document.getElementById("detailText");

nodes.forEach(node => {
    node.addEventListener("mouseenter", () => {

        const t = node.dataset.title;
        const d = node.dataset.text;

        // データがあるノードだけ反応
        if (t && d) {
            title.textContent = t;
            text.textContent = d;

            detail.classList.add("active");
        }
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