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

// Handle form submission with loading state and notification
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
    
    // NEW: Show loading state
    const submitBtn = document.querySelector(".submit-btn");
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Processing...";
    submitBtn.disabled = true;
    
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
            // NEW: Show success notification instead of alert
            showNotification(`Thank you ${bookingData.fullName}! Your booking for ${bookingData.tourName} has been received. Total: $${total}. Please pay in cash on arrival.`);
            modal.style.display = "none";
            this.reset();
        } else {
            // NEW: Show error notification
            showNotification('Oops! There was a problem. Please try again.', 'error');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // NEW: Show error notification
        showNotification('Oops! There was a problem. Please try again.', 'error');
    })
    .finally(() => {
        // NEW: Reset button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
});

// Smooth scroll to tours section
function scrollToTours() {
    document.getElementById("tours").scrollIntoView({ behavior: 'smooth' });
}

// NEW: Lazy loading for tour card background images
document.addEventListener("DOMContentLoaded", function() {
    const tourImages = document.querySelectorAll('.tour-image[data-background]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const bgUrl = img.getAttribute('data-background');
                img.style.backgroundImage = `url('${bgUrl}')`;
                img.removeAttribute('data-background');
                imageObserver.unobserve(img);
            }
        });
    });
    
    tourImages.forEach(img => imageObserver.observe(img));
});

// NEW: Notification system
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = 'notification show';
    
    if (type === 'error') {
        notification.classList.add('error');
    }
    
    // Hide after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}
