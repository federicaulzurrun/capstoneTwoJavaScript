const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Ir4GAcPLgchx7TvyAEZT/comments';
const broadcast = async (raw) => {
  const headersA = new Headers();
  headersA.append('Content-Type', 'application/json');
  const requestOptions = {
    method: 'POST',
    headers: headersA,
    body: raw,
  };
  const request = new Request(apiUrl);
  await fetch(request, requestOptions);
};

export default broadcast;