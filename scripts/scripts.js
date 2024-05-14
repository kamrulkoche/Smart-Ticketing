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
const container = document.getElementById("seat-details");
const ticketPrice = 550;
let totalClickCount = 1;
let updatedTotalPrice = 0;
function updateTotalClickCount() {
  //const totalPrice = document.getElementById('total-price');
  //console.log(totalPrice.innerText);
  updatedTotalPrice = totalClickCount * ticketPrice;
  //console.log(updatedTotalPrice);
  setTextElementValueByID("total-price", updatedTotalPrice);
  setTextElementValueByID("grand-total", updatedTotalPrice)
  //return updatedTotalPrice;
}

const seats = [];
for (let i = 0; i < all_buttons.length; i++) {
  const bt = all_buttons[i];
  let clickCount = 0;
  bt.addEventListener('click', (e) => {
    const tr = document.createElement("tr");

    // Create three table data elements and set their content
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");


    td1.textContent = e.target.innerHTML; // You can set the content of the first cell as needed
    td2.textContent = "Economy";
    td3.textContent = ticketPrice;

    // Append table data elements to the table row
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    // Append table row to the container
    container.appendChild(tr);


    clickCount++;
    const buttonValue = e.target.innerHTML;
    seats.push(buttonValue);
    //console.log(seats);
    //console.log(buttonValue);
    updateTotalClickCount();
    //console.log(totalClickCount);
    setTextElementValueByID("total-seat", totalClickCount);
    //console.log("fsfs", totalClickCount);
    disable(".btnSeat");
    btnColor(e);
    totalClickCount++;
  });
}

function apply() {
  const text = document.getElementById("apply-text");
  const applyText = text.value;
  //console.log(applyText);
  if (applyText == "NEW15") {
    const discount = updatedTotalPrice * 0.15;
    const discountPrice=updatedTotalPrice-discount;
    setTextElementValueByID("grand-total", discountPrice)
  }
  else if (applyText == "Couple20") {
    const discount = updatedTotalPrice * 0.2;
    //console.log(discount);
    const discountPrice=updatedTotalPrice-discount;
    setTextElementValueByID("grand-total", discountPrice)
  }
  else {
    //console.log("Wrong Code");
    setTextElementValueByID("grand-total", updatedTotalPrice)
  }

}


function next() {
  const passengerName = document.getElementById("passenger-name");
  const phoneNumber = document.getElementById("phone-number");
  const email = document.getElementById("email");
  const name = passengerName.value;
  const phone = phoneNumber.value;
  const mail = email.value;
  console.log(name);
  console.log(phone);
  console.log(mail);
  validation(name, phone);
}


function validation(name, phone) {
  let letters = /^[A-Za-z]+$/;
  if (name == null || name == String || name == "") {
    alert("Name can't be blank");
    return false;
  }
  else if (!name.match(letters)) {
    alert("Name must contain only letters");
    return false;
  }
  else if (phone.length !== 11) {
    alert("Phone number must be 11 characters long");
    return false;
  }
  hideElementById("first-page");
  showElementById("success");

}

// function finished() {
//   hideElementById("success");
//   showElementById("first-page");
// }