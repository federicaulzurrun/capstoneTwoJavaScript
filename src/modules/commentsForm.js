import commentsCounter from './displayComents.js';

/* API */
const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ir4GAcPLgchx7TvyAEZT/comments';

/* Sending data to the API */
export const broadcast = async (raw) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };
  const request = new Request(BASE_URL);
  await fetch(request, requestOptions);
};

/* Getting comments from the form and prepair it to be handeled by the API */
const postComments = async () => {
  /* Selecting the cards */
  const cardContainers = document.querySelectorAll('.card');
  cardContainers.forEach((card) => {
    /* Selecting cards components (btns - title) */
    const openModalBtn = card.querySelectorAll('.comments-btn');
    const commentTitle = card.querySelectorAll('.comment-title');
    openModalBtn.forEach((btn) => {
      btn.addEventListener('click', async () => {
        /* Getting the values from the form */
        const raw = JSON.stringify({
          item_id: `${btn.id}`,
          username: card.querySelector('input').value,
          comment: card.querySelector('textarea').value,
        });
        /* Reset Form */
        card.querySelector('input').value = '';
        card.querySelector('textarea').value = '';
        await broadcast(raw);
        /* Reload comments */
        const res = await fetch(`${BASE_URL}?item_id=${btn.id}`);
        const data = await res.json();
        const commentCounter = data.length;
        const div = card.querySelector('.comments-list');
        div.innerHTML = '';
        data.forEach((comm) => {
          const li = document.createElement('li');
          li.innerHTML = `${comm.comment} - ${comm.creation_date} by ${comm.username}`;
          div.appendChild(li);
        });
        commentTitle.forEach((title) => {
          commentsCounter(commentCounter, title);
        });
      });
    });
  });
};

export default postComments;
