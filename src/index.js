import './style.css';
import displayMovies from './modules/displayCards.js';
import likeButtons from './modules/counterLikes.js';

document.addEventListener('DOMContentLoaded', () => {
  displayMovies();
  likeButtons();
});