document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita el envío del formulario

            // Aquí puedes agregar la lógica para verificar las credenciales
            // Por simplicidad, asumiremos que el inicio de sesión es exitoso

            // Redirigir a la página de inicio
            window.location.href = 'index.html'; // Cambia 'index.html' por la ruta de tu página de inicio
        });
    }
});