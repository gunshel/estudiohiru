// Obtener elementos del modal
var modal = document.getElementById("description-modal");
var btn = document.getElementById("open-description");
var span = document.getElementsByClassName("close")[0];

// Abrir el modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Cerrar el modal cuando se hace clic en el "x"
span.onclick = function() {
    modal.style.display = "none";
}

// Cerrar el modal cuando se hace clic fuera del modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
