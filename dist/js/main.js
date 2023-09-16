// this code should executed only after the DOM content has fully loaded

document.addEventListener('DOMContentLoaded', function() {
    const ratingContainer = document.querySelector('.rating-container');
    const submitButton = document.getElementById('submit-btn');
    const ratingValues = document.querySelectorAll('.rating-value');
    let selectedRating = false; // to store the rating value;

    ratingContainer.addEventListener('click', function(event) {
        ratingValues.forEach((item) => {
            item.classList.remove('active');
        });
            event.target.classList.add('active');
            selectedRating = event.target.innerText;
    });

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // to prevent the default behaviour of html buttons
        if (selectedRating) {
            localStorage.setItem('selectedRating', selectedRating);
            window.location.href =  './dist/pages/submit.html';
        } else {
            alert('Please select a rating before submitting.');
        }
    });
});

