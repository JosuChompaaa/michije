const btn = document.getElementById('btn-chaos');
const audio = document.getElementById('horror-audio');
const statusLog = document.getElementById('status-log');
const michi = document.getElementById('michi-principal');

btn.addEventListener('click', () => {
    // Iniciar audio
    audio.play().catch(e => console.log("El navegador bloqueó el audio al inicio."));
    
    // Activar caos visual
    document.body.classList.add('modo-caos');
    btn.style.display = 'none';
    
    // Cambiar logs de sistema
    const mensajes = [
        "ACCEDIENDO AL NÚCLEO...", 
        "ERROR CRÍTICO: ENTIDAD LIBERADA", 
        "NO PUEDES CERRAR ESTO", 
        "M I C H I _ I S _ W A T C H I N G"
    ];
    
    let msgIndex = 0;
    setInterval(() => {
        statusLog.innerText = mensajes[msgIndex % mensajes.length];
        msgIndex++;
    }, 800);

    // Activar lluvia de copias al mover el mouse
    document.addEventListener('mousemove', (e) => {
        spawnCopy(e.clientX, e.clientY);
    });
});

function spawnCopy(x, y) {
    const copy = document.createElement('img');
    copy.src = 'michi.png';
    copy.className = 'michi-trail';
    copy.style.position = 'fixed';
    copy.style.left = (x - 25) + 'px';
    copy.style.top = (y - 25) + 'px';
    copy.style.width = '100px';
    copy.style.pointerEvents = 'none';
    copy.style.zIndex = '100';
    
    // Efecto aleatorio para cada copia
    const randomDeg = Math.random() * 360;
    copy.style.filter = `hue-rotate(${randomDeg}deg) invert(1)`;
    
    document.body.appendChild(copy);

    // Eliminar para no saturar memoria
    setTimeout(() => {
        copy.style.opacity = '0';
        setTimeout(() => copy.remove(), 500);
    }, 1000);
}

// Mensaje de advertencia al intentar salir
window.onbeforeunload = function() {
    return "¿ESTÁS SEGURO DE QUE PUEDES SALIR?";
};