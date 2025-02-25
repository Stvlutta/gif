const textElement = document.getElementById('text');
let colors = ['#333', '#007BFF', '#28A745', '#FFC107'];
let colorIndex = 0;

setInterval(() => {
    textElement.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}, 4000); // Sync with animation duration