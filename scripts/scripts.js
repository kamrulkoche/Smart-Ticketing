const calcScrollValue = () => {
    const scrollProgress = document.getElementById("progress");
    //const progressValue = document.getElementById("progress-value");
    const pos = document.documentElement.scrollTop;
    //console.log(pos);
    const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //console.log(calcHeight);
    const scrollValue = Math.round((pos * 100) / calcHeight);
    //console.log(scrollValue);

    if (pos > 100) {
        scrollProgress.style.display = "grid";
    }
    else {
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;