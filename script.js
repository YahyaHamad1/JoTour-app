// Modal functionality
const modal = document.getElementById("bookingModal");
const closeBtn = document.getElementsByClassName("close")[0];

// Open booking modal
function openBooking(tourName, tourPrice) {
    document.getElementById("tourName").value = tourName;
    document.getElementById("tourPrice").value = tourPrice;
    document.getElementById("selectedTour").textContent = tourName;
    document.getElementById("selectedPrice").textContent = `$${tourPrice}`;
    document.getElementById("totalPriceDisplay").textContent = `$${tourPrice}`;
    
    modal.style.display = "block";
}

// Close modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Update total price when travelers change
document.getElementById("travelers").addEventListener("change", function() {
    const price = parseInt(document.getElementById("tourPrice").value);
    const travelers = this.value === "5+" ? 5 : parseInt(this.value);
    const total = price * travelers;
    document.getElementById("totalPriceDisplay").textContent = `$${total}`;
});

// Handle form submission
document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const bookingData = {
        tourName: formData.get('tourName'),
        tourPrice: formData.get('tourPrice'),
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        tourDate: formData.get('tourDate'),
        travelers: formData.get('travelers'),
        message: formData.get('message')
    };
    
    // Calculate total price
    const price = parseInt(bookingData.tourPrice);
    const travelers = bookingData.travelers === "5+" ? 5 : parseInt(bookingData.travelers);
    const total = price * travelers;
    
    // Set total price in hidden field
    document.getElementById("totalPrice").value = total;
    
    // Update FormData with total price
    formData.set('totalPrice', total);
    
    // Submit to Formspree
    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert(`Thank you ${bookingData.fullName}! Your booking for ${bookingData.tourName} has been received. Total: $${total}. Please pay in cash on arrival. We accept USD, JOD, EUR as the way of payment. You will be given a receipt after payment.`);
            modal.style.display = "none";
            this.reset();
        } else {
            alert('Oops! There was a problem. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Oops! There was a problem. Please try again.');
    });
});

// Smooth scroll to tours section
function scrollToTours() {
    document.getElementById("tours").scrollIntoView({ behavior: 'smooth' });
}
