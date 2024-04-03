const calcScrollValue = () => {
  const scrollProgress = document.getElementById("progress");
  //const progressValue = document.getElementById("progress-value");
  const pos = document.documentElement.scrollTop;
  //console.log(pos);
  const calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  //console.log(calcHeight);
  const scrollValue = Math.round((pos * 100) / calcHeight);
  //console.log(scrollValue);

  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-[#bfbfbf]");
  element.classList.remove("hover:bg-slate-400");
}

function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-[#1DD100]");
}
