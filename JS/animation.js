
// Scroll Animation--------------



const animatedElements =
    document.querySelectorAll(
        ".skill-card, .timeline-item, .project-card, .contact-container"
    );


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },

    {
        threshold: 0.05
    }

);


animatedElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "all 0.7s ease";

    observer.observe(element);
});