function adjustClipPath() {
    const header = document.getElementById('opening');
    const img = document.getElementById('opening-pic');
    const title = document.getElementById('title');

    const headerWidth = header.offsetWidth;
    const imageWidth = img.offsetWidth;
    const imageWidthPercent = (imageWidth / headerWidth) * 100;

    // New clip-path
    titleWidthPercent = Math.min(100-imageWidthPercent+20, 90)
    title.style.width = `${titleWidthPercent}%`
    title.style.clipPath = `polygon(0 0, 100% 0, ${(100 - imageWidthPercent)/titleWidthPercent*100}% 100%, 0 100%)`;
}   


if (window.matchMedia("(min-width: 500px)").matches) {
    window.addEventListener('load', adjustClipPath);
    window.addEventListener('resize', adjustClipPath);
}