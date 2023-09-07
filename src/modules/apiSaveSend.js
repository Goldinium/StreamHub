<<<<<<< Updated upstream
fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps', {
  method: 'POST',
  body: JSON.stringify({
  }),
})
  .then((response) => console.log(response.json()))
  .then((response) => console.log(response));
=======
const sendLikes = (item_id) => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3dTEWwwumIK5aWu0ysQ3/likes', {
    method: 'POST',
body: JSON.stringify({
    item_id,
  }),
  headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
})
.then((response) => console.log(response.status));

export default sendLikes;

>>>>>>> Stashed changes
