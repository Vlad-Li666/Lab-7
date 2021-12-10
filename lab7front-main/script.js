const $area = document.querySelector('body');
let menu = document.querySelector('.menu');

let action = false;

let condition = false;

let startCoords = {
    x: 0
}

let currentCoords = {
    x: 0
}

let distance = {
    x: -300
}

function boxController(coords) { 
    menu.style.left = coords.x + "px";

    if (coords.x != -300) {
        document.querySelector('.blackout').classList.add('open');
    }
    else{
        document.querySelector('.blackout').classList.remove('open');
    }
}

$area.addEventListener('mousedown', function(e) {
    action = true;
    menu.classList.remove('animate');
    if(distance.x == 0)
    {
        startCoords.x = e.pageX;
    }
    else if(distance.x == -300)
    {
        startCoords.x = e.pageX + 300;
    }
})

$area.addEventListener('mouseup', function(e) {
    action = false;
    menu.classList.add('animate');

    if(distance.x < -150) {
        menu.style.left = -300 + "px";
        distance.x = 300;
        document.querySelector('.blackout').classList.remove('open');
    }
    else{
        menu.style.left = 0;
        distance.x = 0;
    }
})

$area.addEventListener('mousemove', function(e) {
    if(action)
    {
        currentCoords.x = e.clientX;

        distance.x = currentCoords.x - startCoords.x;

        // промежуток для переменной distance.x
        if(distance.x > 0) {
            distance.x = 0;
        }
        else if(distance.x < -300) {
            distance.x = -300;
        }
        boxController(distance);
    }
})