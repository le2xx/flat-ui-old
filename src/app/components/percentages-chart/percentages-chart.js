const percentagesChart = () => {
  const canvases = document.querySelectorAll('.percentages-chart');

  Array.prototype.forEach.call(canvases, node => {
    const percent = node.querySelector('.percentages-chart__text').textContent;
    const canvas = node.querySelector('.percentages-chart__canvas');
    canvas.width = 95;
    canvas.height = 95;
    const ctx = canvas.getContext("2d");
    const start = - Math.PI / 2;
    const end = 2 * Math.PI * percent / 100;
    drawArc(ctx, 47, 47, 44, start, start + end, '#e75735');
  });
};

const drawArc = (ctx, centerX, centerY, radius, startAngle, endAngle, color) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.stroke();
  ctx.closePath();
};

export { percentagesChart };
