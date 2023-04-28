/**
 * @jest-environment jsdom
 */
import countMovies from './counterMovies.js';

describe('countTotalMovies', () => {
  test('updates the movie count in the container', () => {
    // Set up the DOM for testing
    document.body.innerHTML = `
      <div id="movieCount"></div>
      <div class="movie-card"></div>
      <div class="movie-card"></div>
      <div class="movie-card"></div>
    `;

    // Call the function
    countMovies();

    // Check that the movie count was updated
    const containerCounter = document.getElementById('movieCount');
    expect(containerCounter.textContent).toBe('(3)');
  });
});
