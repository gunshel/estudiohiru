// Esperar a que el DOM se cargue completamente
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todos los enlaces de proyectos
    const projectLinks = document.querySelectorAll('.proyectos a');

    // Añadir evento de clic a cada enlace
    projectLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Prevenir el comportamiento predeterminado del enlace
            event.preventDefault();

            // Obtener el destino del enlace
            const href = link.getAttribute('href');

            // Mostrar la capa de transición
            const overlay = document.getElementById('transition-overlay');
            overlay.style.opacity = 1;

            // Esperar a que la transición se complete antes de redirigir
            setTimeout(() => {
                window.location.href = href;
            }, 300); // El tiempo debe coincidir con la duración de la transición en CSS
        });
    });
});