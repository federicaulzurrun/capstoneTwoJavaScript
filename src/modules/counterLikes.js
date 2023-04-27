// Involment API link
const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ir4GAcPLgchx7TvyAEZT/likes';

const getLikes = async () => {
  const cardMovie = document.querySelectorAll('.movie-card');
  const likeCount = document.querySelectorAll('.like-count');
  await fetch(likesUrl)
    .then((response) => response.json())
    .then((json) => {
      const moviesArr = Array.from(cardMovie);
      moviesArr.forEach((cardMovie, index) => {
        json.forEach((item) => {
          if (item.item_id === cardMovie.id) {
            likeCount[index].innerHTML = item.likes;
          }
        });
      });
    });
};

const likeButtons = async () => {
  const likeBtns = document.querySelectorAll('.like-btn');
  likeBtns.forEach(async (btn) => {
    const id = btn.getAttribute('id').replace('like', '');
    const likeCount = btn.querySelector('.like-count');
    let count = Number(likeCount.innerText);

    btn.addEventListener('click', async () => {
      count += 1;
      likeCount.innerText = Number(likeCount.innerText) + 1;

      // Post to the API
      const data = { item_id: id, likes: count };
      await fetch(likesUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'content-type': 'application/json' },
      });
    });
  });
};

export { getLikes, likeButtons };