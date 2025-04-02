const div1 = document.getElementById("header");
const div2 = document.getElementById("container");

let isScrolling = false;

function animate() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const progress = Math.min(scrollY / windowHeight, 1);

    div1.style.opacity = 1 - progress;
    div2.style.opacity = progress;
    div1.style.transform = `translateY(${-50 * progress}px)`;
    div2.style.transform = `translateY(${50 * (1 - progress)}px)`;
}

function checkSnap() {
    if (isScrolling) return;
    isScrolling = true;

    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    let targetScroll = null;

    // Snap only if the user is near the transition between header and container
    if (scrollY < windowHeight * 0.4) {
        targetScroll = 0; // Snap to top
    } else if (scrollY > windowHeight / 4 && scrollY < windowHeight) {
        targetScroll = windowHeight; // Snap to start of container
    }

    if (targetScroll !== null) {
        window.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
        });

        setTimeout(() => {
            isScrolling = false;
        }, 300); // Smooth effect
    } else {
        isScrolling = false;
    }
}

window.addEventListener('scroll', animate);
window.addEventListener('scroll', () => {
    clearTimeout(window.snapTimeout);
    window.snapTimeout = setTimeout(checkSnap, 100);
});