/* Getting comments list from the Involvement API */
const displayComments = async () => {
  const cardContainers = document.querySelectorAll('.card');
  cardContainers.forEach((card) => {
    const openModalBtn = card.querySelectorAll('[data-modal-target]');
    openModalBtn.forEach((btn) => {
      btn.addEventListener('click', async () => {
        try {
          const res = await fetch(`${apiUrl}?item_id=item${btn.id}`);
          const data = await res.json();
          const div = card.querySelector('.comments-list');
          div.innerHTML = '';
          data.forEach((comment) => {
            const li = document.createElement('li');
            li.innerHTML = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
            div.appendChild(li);
          });
        } catch (error) {
          const errorMessage = 'Error, try again later.';
          const errorElement = document.createElement('div');
          errorElement.innerText = errorMessage;
          document.body.appendChild(errorElement);
        }
      });
    });
  });
};

export default displayComments;