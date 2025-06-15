document.addEventListener('DOMContentLoaded', function() {

    // Lógica para el formulario de Declaración Jurada
    const declaracionForm = document.getElementById('declaracion-form');
    if (declaracionForm) {
        declaracionForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const successMessage = document.getElementById('success-message');
            const submitButton = declaracionForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';
            setTimeout(() => {
                declaracionForm.style.display = 'none';
                successMessage.style.display = 'flex';
            }, 1500);
        });
    }

    // Lógica para el formulario de Vehículos
    const vehiculoForm = document.getElementById('vehiculo-form');
    if (vehiculoForm) {
        vehiculoForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const successMessage = document.getElementById('success-message-vehiculo');
            const submitButton = vehiculoForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Generando...';
            setTimeout(() => {
                vehiculoForm.style.display = 'none';
                successMessage.style.display = 'flex';
            }, 1500);
        });
    }

    // Lógica para el formulario de Viaje de Menores
    const menoresForm = document.getElementById('menores-form');
    if (menoresForm) {
        menoresForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const successMessage = document.getElementById('success-message-menores');
            const submitButton = menoresForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Registrando...';
            setTimeout(() => {
                menoresForm.style.display = 'none';
                successMessage.style.display = 'flex';
            }, 1500);
        });
    }

    // Lógica para el formulario de Pago de Impuestos
    const pagoForm = document.getElementById('pago-form');
    if (pagoForm) {
        pagoForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const successMessage = document.getElementById('success-message-pago');
            const submitButton = pagoForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Procesando pago...';
            setTimeout(() => {
                pagoForm.style.display = 'none';
                successMessage.style.display = 'flex';
            }, 1500);
        });
    }

    // Lógica para el formulario de Manifiesto de Carga
    const manifiestoForm = document.getElementById('manifiesto-form');
    if (manifiestoForm) {
        manifiestoForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const successMessage = document.getElementById('success-message-manifiesto');
            const submitButton = manifiestoForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Registrando manifiesto...';
            setTimeout(() => {
                manifiestoForm.style.display = 'none';
                successMessage.style.display = 'flex';
            }, 1500);
        });
    }
});