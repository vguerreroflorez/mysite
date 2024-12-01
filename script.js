


// Function to show the selected section with a smooth transition
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    // Show the clicked section with transition
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.add('active');
}

// Function to handle image transition and header shrinking when clicking the navigation
function hideAvatarAndShrinkHeader() {
    const avatarImage = document.getElementById('avatarImage');
    const header = document.querySelector('header');
    const figurePlaceholder = document.getElementById('figurePlaceholder');

    // Hide the avatar image
    avatarImage.style.opacity = "0"; // Fade out the image

    // Shrink the header by reducing the padding
    header.style.padding = "20px 0"; // Reduce header height

    // Optionally, hide the figure altogether
    figurePlaceholder.style.display = "none";
}

// Event listeners for  
document.getElementById('aboutLink').addEventListener('click', function(e) {
    e.preventDefault();
    hideAvatarAndShrinkHeader(); // Hide avatar and shrink header
    showSection('about');
});

document.getElementById('publicationLink').addEventListener('click', function(e) {
    e.preventDefault();
    hideAvatarAndShrinkHeader(); // Hide avatar and shrink header
    showSection('publications');
});

document.getElementById('newsLink').addEventListener('click', function(e) {
    e.preventDefault();
    hideAvatarAndShrinkHeader(); // Hide avatar and shrink header
    showSection('news'); // Show the news section
});

// Default section to show when the page loads (e.g., placeholder with avatar)
document.addEventListener('DOMContentLoaded', function() {
    // Show placeholder section or default content
    const avatarImage = document.getElementById('avatarImage');
    avatarImage.style.transition = "transform 0.5s ease";
});

// Function to reset the header to its initial state
function resetToMainPage() {
    const sections = document.querySelectorAll('.content-section');
    const avatarImage = document.getElementById('avatarImage');
    const header = document.querySelector('header');
    const figurePlaceholder = document.getElementById('figurePlaceholder');

    // Hide all active sections
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the avatar again
    avatarImage.style.opacity = "1"; // Make the avatar visible again

    // Reset the header size
    header.style.padding = "300px 0";
    figurePlaceholder.style.display = "block";

    // Ensure the scroll is reset to the top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event listener for clicking the site name
document.getElementById('siteName').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default link behavior
    resetToMainPage(); // Trigger the reset function
});


