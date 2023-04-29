import commentsCounter from './displayComents.js';

/* API */
const apiLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ir4GAcPLgchx7TvyAEZT/comments';

export const message = async (raw) => {
  const headerFile = new Headers();
  headerFile.append('Content-Type', 'application/json');
  const requestOptions = {
    method: 'POST',
    headers: headerFile,
    body: raw,
    redirect: 'follow',
  };
  const getRequest = new Request(apiLink);
  await fetch(getRequest, requestOptions);
};

/* Getting comments from the form and prepair it to be handeled by the API */
const postComments = async () => {
  const cardContainers = document.querySelectorAll('.card');
  cardContainers.forEach((card) => {
    const openModalBtn = card.querySelectorAll('.comments-btn');
    const commentTitle = card.querySelectorAll('.comment-title');
    openModalBtn.forEach((btn) => {
      btn.addEventListener('click', async () => {
        const raw = JSON.stringify({
          item_id: `${btn.id}`,
          username: card.querySelector('input').value,
          comment: card.querySelector('textarea').value,
        });
        card.querySelector('input').value = '';
        card.querySelector('textarea').value = '';
        await message(raw);
        const res = await fetch(`${apiLink}?item_id=${btn.id}`);
        const data = await res.json();
        const commentCounter = data.length;
        const div = card.querySelector('.comments-list');
        div.innerHTML = '';
        data.forEach((comm) => {
          const li = document.createElement('li');
          li.innerHTML = `${comm.comment} - ${comm.creation_date} by ${comm.username}`;
          div.appendChild(li);
          commentTitle.forEach((title) => {
            commentsCounter(commentCounter, title);
          });
        });
      });
    });
  });
};

export default postComments;
