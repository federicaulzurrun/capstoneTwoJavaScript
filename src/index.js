import './style.css';
import displayMovies from './modules/displayCards.js';
import Icon from './logo75.png';

document.addEventListener('DOMContentLoaded', () => {
  displayMovies();
});

const logoCont = document.getElementsByClassName('.logoCont');
// Add the image to our existing div.
const myIcon = new Image();
myIcon.src = Icon;

logoCont.appendChild(myIcon);