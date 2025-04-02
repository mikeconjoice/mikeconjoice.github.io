document.addEventListener('DOMContentLoaded', function() {
    // Add loading overlay to all pages
    addLoadingOverlay();
    
    // Check which page we're on
    const path = window.location.pathname;
    
    if (path.includes('checkin.html')) {
        initCheckinPage();
    } else if (path.includes('confirmation.html')) {
        initConfirmationPage();
    }
});

// Function to add loading overlay to the page
function addLoadingOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'loading-overlay';
    overlay.innerHTML = `
        <div class="spinner"></div>
        <div class="loading-text">Processing...</div>
    `;
    document.body.appendChild(overlay);
}

// Function to show the loading overlay
function showLoading(message = "Processing...") {
    const overlay = document.querySelector('.loading-overlay');
    const loadingText = overlay.querySelector('.loading-text');
    
    // Update loading message if provided
    if (message) {
        loadingText.textContent = message;
    }
    
    // Show the overlay
    overlay.classList.add('show');
}

// Function to hide the loading overlay with delay
function hideLoading(delay = 0) {
    return new Promise(resolve => {
        setTimeout(() => {
            const overlay = document.querySelector('.loading-overlay');
            overlay.classList.remove('show');
            // Give time for fade out animation
            setTimeout(resolve, 300);
        }, delay);
    });
}

function initCheckinPage() {
    console.log("Initializing check-in page...");
    
    // Show loading briefly when the page loads
    showLoading("Loading appointment verification...");
    hideLoading(1200); // 1.2 second delay
    
    // Get appointment ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const appointmentId = urlParams.get('appointmentId');
    
    // If no appointment ID, redirect back to the scanner
    if (!appointmentId) {
        console.error("No appointment ID found in URL");
        window.location.href = 'index.html';
        return;
    }
    
    console.log("Found appointment ID:", appointmentId);
    
    // Handle verification form submission
    const verificationForm = document.getElementById('verification-form');
    const verificationStep = document.getElementById('verification-step');
    const confirmationStep = document.getElementById('confirmation-step');
    
    if (verificationForm) {
        verificationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading
            showLoading("Verifying your details...");
            
            // Get form data
            const formData = new FormData(verificationForm);
            const patientData = {
                firstname: formData.get('firstname'),
                surname: formData.get('surname'),
                dob: formData.get('dob')
            };
            
            // Validate form data
            if (!patientData.firstname || !patientData.surname || !patientData.dob) {
                hideLoading(0);
                alert('Please enter all required fields');
                return;
            }
            
            // Simulate server verification with delay
            setTimeout(() => {
                try {
                    // Store patient's full name for later use
                    const fullName = `${patientData.firstname} ${patientData.surname}`;
                    sessionStorage.setItem('patientName', fullName);
                    
                    // Show appointment details after verification
                    displayAppointmentDetails(appointmentId);
                    
                    // Hide loading and then switch to confirmation step
                    hideLoading(500).then(() => {
                        verificationStep.style.display = 'none';
                        confirmationStep.style.display = 'block';
                    });
                    
                } catch (error) {
                    console.error("Error verifying appointment:", error);
                    hideLoading(0);
                    alert("Unable to verify your details. Please try again or contact reception.");
                }
            }, 1500); // 1.5 second verification delay
        });
    }
    
    // Handle final check-in form submission
    const checkinForm = document.getElementById('checkin-form');
    if (checkinForm) {
        checkinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading
            showLoading("Completing check-in...");
            
            // Get form data
            const formData = new FormData(checkinForm);
            const confirmDetails = formData.get('confirm-details') === 'on';
            
            // Validate confirmation
            if (!confirmDetails) {
                hideLoading(0);
                alert('Please confirm your details to complete check-in');
                return;
            }
            
            // Simulate server processing with delay
            setTimeout(() => {
                // In a real app, this would send data to a server
                // For this PoC, we'll just store appointment ID and redirect
                sessionStorage.setItem('appointmentId', appointmentId);
                
                // Redirect to confirmation page
                window.location.href = 'confirmation.html';
            }, 1800); // 1.8 second delay
        });
    }
}

function displayAppointmentDetails(appointmentId) {
    const appointmentInfo = document.getElementById('appointment-info');
    
    if (!appointmentInfo) {
        console.error("Could not find appointment-info element");
        return;
    }
    
    try {
        // In a real app, this would fetch appointment data from a server
        // Simulate appointment data
        const appointment = {
            id: appointmentId,
            dentist: "Dr. Sarah Smith",
            date: "2023-11-15",
            time: "14:30",
            type: "Regular Check-up"
        };
        
        // Format appointment date for display
        const appointmentDate = new Date(appointment.date + 'T' + appointment.time);
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const timeOptions = { hour: '2-digit', minute: '2-digit' };
        
        console.log("Updating appointment info with:", appointment);
        
        // Update the appointment info section
        appointmentInfo.innerHTML = `
            <p><strong>Appointment ID:</strong> ${appointment.id}</p>
            <p><strong>Dentist:</strong> ${appointment.dentist}</p>
            <p><strong>Date:</strong> ${appointmentDate.toLocaleDateString('en-GB', dateOptions)}</p>
            <p><strong>Time:</strong> ${appointmentDate.toLocaleTimeString('en-GB', timeOptions)}</p>
            <p><strong>Type:</strong> ${appointment.type}</p>
        `;
    } catch (error) {
        console.error("Error updating appointment details:", error);
        appointmentInfo.innerHTML = `
            <p><strong>Error loading appointment details</strong></p>
            <p>Please try again or contact the reception.</p>
        `;
    }
}

function initConfirmationPage() {
    // Show loading briefly when confirmation page loads
    showLoading("Finalizing your check-in...");
    
    // Get stored data
    const appointmentId = sessionStorage.getItem('appointmentId');
    const patientName = sessionStorage.getItem('patientName');
    
    // If no appointment data, redirect back to the scanner
    if (!appointmentId) {
        window.location.href = 'index.html';
        return;
    }
    
    // Update confirmation details
    const confirmationDetails = document.getElementById('confirmation-details');
    if (confirmationDetails && patientName) {
        const firstParagraph = confirmationDetails.querySelector('p:first-child');
        if (firstParagraph) {
            firstParagraph.textContent = `Thank you, ${patientName}! Your check-in has been confirmed.`;
        }
    }
    
    // Generate random waiting time for demo
    const waitingTimeElement = document.getElementById('waiting-time');
    if (waitingTimeElement) {
        const randomMinutes = Math.floor(Math.random() * 20) + 5;
        waitingTimeElement.textContent = `${randomMinutes}-${randomMinutes + 5} minutes`;
    }
    
    // Hide loading after a delay
    hideLoading(1500);
}
