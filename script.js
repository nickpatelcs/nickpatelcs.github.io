// Simple scroll animation
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const trigger = window.innerHeight / 1.2;
        if (top < trigger) {
            section.classList.add('fade-in');
        }
    });
});

// Optional: glowing pulse for headings
const glowHeadings = document.querySelectorAll('.glow-text');
setInterval(() => {
    glowHeadings.forEach(h => {
        h.style.textShadow = `0 0 ${Math.random()*10 + 5}px #00B9FE, 0 0 ${Math.random()*20 + 10}px #00B9FE66`;
    });
}, 1000);
