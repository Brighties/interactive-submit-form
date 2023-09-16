/*
const ratingValue = document.querySelectorAll('.rating-value');
const selectedRatingValue = document.querySelector('.selected-rating-value');

document.addEventListener('DOMContentLoaded', function() {
    ratingValue.forEach((item, index) => item.addEventListener('click', function() {
        ratingValue.forEach((otherItem) => otherItem.classList.remove('active'));
        selectedRatingValue.textContent = index + 1;
        // Add 'active' class to the clicked anchor tag


        item.classList.add('active');
    }));
});
*/
document.addEventListener('DOMContentLoaded', function() {
    const ratingContainer = document.querySelector('.rating-container');
    const submitButton = document.getElementById('submit-btn');

    let selectedRating = null;

    // Add event listeners to the rating elements
    ratingContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('rating-value')) {
            // Remove any previously selected rating
            const selected = document.querySelector('.rating-value.selected');
            if (selected) {
                selected.classList.remove('selected');
            }

            // Set the selected rating and mark it as selected
            selectedRating = event.target.innerText;
            event.target.classList.add('selected');
        }
    });

    // Add an event listener to the submit button
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        if (selectedRating !== null) {
            // Store the selected rating in localStorage (for persistence)
            localStorage.setItem('selectedRating', selectedRating);

            // Redirect to the 'submit.html' page
            window.location.href = './dist/pages/submit.html';
        } else {
            alert('Please select a rating before submitting.');
        }
    });
});


