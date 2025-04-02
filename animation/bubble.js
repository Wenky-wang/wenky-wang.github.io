function getRandomGradientStages() {
    const colorCombos = [
        ["rgba(255,0,150,0.8)", "rgba(0,255,255,0.4)", "rgba(255,255,0,0.6)"],  // Pink, Cyan, Yellow
        ["rgba(128,0,128,0.8)", "rgba(255,165,0,0.4)", "rgba(0,255,255,0.6)"],  // Purple, Orange, Cyan
        ["rgba(255,105,180,0.8)", "rgba(0,255,127,0.4)", "rgba(255,69,0,0.6)"], // Pink, Green, Red-Orange
        ["rgba(70,130,180,0.8)", "rgba(255,255,0,0.4)", "rgba(0,191,255,0.6)"], // Steel Blue, Yellow, Deep Sky Blue
        ["rgba(255,0,0,0.8)", "rgba(0,0,255,0.4)", "rgba(0,255,0,0.6)"]         // Red, Blue, Green
    ];
    
    return colorCombos[Math.floor(Math.random() * colorCombos.length)];
}

function createBubble() {
    const container = document.querySelector('.bubble-container');
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // 🎯 Random size (smaller bubbles)
    const size = Math.random() * 20 + 5; // 5px to 20px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Random position
    bubble.style.left = `${Math.random() * 100}vw`;

    // Random animation duration
    const duration = Math.random() * 4 + 3; // 5s to 7s
    bubble.style.animationDuration = `${duration}s`;

    // 🎨 Generate a unique gradient for this bubble
    const colors = getRandomGradientStages();

    // Apply an inline animation using CSS variable
    bubble.style.setProperty("--color1", colors[0]);
    bubble.style.setProperty("--color2", colors[1]);
    bubble.style.setProperty("--color3", colors[2]);

    container.appendChild(bubble);

    // Remove bubble after animation ends
    setTimeout(() => {
        bubble.remove();
    }, duration * 1000);
}

// Generate bubbles continuously
setInterval(createBubble, 70);


// function createBubble() {
//     const container = document.querySelector('.bubble-container');

//     // Create multiple smaller bubbles at once
//     const bubbleCount = Math.random() * 2 + 2; // 2 to 4 bubbles per call
//     for (let i = 0; i < bubbleCount; i++) {
//         const bubble = document.createElement('div');
//         bubble.classList.add('bubble');

//         // 🎯 Smaller size range: 5px to 20px
//         const size = Math.random() * 15 + 5; // 5px to 20px
//         bubble.style.width = `${size}px`;
//         bubble.style.height = `${size}px`;

//         // Random position
//         bubble.style.left = `${Math.random() * 100}vw`;

//         // Random animation duration
//         const duration = Math.random() * 4 + 3; // 4s to 7s
//         bubble.style.animationDuration = `${duration}s, 4s`;

//         container.appendChild(bubble);

//         // Remove bubble after animation ends
//         setTimeout(() => {
//             bubble.remove();
//         }, duration * 1000);
//     }
// }

// // Reduce interval time for more frequent smaller bubbles
// setInterval(createBubble, 100);