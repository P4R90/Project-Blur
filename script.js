
// Asign Variables
const loadText = document.querySelector('.loadingText');
const bg = document.querySelector('.background');

let load = 0;
let int = setInterval(blurring, 30);


/* Blurring is a function used to increase the value of a loading counter
   As the counter loads, the opacity of the counter declines, along with
   blur level of the background image */
function blurring() {
    // Add 1 to load every 30 ms
    load++
    
    // Once load reaches above 99 (100) stop calling function.
    if(load > 99) {
        clearInterval(int);
    }
    
    //Within Load text display the current value of load
    loadText.innerText =  `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}


// Allows for the mapping of numbers. We can map opacity, and image blur to the loading time.
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}