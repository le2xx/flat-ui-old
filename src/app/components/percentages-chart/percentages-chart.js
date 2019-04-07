const percentagesChart = (percent, id) => {
  const myCanvas = document.getElementById(id);
  myCanvas.width = 95;
  myCanvas.height = 95;
  const ctx = myCanvas.getContext("2d");
  const start = - Math.PI / 2;
  const end = 2* Math.PI * percent / 100;
  drawArc(ctx, 47, 47, 44, start, start + end, '#e75735');
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

