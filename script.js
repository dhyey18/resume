// // Theme toggle functionality
// const toggleButton = document.getElementById('theme-toggle');
// const body = document.body;

// toggleButton.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');
//     if (body.classList.contains('dark-mode')) {
//         toggleButton.textContent = '☀️ Light Mode';
//     } else {
//         toggleButton.textContent = '🌙 Dark Mode';
//     }
// });

// Theme toggle functionality
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️ Light Mode';
    } else {
        toggleButton.textContent = '🌙 Dark Mode';
    }
});


    // // Scroll animation functionality
    // document.addEventListener("DOMContentLoaded", function () {
    //     const scrollElements = document.querySelectorAll('.scroll-animate');

    //     // Intersection Observer setup
    //     const observer = new IntersectionObserver((entries, observer) => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add('visible');
    //                 observer.unobserve(entry.target); // Unobserve the element after it becomes visible
    //             }
    //         });
    //     }, { threshold: 0.1 });

    //     scrollElements.forEach(element => {
    //         observer.observe(element); // Observe each scroll animation element
    //     });
    // });

    document.addEventListener('DOMContentLoaded', function() {
        const scrollElements = document.querySelectorAll('.scroll-animation');
    
        const elementInView = (el, percentageScroll = 100) => {
            const elementTop = el.getBoundingClientRect().top;
            return (
                elementTop <= 
                ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
            );
        };
    
        const displayScrollElement = (element) => {
            element.classList.add('is-visible');
        };
    
        const hideScrollElement = (element) => {
            element.classList.remove('is-visible');
        };
    
        const handleScrollAnimation = () => {
            scrollElements.forEach((el) => {
                if (elementInView(el, 75)) {
                    displayScrollElement(el);
                } else {
                    hideScrollElement(el);
                }
            })
        }
    
        window.addEventListener('scroll', () => {
            handleScrollAnimation();
        });
    
        // Trigger once on load
        handleScrollAnimation();
    });