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


function A1() {
  console.log("sdsds");
  removeBackgroundColorById("A1");
  setBackgroundColorById("A1");
}


$(document).ready(function(){
    $("p").click(function(){
      $(this).hide();
    });
  });