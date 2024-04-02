window.onscroll = calcScrollValue;
//window.onload = calcScrollValue;

function openMenu() {
    showElementById("navMenu");
    showElementById("closeMenu");
    hideElementById("openMenu");
}

function closeMenu() {
    hideElementById("navMenu");
    hideElementById("closeMenu");
    showElementById("openMenu");
}