// Função de troca de tema claro/escuro

const themeToggle = document.getElementById('theme-toggle');
const rootHtml = document.documentElement;

function changeTheme() {
    const currentTheme = rootHtml.getAttribute('data-theme');

    if (currentTheme === 'dark') rootHtml.setAttribute('data-theme', 'light');
    else rootHtml.setAttribute('data-theme', 'dark');

    themeToggle.classList.toggle('bi-sun');
    themeToggle.classList.toggle('bi-moon');
}

themeToggle.addEventListener('click', changeTheme);

// --------------------------