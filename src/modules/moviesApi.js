const movies = async () => {
  try {
    const responseMovies = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=1295b88ae4999b5fdd0ca83266b4f5a0');
    const showMovies = responseMovies.json();
    return showMovies;
  } catch (err) {
    return err;
  }
};

export default movies;