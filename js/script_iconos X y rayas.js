    document.addEventListener('DOMContentLoaded', () => {
           const overlay = document.getElementById('overlay');
           const iconClosed = document.querySelector('.icon-closed');
           const iconOpen = document.querySelector('.icon-open');

           function toggleOverlay() {
               if (overlay.style.display === 'none' || overlay.style.display === '') {
                   overlay.style.display = 'block';
                   iconClosed.style.display = 'none'; // Oculta el icono cerrado
                   iconOpen.style.display = 'block';  // Muestra el icono abierto
               } else {
                   overlay.style.display = 'none';
                   iconClosed.style.display = 'block'; // Muestra el icono cerrado
                   iconOpen.style.display = 'none';   // Oculta el icono abierto
               }
           }

           // Establece el estado inicial del icono
           iconOpen.style.display = 'none'; // Asegura que el icono abierto esté oculto por defecto

           // Asigna la función al icono
           document.querySelector('#toggle-icon').addEventListener('click', toggleOverlay);
       });
