function mostrarSeccion(id){
  let secciones = document.querySelectorAll("section");
  secciones.forEach(sec => { sec.style.display = "none"; });
  document.getElementById(id).style.display = "block";
  document.querySelector('footer').style.display = 'block';
  window.scrollTo({top: document.getElementById(id).offsetTop, behavior: "smooth"});
}

function actualizarContador(){
  const objetivo = new Date('2026-11-14T10:00:00');
  const ahora = new Date();
  const diferencia = objetivo - ahora;
  const contador = document.getElementById('countdown');

  if (!contador) return;

  if (diferencia <= 0) {
    contador.textContent = '¡Ya es el gran día! Nos vemos el 14 de noviembre de 2026.';
    return;
  }

  const segundos = Math.floor((diferencia / 1000) % 60);
  const minutos = Math.floor((diferencia / 1000 / 60) % 60);
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const etiquetaDias = dias === 1 ? 'dia' : 'dias';

  contador.textContent = `Faltan ${dias} ${etiquetaDias} ${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('footer').style.display = 'none';
  actualizarContador();
  setInterval(actualizarContador, 1000);
});


