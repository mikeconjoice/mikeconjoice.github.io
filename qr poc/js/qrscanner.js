document.addEventListener('DOMContentLoaded', function() {
    // Add loading overlay for scanner page
    addLoadingOverlay();
    
    const qrReader = document.getElementById('qr-reader');
    
    if (qrReader) {
        const html5QrCode = new Html5Qrcode("qr-reader");
        const config = { fps: 10, qrbox: { width: 250, height: 250 } };
        
        // Start camera scanning
        html5QrCode.start(
            { facingMode: "environment" }, 
            config, 
            onScanSuccess
        ).catch(error => {
            console.error("QR scanner error:", error);
            
            // Show fallback message if camera access fails
            qrReader.innerHTML = `
                <div style="padding: 20px; text-align: center;">
                    <p>Unable to access camera.</p>
                    <p>Please make sure you've given camera permission or use the manual option below.</p>
                </div>
            `;
        });
        
        // Handle successful scans
        function onScanSuccess(decodedText) {
            // Stop scanning once we have a result
            html5QrCode.stop().then(() => {
                console.log("QR code scanning stopped.");
                
                // Show loading screen
                showLoading("Processing QR code...");
                
                // Parse the QR code content
                try {
                    // For a real app, the QR would contain JSON or a specially formatted string
                    // For this PoC, we'll assume it contains an appointment ID
                    const appointmentId = decodedText.trim();
                    
                    // Add a delay to simulate processing
                    setTimeout(() => {
                        // Redirect to the check-in page with the appointment ID
                        window.location.href = `checkin.html?appointmentId=${encodeURIComponent(appointmentId)}`;
                    }, 1500);
                } catch (error) {
                    console.error("Failed to process QR code:", error);
                    hideLoading(0);
                    alert("Invalid QR code. Please try again.");
                    // Restart scanning
                    html5QrCode.start({ facingMode: "environment" }, config, onScanSuccess);
                }
            }).catch(error => {
                console.error("Failed to stop QR scanner:", error);
            });
        }
    }
    
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
        
        if (message) {
            loadingText.textContent = message;
        }
        
        overlay.classList.add('show');
    }
    
    // Function to hide the loading overlay
    function hideLoading(delay = 0) {
        setTimeout(() => {
            const overlay = document.querySelector('.loading-overlay');
            overlay.classList.remove('show');
        }, delay);
    }
});
