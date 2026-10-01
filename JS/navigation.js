const typingText = document.getElementById("typing-text");

const titles = [
    "Java Full Stack Developer"
  
];

let titleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentTitle = titles[titleIndex];

    if (!deleting) {

        // Type character
        typingText.textContent =
            currentTitle.substring(0, charIndex + 1);

        charIndex++;

        // Full title printed
        if (charIndex === currentTitle.length) {

            setTimeout(() => {
                deleting = true;
                typeEffect();
            }, 1500);

            return;
        }

        setTimeout(typeEffect, 100);

    } else {

        // Delete character
        typingText.textContent =
            currentTitle.substring(0, charIndex - 1);

        charIndex--;

        // Full title deleted
        if (charIndex === 0) {

            deleting = false;

            // Move to next title
            titleIndex++;

            if (titleIndex === titles.length) {
                titleIndex = 0;
            }

            setTimeout(typeEffect, 500);

            return;
        }

        setTimeout(typeEffect, 60);
    }
}

typeEffect();