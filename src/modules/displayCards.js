import movies from './moviesApi.js';
import countTotalMovies from './counterMovies.js';
import { getLikes, likeButtons } from './counterLikes.js';
import displayComments from './displayComments.js';
import commentsModal from './modalComments.js';
// import addingComments from './addingComments.js';

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
      <button data-modal-target="#popup${movie.id}" type="button" class="comments" id="${movie.id}">Comments</button>
      </div>
    </div>
    <!-- Modal container -->
    <dialog class="popup" id="popup${movie.id}">
      <div class="popup-content">
        <button type="button" class="btnClose" id="closeDialoge" data-close-button>
        <span class="close-button" id="closeBtn">&times;</span></button>
        <div class="imgContCom">
          <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="poster">
        </div>
        <div>
          <h2>${movie.title}</h2>
          <p>${movie.overview}</p>
          <p class="realeseDate"> Release Date: ${movie.release_date}</p>
          <p class="popularity">Popularity: ${movie.popularity}</p>
        </div>
        <div class="formContainer">
          <h4>Add a comment</h4>
          <form class="comment-form">
          <input type="text" id="username-input" name="username" placeholder="Your name">
          <textarea id="comment-input" name="comment" placeholder="Your insights"></textarea>
          <button class="comment-form_button"type="submit">Comment</button>
          </form>
        </div>
        <div class="comments-container" id="comentsCont">
          <!-- comments section -->
        </div>
      </div>
    </dialog>

  `).join('');
  moviesContainer.innerHTML = moviesHtml;

  /* Total Counter */
  countTotalMovies();

  /* Likes */
  getLikes();
  likeButtons();

  /* Comments PopUp */
  displayComments();
  commentsModal();
  // addingComments();
};

export default displayMovies;