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

