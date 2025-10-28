document.addEventListener('DOMContentLoaded', () => {
  const botonMenu = document.querySelector('.boton_menu');
  const submenu = document.querySelector('.submenu');

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
  const botonModoOscuro = document.querySelector('.modo_oscuro');
  const botonAltoContraste = document.querySelector('.alto_contraste');
  const botonMonocromo = document.querySelector('.monocromo');
  const botonReiniciar = document.querySelector('.reiniciar');

  botonModoOscuro.addEventListener('click', () => {
    document.body.classList.add('modo-oscuro');
    document.body.classList.remove('alto-contraste', 'monocromo');
  });

  botonAltoContraste.addEventListener('click', () => {
    document.body.classList.add('alto-contraste');
    document.body.classList.remove('modo-oscuro', 'monocromo');
  });

  botonMonocromo.addEventListener('click', () => {
    document.body.classList.add('monocromo');
    document.body.classList.remove('modo-oscuro', 'alto-contraste');
  });

  botonReiniciar.addEventListener('click', () => {
    document.body.classList.remove('modo-oscuro', 'alto-contraste', 'monocromo');
  });
});