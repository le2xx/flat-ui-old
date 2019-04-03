const button = () => {
  const buttons = document.querySelectorAll('.button');

  Array.prototype.forEach.call(buttons, (node) => {
    node.addEventListener('click', (e) => ripple(e, node));
  });

  const ripple = (event, item) => {
    const d = Math.max(item.clientWidth, item.clientHeight);
    const newNode = document.createElement('span');
    newNode.setAttribute('class', 'button__ripple');
    newNode.style.width = newNode.style.height = d + 'px';
    newNode.style.left = event.clientX - item.offsetLeft - d/2 + 'px';
    newNode.style.top = event.clientY - item.offsetTop - d/2 + 'px';

    item.appendChild(newNode);
    setTimeout(() => newNode.remove(), 1000);
  };
};

export { button };
