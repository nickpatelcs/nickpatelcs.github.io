// Fade-in sections on scroll
const faders = document.querySelectorAll('.fade-in');
const projectCards = document.querySelectorAll('.project-card');

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => { appearOnScroll.observe(fader); });
projectCards.forEach(card => { appearOnScroll.observe(card); });

// Glowing pulse for headings
const glowHeadings = document.querySelectorAll('.glow-text');
setInterval(() => {
    glowHeadings.forEach(h => {
        h.style.textShadow = `0 0 ${Math.random()*10 + 5}px #00B9FE, 0 0 ${Math.random()*20 + 10}px #00B9FE66`;
    });
}, 1000);
