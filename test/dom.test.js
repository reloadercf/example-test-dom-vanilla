/* eslint-disable quotes */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import { render } from '../src/function.js';

describe('Uso de DOM', () => {
  const renderizado = render();
  it('Aseguraros que existe un BOTON en el DOM', () => {
    expect(renderizado.outerHTML).toBe(`<div><button class="botoncito">haz click</button></div>`);
  });

  it('Ya es vierness', () => {
    const boton = renderizado.querySelector('.botoncito');
    boton.click();
    expect(renderizado.outerHTML).toBe(`<div><button class="botoncito">haz click</button><p>Ya llegue</p></div>`);
  });
});
