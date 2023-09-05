const movieApiGet = () => {
  fetch('https://api.tvmaze.com/shows/1').then(response => response.json()).then(json => console.log(json.genres[0]));
  };

  export default movieApiGet;

