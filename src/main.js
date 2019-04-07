import './styles/base.styl';
import {button} from './app/components/button/button';
import {arrowButton} from './app/components/arrow-button/arrow-button';
import {percentagesChart} from "./app/components/percentages-chart/percentages-chart";

window.onload = () => {
  button();
  arrowButton();
  percentagesChart(10, 'one');
  percentagesChart(62, 'two');
  percentagesChart(100, 'tree');
};
