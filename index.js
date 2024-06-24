// script.js
document.addEventListener("DOMContentLoaded", function () {
    const paginationContainer = document.getElementById('pagination');
    const totalPages = 10; // Defina o número total de páginas

    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = `#page-${i}`;
        pageLink.innerText = i;
        pageLink.addEventListener('click', function() {
            document.querySelectorAll('.pagination a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
            // Aqui você pode adicionar lógica para exibir o conteúdo da página
            console.log(`Página ${i} clicada`);
        });

        paginationContainer.appendChild(pageLink);
    }
});
