document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/api/contenidos');
        const data = await response.json();
        const lista = document.getElementById('lista-contenidos');

        data.contenidos.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card-recurso';
            card.innerHTML = `
                <h3>${item.titulo}</h3>
                <span class="tag">${item.tipo}</span>
                <a href="/recursos/${item.file}" target="_blank">Ver / Descargar</a>
            `;
            lista.appendChild(card);
        });
    } catch (error) {
        console.error("Error cargando contenidos:", error);
    }
});