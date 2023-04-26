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
      console.log(moviesArr);
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

const addingLikes = async () => {
  const likeBtns = document.querySelectorAll('.like-btn');
  // const likeBtnCount = document.querySelectorAll('.like-count');
  // const cards = document.querySelectorAll('.movie-card');
  // likeBtns.forEach((index) => {
  //   likeBtnCount[index].innerHTML = Number(likeBtnCount[index].innerHTML);
  //   fetch(likesUrl, {
  //     method: 'POST',
  //       body: JSON.stringify({
  //         item_id: cards[index].id,
  //       }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       }
  //   })
  // })
};

export { getLikes, addingLikes, likeButtons };



// const updateLikes = (movieId, countLikes, likeData) => {
//   const movieLike = likeData.find((like) => like.item_id === movieId);
//   const likeQuantity = movieLike ? movieLike.likes : 0;
//   countLikes.textContent = likeQuantity;
// };

// export async function getLikes(movieId, countLikes) {
//   try {
//     const response = await fetch(api);
//     const data = await response.json();
//     updateLikes(movieId, countLikes, data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// export const likeMovie = async (selectedId, likeCountEmptyContainer) => {
//   const body = JSON.stringify({ item_id: selectedId });
//   try {
//     const response = await fetch(api, {
//       method: 'POST',
//       body,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     if (response.ok) {
//       await getLikes(selectedId, likeCountEmptyContainer);
//     } else {
//       throw new Error('Movie Id not found');
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };
