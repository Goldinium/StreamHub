fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then((response) => console.log(response));