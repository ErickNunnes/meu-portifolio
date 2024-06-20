document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    // Verifica o tema atual e ajusta o botão de alternância
    if (currentTheme === 'dark-mode') {
        document.body.classList.add('dark-mode');
        themeToggleButton.textContent = 'Modo Claro';
    }

    // Evento de clique no botão de alternância de tema
    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // Atualiza o tema no localStorage e altera o texto do botão
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
            themeToggleButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16">
                    <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-6.5 0a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0zM8 1a1 1 0 0 1 1 1v.5a.5.5 0 0 1-1 0V2a1 1 0 0 1 1-1zm0 14a1 1 0 0 1-1-1v-.5a.5.5 0 0 1 1 0v.5a1 1 0 0 1-1 1zM4.464 4.464a.5.5 0 0 1 .707 0l.354.354a.5.5 0 0 1-.707.707l-.354-.354a.5.5 0 0 1 0-.707zm6.364 6.364a.5.5 0 0 1-.707 0l-.354-.354a.5.5 0 0 1 .707-.707l.354.354a.5.5 0 0 1 0 .707zM8 11.5a.5.5 0 0 1 1 0v.5a1 1 0 0 1-1 1v-.5a.5.5 0 0 1 0-1z"/>
                </svg>
                <span class="ml-2">Modo Claro</span>
            `;
        } else {
            localStorage.setItem('theme', 'light');
            themeToggleButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16">
                    <path d="M4.174 2.553a.717.717 0 0 0-.121.762 6.074 6.074 0 0 0 2.582 2.992c.268.176.314.524.121.762a.717.717 0 0 0 .762 1.118c.288-.166.592-.3.902-.398a7.898 7.898 0 0 1-3.984-3.984c-.098.31-.232.614-.398.902a.717.717 0 0 0 1.118.762zm5.032 8.562a.717.717 0 0 0 .121-.762 6.074 6.074 0 0 0-2.582-2.992c-.268-.176-.314-.524-.121-.762a.717.717 0 0 0-.762-1.118c-.288.166-.592.3-.902.398a7.898 7.898 0 0 1 3.984 3.984c.098-.31.232-.614.398-.902a.717.717 0 0 0-1.118-.762z"/>
                    <path fill-rule="evenodd" d="M10.469 1.693a.5.5 0 0 1 .062.633l-.5 1.5a.5.5 0 0 0 .76.537l1.5-.8a.5.5 0 0 1 .47 0l1.5.8a.5.5 0 0 0 .76-.537l-.5-1.5a.5.5 0 0 1 .062-.633l1.2-1.2a.5.5 0 0 0-.195-.805l-1.5-.5a.5.5 0 0 1-.287-.273l-.8-1.5a.5.5 0 0 0-.894 0l-.8 1.5a.5.5 0 0 1-.287.273l-1.5.5a.5.5 0 0 0-.195.805l1.2 1.2zm-4.207.914a.5.5 0 0 0-.062.633l.5 1.5a.5.5 0 0 1-.76.537l-1.5-.8a.5.5 0 0 0-.47 0l-1.5.8a.5.5 0 0 1-.76-.537l.5-1.5a.5.5 0 0 0-.062-.633l-1.2-1.2a.5.5 0 0 1 .195-.805l1.5-.5a.5.5 0 0 0 .287-.273l.8-1.5a.5.5 0 0 1 .894 0l.8 1.5a.5.5 0 0 0 .287.273l1.5.5a.5.5 0 0 1 .195.805l-1.2 1.2z"/>
                </svg>
                <span class="ml-2">Modo Noturno</span>
            `;
        }
    });
});
