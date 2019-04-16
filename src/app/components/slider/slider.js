const slider = () => {
  const slide = document.querySelector('.slider__input');
  const valNode = document.querySelector('.slider__value');
  const val = slide.getAttribute('value');
  const step = slide.getAttribute('step');
  const firstPosition = val * (slide.offsetWidth / 100);
  valNode.style.marginLeft = String(firstPosition - (valNode.offsetWidth / 2)) + 'px';
  valNode.textContent = slide.getAttribute('value');

  const position = event => {
    const value = Math.floor(event.offsetX / (slide.offsetWidth / 100));
    slide.setAttribute('value', String(value));
    valNode.textContent = slide.getAttribute('value');
    valNode.style.marginLeft = Math.floor(event.offsetX - (valNode.offsetWidth / 2)) + 'px';

    if (valNode.textContent <= 0) {
      slide.onmousemove = null;
      valNode.style.marginLeft = '0px';
      slide.setAttribute('value', '0');
      valNode.textContent = '0';
    }

    if (valNode.textContent >= 100) {
      slide.onmousemove = null;
      valNode.style.marginLeft = Math.floor(slide.offsetWidth - valNode.offsetWidth) + 'px';
      slide.setAttribute('value', '100');
      valNode.textContent = '100';
    }
  };

  slide.onmousedown = (e) => {
    position(e);
    slide.onmousemove = (e) => {
      position(e);
    }
  };

  slide.onmouseup = () => {
    slide.onmousemove = null;
  };
};

export { slider };
