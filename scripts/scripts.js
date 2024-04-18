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

//make selection
const all_buttons = document.querySelectorAll(".btnSeat");
const ticketPrice = 550;
let totalClickCount = 1;
let updatedTotalPrice = 0;
function updateTotalClickCount() {
  //const totalPrice = document.getElementById('total-price');
  //console.log(totalPrice.innerText);
  updatedTotalPrice = totalClickCount * ticketPrice;
  console.log(updatedTotalPrice);
  setTextElementValueByID("total-price", updatedTotalPrice);
  setTextElementValueByID("grand-total", updatedTotalPrice)
  //return updatedTotalPrice;
}

const seats = [];
for (let i = 0; i < all_buttons.length; i++) {
  const bt = all_buttons[i];
  let clickCount = 0;
  bt.addEventListener('click', (e) => {
    clickCount++;
    const buttonValue = e.target.innerHTML;
    seats.push(buttonValue);
    console.log(seats);
    setTextElementValueByID("seat-1", seats[0]);
    setTextElementValueByID("seat-2", seats[1]);
    setTextElementValueByID("seat-3", seats[2]);
    setTextElementValueByID("seat-4", seats[3]);
    console.log(buttonValue);
    updateTotalClickCount();
    console.log(totalClickCount);
    setTextElementValueByID("total-seat", totalClickCount);
    console.log("fsfs", totalClickCount);
    disable(".btnSeat");
    btnColor(e);
    totalClickCount++;
  });

}

function apply() {
  const text = document.getElementById("apply-text");
  const applyText = text.value;
  console.log(applyText);
  if (applyText == "NEW15") {
    const discount = updatedTotalPrice * 0.15;
    //console.log(discount);
    setTextElementValueByID("grand-total", discount)
  }
  else if (applyText == "Couple20") {
    const discount = updatedTotalPrice * 0.2;
    //console.log(discount);
    setTextElementValueByID("grand-total", discount)
  }
  else {
    //console.log("Wrong Code");
    setTextElementValueByID("grand-total", updatedTotalPrice)
  }

}

// let elements = document.getElementsByClassName('btnSeat');
// console.log(elements); // Outputs a live HTMLCollection
// for (let i = 0; i < elements.length; i++) {
//   elements[i].classList.add("hover:bg-slate-400");
//   if (8 === 4) {
//     elements[i].style.pointerEvents = 'none'; // Disable click events
//     elements[i].removeAttribute('onclick');
//   }
// }

