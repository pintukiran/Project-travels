function searchFlights() {
    // Get form values
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const arrivalDate = document.getElementById('departureDate').value;
    const returnDate = document.getElementById('arrivalDate').value;

    // Perform hypothetical search (you can replace this with actual search logic)
    alert(`Searching for flights from ${from} to ${to} arrival on ${arrivalDate} and retun on ${returnDate}.`);
}
  