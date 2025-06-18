const rotatorFunction = document.querySelectorAll('.rotator__case');
let rotatorIndex = 0;

function interval() {
    rotatorFunction[rotatorIndex].classList.remove('rotator__case_active');
    rotatorIndex = (rotatorIndex + 1) % rotatorFunction.length;
    rotatorFunction[rotatorIndex].classList.add('rotator__case_active');
};

setInterval(interval, 1000);