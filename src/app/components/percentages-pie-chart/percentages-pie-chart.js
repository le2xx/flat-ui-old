const percentagesPieChart = (id, date) => {
  const chart = document.getElementById(id);
  chart.width = 95;
  chart.height = 95;
  const ctx = chart.getContext("2d");

  let start = -Math.PI / 2;

  drawArc(ctx, 47, 47, 39, start, 2 * Math.PI, '#e5e5e5');

  date.forEach((el) => {
    const end = start + 2 * Math.PI * el.percent / 100;
    drawArc(ctx, 47, 47, 39, start, end, el.color);
    start = end;
  });
};

const drawArc = (ctx, centerX, centerY, radius, startAngle, endAngle, color) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = 16;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.stroke();
  ctx.closePath();
};

export {percentagesPieChart};
