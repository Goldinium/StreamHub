import './style.css';
import sendLikes from './modules/apiSaveSend.js';
import fetchLikes from './modules/apiSaveGet.js';
import fetchMovies from './modules/fetchMovies.js';


  // Event listener for displaying movie items
  document.addEventListener("DOMContentLoaded", async () => {
    const moviesData = await fetchMovies();
    const moviesSection = document.getElementsByClassName("movies");
    moviesData.forEach(async (movieID) => {
      const likes = await fetchLikes(movieID);
      const movieItem = createMovieItem(movieID);
      moviesSection.appendChild(movieItem);
    });
  });

  async function createMovieItem(movieID) {
  for (movieID=1; movieID<11; movieID++) 
  {
    await fetchMovies();
    const movieItem = document.createElement("div");
    movieItem.classList.add("movie-item");
    const image = document.createElement("img");
    image.src = movieImage;
    image.alt = movieTitle;
    const movieName = document.createElement("h2");
    movieName.textContent = movieTitle;
    const likeButton = document.createElement("button");
    likeButton.textContent = `Like (${fetchLikes(movieID) || 0})`;
    likeButton.setAttribute("data-movie-id", movieID);
    // Add event listener for liking a movie
    likeButton.addEventListener("click", () => {
      sendLikes(movieID);
    });
    movieItem.appendChild(image);
    movieItem.appendChild(movieName);
    movieItem.appendChild(likeButton);
    return movieItem;
  }
}
