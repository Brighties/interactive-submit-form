document.addEventListener('DOMContentLoaded', function() {
    const ratingDisplay = document.getElementById('rating-display');
    const selectedRating = localStorage.getItem('selectedRating');

    if (selectedRating) {
        ratingDisplay.textContent = `You selected ${selectedRating} out of 5`;
    } else {
        ratingDisplay.textContent = 'Rating not found.';
    }
});
