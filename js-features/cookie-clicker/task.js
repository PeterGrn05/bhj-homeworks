let score = 0;
const cookie = document.getElementById('cookie');
const click = document.getElementById('clicker__counter')

function touch () {
    score += 1;
    click.textContent = score;
    cookie.width = 180;
    setTimeout(() => {cookie.width = 200;}, 50);
}

cookie.onclick = touch;