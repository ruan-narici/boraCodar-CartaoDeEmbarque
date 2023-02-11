const aviator = document.querySelector('#aviaton');
let x = 0;
let y = 0;


moveAviator = (x,y) => {
    aviator.style.left = `${x}px`;
    aviator.style.bottom = `${y}px`;

}

let interval = setInterval(() => {
    moveAviator(x,y);
    if (x < 1000 && y < 1000) {
        x++;
        y++;
        console.log(x,y);
    } else {
        console.log('end');
        clearInterval(interval);
    }
},10);
