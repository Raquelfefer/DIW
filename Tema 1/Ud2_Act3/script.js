document.addEventListener('DOMContentLoaded', () => {
  const botonMenu = document.getElementById('boton_menu');
  const submenu = document.getElementById('submenu');

  botonMenu.addEventListener('click', () => {
    if (submenu.classList.contains('visible')) {
      submenu.classList.remove('visible');
      submenu.classList.add('oculto');
    } else {
      submenu.classList.remove('oculto');
      submenu.classList.add('visible');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const contenido = document.getElementById("content");
  const menuDesplegable = document.querySelector(".menu_desplegable");

  const botonModoOscuro = document.getElementById('modo_oscuro');
  const botonAltoContraste = document.getElementById('alto_contraste');
  const botonMonocromo = document.getElementById('monocromo');
  const botonReiniciar = document.getElementById('reiniciar');

  botonModoOscuro.addEventListener('click', () => {
    contenido.classList.add('modo-oscuro');
    menuDesplegable.classList.add('modo-oscuro');
    contenido.classList.remove('alto-contraste', 'monocromo');
    menuDesplegable.classList.remove('alto-contraste', 'monocromo');
  });

  botonAltoContraste.addEventListener('click', () => {
    contenido.classList.add('alto-contraste');
    menuDesplegable.classList.add('alto-contraste');
    contenido.classList.remove('modo-oscuro', '.monocromo');
    menuDesplegable.classList.remove('modo-oscuro', 'monocromo');
  });

  botonMonocromo.addEventListener('click', () => {
    contenido.classList.add('monocromo');
    menuDesplegable.classList.add('monocromo');
    contenido.classList.remove('modo-oscuro', 'alto-contraste');
    menuDesplegable.classList.remove('modo-oscuro', 'alto-contraste');
  });

  botonReiniciar.addEventListener('click', () => {
    contenido.classList.remove('modo-oscuro', 'alto-contraste', 'monocromo');
    menuDesplegable.classList.remove('modo-oscuro','alto-contraste', 'monocromo');
  });
});