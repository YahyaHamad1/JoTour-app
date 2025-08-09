// Modal functionality
const modal = document.getElementById("bookingModal");
const closeBtn = document.getElementsByClassName("close")[0];

// Open booking modal
function openBooking(tourName, tourPrice) {
    document.getElementById("tourName").value = tourName;
    document.getElementById("tourPrice").value = tourPrice;
    document.getElementById("selectedTour").textContent = tourName;
    document.getElementById("selectedPrice").textContent = `$${tourPrice}`;
    document.getElementById("totalPrice").textContent = `$${tourPrice}`;
    
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
    document.getElementById("totalPrice").textContent = `$${total}`;
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
            alert(`Thank you ${bookingData.fullName}! Your booking for ${bookingData.tourName} has been received. We'll contact you at ${bookingData.email} shortly to confirm details and process payment.`);
            // Close modal and reset form
            modal.style.display = "none";
            this.reset();
        } else {
            alert('Oops! There was a problem. Please try again or contact us directly.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Oops! There was a problem. Please try again or contact us directly.');
    });
});

// Smooth scroll to tours section
function scrollToTours() {
    document.getElementById("tours").scrollIntoView({ behavior: 'smooth' });
}
