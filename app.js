// ticket count increase or decrease and show total
function handleTicketChange(ticketClass, isIncrease) {
  let ticketCount = getTicketCount(ticketClass);

  if (isIncrease) {
    ticketCount++;
  }
  if (!isIncrease && ticketCount > 0) {
    ticketCount--;
  }

  document.getElementById(ticketClass + "-ticket-count").value = ticketCount;

  calculateTotal();
}

// calculate subTotal,vatAmount and totalAmount
function calculateTotal() {
  const fClassTicket = getTicketCount("f-class");
  const economyTicket = getTicketCount("economy");

  const subTotal = fClassTicket * 150 + economyTicket * 100;
  document.getElementById("sub-total").innerText = subTotal;

  const vatAmount = subTotal * 0.1;
  document.getElementById("vat-amount").innerText = vatAmount;

  const totalAmount = subTotal + vatAmount;
  document.getElementById("total-amount").innerText = totalAmount;

  return totalAmount;
}

// get ticket count from input value
function getTicketCount(ticketClass) {
  const ticketInput = document.getElementById(ticketClass + "-ticket-count");
  const ticketCount = parseInt(ticketInput.value);
  return ticketCount;
}

// display modal for confirmation
function displayModal() {
  const fClassTicket = getTicketCount("f-class");
  const economyTicket = getTicketCount("economy");

  if (fClassTicket || economyTicket) {
    document.getElementById("modal").style.display = "block";

    document.getElementById("total-ticket").innerText =
      fClassTicket + economyTicket;

    document.getElementById("total-bill").innerText = calculateTotal();
  } else {
    alert("Book ticket first.");
  }
}
