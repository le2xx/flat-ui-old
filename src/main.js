import './styles/base.styl';
import {button} from './app/components/button/button';
import {arrowButton} from './app/components/arrow-button/arrow-button';
import {percentagesChart} from './app/components/percentages-chart/percentages-chart';
import {percentagesPieChart} from './app/components/percentages-pie-chart/percentages-pie-chart';
import { slider } from './app/components/slider/slider'

const chartDate = [
  { percent: 10, color: '#747474' },
  { percent: 25, color: '#e75735' },
  { percent: 35, color: '#4eb7a8' }
];

window.onload = () => {
  button();
  arrowButton();
  percentagesChart();
  percentagesPieChart('pie1', chartDate);
  slider();
};
