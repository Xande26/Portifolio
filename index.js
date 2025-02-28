// script.js

const button = document.getElementById('toggle-theme');

button.addEventListener('click', () => {
    // Alterna a classe 'dark-mode' no body
    document.body.classList.toggle('dark-mode');

    // Armazena a preferência do tema no localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Carrega o tema salvo ao iniciar a página
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});


