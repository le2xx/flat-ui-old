const percentagesPieChart = (id,  date) => {
  const chart = document.getElementById(id);
  chart.width = 95;
  chart.height = 95;
  const ctx = chart.getContext("2d");
  const start = - Math.PI / 2;
  const end = Math.PI;
  // drawArc(ctx, 47, 47, 39, start, end, '#4eb7a8');

  date.forEach(el =>
    drawArc(ctx, 47, 47, 39, start, end, el.color)
  );
};

const drawArc = (ctx, centerX, centerY, radius, startAngle, endAngle, color) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = 16;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.stroke();
  ctx.closePath();
};

export { percentagesPieChart };
