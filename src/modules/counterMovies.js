const countTotalMovies = () => {
  const movies = document.querySelectorAll('.movie-card');
  const movieCount = movies.length;
  const containerCounter = document.getElementById('movieCount');
  if (containerCounter) {
    containerCounter.textContent = `(${movieCount})`;
  }
};

export default countTotalMovies;