document.addEventListener("DOMContentLoaded", () => {
    let carousel = document.querySelector('.carousel');
    let cells = carousel.querySelectorAll('.carousel__cell');
    let cellCount = 6;
    let selectedIndex = 0;
    let theta = 360 / cellCount;
    let radius = 288;
    let activeIndex = 0;
    let animationOffset = 0;

    function rotateCarousel() {
        let angle = theta * selectedIndex * -1;
        let scrollAngle = getScrollAngle();
        carousel.style.transform =
            `translateZ(-${radius}px) rotateX(${scrollAngle}deg) rotateY(${angle}deg)`;

        for (let i = 0; i < cells.length; i++) {
            let cell = cells[i];
            if (i < cellCount) {
                let cellAngle = theta * i;
                let totalAngle = (cellAngle + angle) % 360;
                if (totalAngle < 0) totalAngle += 360; // Normalize to 0-360
                let baseTransform =
                    `rotateY(${cellAngle}deg) translateZ(${radius}px) rotateY(${-cellAngle - angle}deg)`;

                if (Math.abs(totalAngle) < theta / 2 || Math.abs(totalAngle - 360) < theta / 2) {
                    activeIndex = i;
                    cell.style.transform = `${baseTransform} translateY(${animationOffset}px)`;
                    cell.style.cursor = "default"
                } else {
                    cell.style.transform = baseTransform;
                    cell.style.cursor = "pointer"
                }
            }
        }
    }

    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => {
            let diff = (index - activeIndex + cellCount) % cellCount;
            let reverseDiff = (activeIndex - index + cellCount) % cellCount;

            if (index === activeIndex) {
                return;
            } else if (diff === 1 || reverseDiff === cellCount - 1) {
                selectedIndex++;
            } else if (reverseDiff === 1 || diff === cellCount - 1) {
                selectedIndex--;
            } else {
                if (diff <= cellCount / 2) {
                    selectedIndex -= diff;
                } else {
                    selectedIndex += reverseDiff;
                }
            }
            rotateCarousel();
        });
    });

    let time = 0;
    setInterval(() => {
        time += 0.2;
        animationOffset = Math.sin(time) * 15;
        rotateCarousel();
    }, 100);

    function getScrollAngle() {
        let scrollY = window.scrollY;
        let windowHeight = window.innerHeight;
        let maxScroll = document.body.scrollHeight - windowHeight;
        let scrollFraction = maxScroll > 0 ? scrollY / maxScroll : 0;
        let maxTilt = 15;
        return (scrollFraction - 0.5) * 2 * maxTilt;
    }

    let prevButton = document.querySelector('.previous-button');
    prevButton.addEventListener('click', () => {
        selectedIndex--; // Rotate clockwise (left)
        rotateCarousel();
    });

    let nextButton = document.querySelector('.next-button');
    nextButton.addEventListener('click', () => {
        selectedIndex++; // Rotate counterclockwise (right)
        rotateCarousel();
    });

    window.addEventListener('scroll', () => {
        rotateCarousel();
    });

    rotateCarousel();
});