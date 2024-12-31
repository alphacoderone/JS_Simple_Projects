// To generate random colors
const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
  
// Function for changing colors
const changeColors = function () {
    const body = document.querySelector('body');
    body.style.backgroundColor = randomColor();
};
  
// Function to start color changes
let interval = null;
const startChangingColors = function () {
    if (!interval) {
        interval = setInterval(changeColors, 250);
    }
};
  
// Query to start color changes
document.querySelector('#start').addEventListener('click', startChangingColors);
  
// Function to stop color changes
const stopChangingColors = function () {
    clearInterval(interval);
    interval = null;
};
  
// Query to stop colors changes
document.querySelector('#stop').addEventListener('click', stopChangingColors);  