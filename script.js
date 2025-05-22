document.getElementById("visitMessage").addEventListener("click", function() {
    var openProfileBtn = document.getElementById("openProfileBtn");
    openProfileBtn.style.display = "block"; // Shows the profile button
});

document.getElementById("openProfileBtn").addEventListener("click", function() {
    var businessCard = document.getElementById("businessCard");
    
    // Hide the button after clicking
    this.style.display = "none";

    // Show the business card
    businessCard.style.display = "block";
});
