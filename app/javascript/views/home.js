let carousel = document.querySelector('.carousel');
let cells = carousel.querySelectorAll('.carousel__cell');
let cellCount;
let selectedIndex = 0;
let cellWidth = carousel.offsetWidth;
let radius, theta;

function rotateCarousel() {
    let angle = theta * selectedIndex * -1;
    carousel.style.transform = 'translateZ(' + -radius + 'px) ' +
        'rotateY' + '(' + angle + 'deg)';
}

let prevButton = document.querySelector('.previous-button');
prevButton.addEventListener('click', function () {
    selectedIndex--;
    rotateCarousel();
});

let nextButton = document.querySelector('.next-button');
nextButton.addEventListener('click', function () {
    selectedIndex++;
    rotateCarousel();
})


function changeCarousel() {
    cellCount = 6;
    theta = 360 / cellCount;
    radius = Math.round((cellWidth / 2) / Math.tan(Math.PI / cellCount));
    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        if (i < cellCount) {
            // visible cell
            cell.style.opacity = 1;
            let cellAngle = theta * i;
            cell.style.transform = 'rotateY' + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
        } else {
            // hidden cell
            cell.style.opacity = 0;
            cell.style.transform = 'none';
        }
    }

    rotateCarousel();
}

changeCarousel();

