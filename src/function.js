/* eslint-disable import/prefer-default-export */

export const render = () => {
  const nuevoDiv = document.createElement('div');
  const boton = document.createElement('button');
  boton.classList.add('botoncito');
  boton.textContent = 'haz click';
  boton.addEventListener('click', () => {
    const imprimir = document.createElement('p');
    imprimir.textContent = 'Ya llegue';
    nuevoDiv.appendChild(imprimir);
  });
  nuevoDiv.appendChild(boton);
  return nuevoDiv;
};
