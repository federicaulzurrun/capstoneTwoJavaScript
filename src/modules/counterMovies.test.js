/**
 * @jest-environment jsdom
 */
import countMovies from './counterMovies.js';

describe('countTotalMovies', () => {
  test('updates the movie count in the container', () => {
    document.body.innerHTML = `
      <div id="movieCount"></div>
      <div class="movie-card"></div>
      <div class="movie-card"></div>
      <div class="movie-card"></div>
    `;

    countMovies();

    const containerCounter = document.getElementById('movieCount');
    expect(containerCounter.textContent).toBe('(3)');
  });
});
