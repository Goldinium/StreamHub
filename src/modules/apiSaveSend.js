fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps', {
  method: 'POST',
  body: JSON.stringify({
  }),
})
  .then((response) => console.log(response.json()))
  .then((response) => console.log(response));