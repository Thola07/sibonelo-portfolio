// Typewriter effect for 'I'm a Data Engineer'
const typewriterText = document.querySelector('.typewriter-text');
const textArray = ["Data Engineer", "Cloud Solutions Expert", "Automation Specialist"];
let arrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[arrayIndex].length) {
        typewriterText.textContent += textArray[arrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);  // After typing the full word, pause and then erase
    }
}

function erase() {
    if (charIndex > 0) {
        typewriterText.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        arrayIndex = (arrayIndex + 1) % textArray.length;  // Move to the next word
        setTimeout(type, 1000);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(type, 500);  // Start the typewriter effect after 500ms
});

// Smooth scroll for navigation links
const links = document.querySelectorAll('nav .link a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Hamburger menu for mobile view
function hamburg() {
    document.querySelector('.dropdown').style.display = 'block';
}

function cancel() {
    document.querySelector('.dropdown').style.display = 'none';
}
