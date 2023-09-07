  // Function to fetch movies from the TV Maze
  async function fetchMovies(movieID) {
    const response = await fetch(`https://api.tvmaze.com/shows/${movieID}`);
    const data = await response.json();
    const movieTitle = data.name;
    const premieredDate = data.premiered;
    const endedDate = data.ended;
    const officialSite = data.officialSite;
    const ratingAverage = data.rating.average;
    const movieImage = data.image.medium;
}

export default fetchMovies;