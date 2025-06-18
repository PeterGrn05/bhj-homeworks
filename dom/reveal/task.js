function isVisible(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

function revealScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        if (isVisible(reveal)) {
            reveal.classList.add('reveal_active');
        }
    });
}

window.addEventListener('scroll', revealScroll);
window.addEventListener('load', revealScroll);