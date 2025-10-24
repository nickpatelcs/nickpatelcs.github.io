/* Fade-in animation */
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Project card entrance animation */
.project-card {
    background: rgba(40,40,40,0.85);
    padding: 25px;
    border-radius: 12px;
    border-left: 5px solid #00B9FE;
    transition: transform 0.3s, box-shadow 0.3s, opacity 0.6s;
    opacity: 0;
    transform: translateY(20px);
}
.project-card.visible {
    opacity: 1;
    transform: translateY(0);
}
