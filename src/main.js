import './styles/base.styl';
import {button} from './app/components/button/button';
import {arrowButton} from './app/components/arrow-button/arrow-button';
import {percentagesChart} from "./app/components/percentages-chart/percentages-chart";
import {percentagesPieChart} from "./app/components/percentages-pie-chart/percentages-pie-chart";

const chartDate = [
  { percent: 5, color: '#747474' },
  { percent: 25, color: '#e75735' },
  { percent: 35, color: '#4eb7a8' }
];

window.onload = () => {
  button();
  arrowButton();
  percentagesChart();
  percentagesPieChart('pie1', chartDate);
};
