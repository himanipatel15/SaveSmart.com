// Displays a popup with the message "Welcome!" when the page loads
alert('Welcome!');

// Rates and Reviews
// Add event listeners to stars for rating feedback
document.querySelectorAll('.stars .star').forEach((star, index, stars) => {     // All stars in the .stars container are selected using querySelectorAll
    star.addEventListener('click', () => {
        // Highlight stars up to the clicked one
        stars.forEach((s, i) => {
            s.style.color = i <= index ? '#f0a500' : '#ccc'; // Change color based on rating. All stars up to the clicked one are colored (#f0a500 for filled stars, #ccc for unfilled)
        });

        // Show feedback
        alert(`Thanks for rating ${index + 1} stars!`);
    });
});


// Show button when scrolling down
window.onscroll = function () {
    const btn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Scroll to the top smoothly
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}



// Display a greeting based on the time
function displayGreeting() {
    const greetingDiv = document.getElementById("greeting");
    const hour = new Date().getHours();
    let greetingText;

    if (hour < 12) {
        greetingText = "Good Morning!";
    } else if (hour < 18) {
        greetingText = "Good Afternoon!";
    } else {
        greetingText = "Good Evening!";
    }

    greetingDiv.textContent = `Welcome to SaveSmart! ${greetingText}`;
}

// Call the function on page load
window.onload = displayGreeting;



//Dark Mode
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('darkModeToggle');

    // Check if dark mode was previously enabled (using localStorage) (LocalStorage is a built-in web storage)
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // Save the user's preference in localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});


//Progress Bar
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
});


