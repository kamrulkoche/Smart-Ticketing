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


function setTextElementValueByID(elementId, value) {
  const element = document.getElementById(elementId, value);
  element.innerText = value;
}

function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}


function disable(elementClass) {
  let element = document.querySelectorAll(elementClass);
  for (let i = 0; i < element.length; i++) {
    //element[i].classList.add("bg-red-400")
    if (totalClickCount === 4) {
      element[i].style.pointerEvents = 'none'; // Disable click events
    }
  }
}

function btnColor(e) {
  //console.log(e.target.innerHTML);
  e.target.classList.add("bg-green-600");
  //e.target.classList.add("hover:bg-red-700");
  e.target.classList.add("text-white");
  e.target.style.pointerEvents = 'none';

}