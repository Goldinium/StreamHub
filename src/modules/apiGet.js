const movieApiGet = () => {
fetch('https://api.tvmaze.com/shows/1').then(response => response.json()).then(response => console.log(response.name));
fetch('https://api.tvmaze.com/shows/1').then(response => response.json()).then(response => console.log(response.type));
  };
  export default movieApiGet;