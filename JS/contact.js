/* ==========================================
   CONTACT FORM
========================================== */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();


    if (!name || !email || !message) {

        alert("Please fill all the fields.");

        return;

    }


    alert(
        `Thank you ${name}! Your message has been received.`
    );


    contactForm.reset();

});

