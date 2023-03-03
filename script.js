const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');
const counter = document.querySelector('.counter');


// Counter Color
function counterColor() {
    if (parseInt(counter.textContent) > 0) {
        counter.style.color = '#008000';
    } else if (parseInt(counter.textContent) < 0) {
        counter.style.color = 'red';
    } else if (parseInt(counter.textContent) == 0) {
        counter.style.color = 'blue';
    }

    return;
}


// Button Function
decrease.addEventListener('click', function () {
    counter.textContent = parseInt(counter.textContent) - 1;
    counterColor();
});

reset.addEventListener('click', function () {
    counter.textContent = 3;
    counter.style.color = '#008000';
});

increase.addEventListener('click', function () {
    counter.textContent = parseInt(counter.textContent) + 1;
    counterColor();
});


// Arrow Key for Button
document.onkeydown = (e) => {
    e = e || window.event;
    
    if (e.keyCode === 38) {
        counter.textContent = parseInt(counter.textContent) + 1;
        counterColor();
    } else if (e.keyCode === 40) {
        counter.textContent = parseInt(counter.textContent) - 1;
        counterColor();
    }
}