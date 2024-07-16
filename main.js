// Add event listeners or any initialization code here

// Example of dynamically updating content
function updateSystemStatus(status) {
    document.getElementById('status-content').textContent = status;
}

function updateAlienDetection(detection) {
    document.getElementById('detection-content').textContent = detection;
}

// Example usage
updateSystemStatus("Life support systems active.");
updateAlienDetection("Alien presence detected in sector 7.");
