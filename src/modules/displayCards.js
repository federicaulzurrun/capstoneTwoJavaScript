import movies from './moviesApi.js';
// import handleLike from './likes.js';
import {
  getLikes,
  likeButtons,
} from './counterLikes.js';

const displayMovies = async () => {
  const moviesContainer = document.getElementById('displayCards');
  const moviesData = await movies();
  const moviesHtml = moviesData.results.map((movie) => `
    <div class="movie-card" id="${movie.id}">
      <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="poster">
      <div class="moviesTitle">
        <h3 class="movieTitle">${movie.title}</h3>
        <button class="like-btn btn" id="like${movie.id}">
        <i class="fa-sharp fa-solid fa-heart"><span class="like-count">0</span></i>
        </button>
      </div>
      <p class="overview">${movie.overview}</p>
      <div class="button-container">
        <button data-modal-target="#card${movie.id}" type="button" class="comments" id="comments">Comments</button>
      </div>
    </div>
  `).join('');
  moviesContainer.innerHTML = moviesHtml;

  getLikes();
  likeButtons();
};

// await Promise.all(promises);

export default displayMovies;
