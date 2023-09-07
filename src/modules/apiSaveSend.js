const sendLikes = (item_id) => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3dTEWwwumIK5aWu0ysQ3/likes', {
    method: 'POST',
body: JSON.stringify({
    item_id: "item1",
  }),
  headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
})
.then((response) => console.log(response.status));

export default sendLikes;

