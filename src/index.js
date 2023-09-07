import './style.css';
import sendLikes from './modules/apiSaveGet';
import fetchLikes from './modules/apiSaveGet';

function createMovieItem(movie) {
    const movieItem = document.createElement("div");
    movieItem.classList.add("movie-item");
    const image = document.createElement("img");
    image.src = movie.image.medium;
    image.alt = movie.name;
    const movieName = document.createElement("h2");
    movieName.textContent = movie.name;
    const likeButton = document.createElement("button");
    likeButton.textContent = `Like (${movie.likes || 0})`;
    likeButton.setAttribute("data-movie-id", movie.id);
    // Add event listener for liking a movie
    likeButton.addEventListener("click", () => {
      likeMovie(movie.id);
    });
    movieItem.appendChild(image);
    movieItem.appendChild(movieName);
    movieItem.appendChild(likeButton);
    return movieItem;
  }
  // Function to fetch movies from the TV Maze
  async function fetchMovies() {
    try {
      const response = await fetch(`https://api.tvmaze.com/shows/${movieID}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching movies:", error);
      return [];
    }
  }
  // Function to fetch the number of likes for a movie from the base API
  fetchLikes(movieID);

  // Function to like a movie using the base API
  sendLikes(movieID);

  // Event listener for displaying movie items
  document.addEventListener("DOMContentLoaded", async () => {
    const moviesData = await fetchMovies();
    const moviesSection = document.querySelector(".movies");
    moviesData.forEach(async (movie) => {
      const likes = await fetchLikes(movie.id);
      movie.likes = likes;
      const movieItem = createMovieItem(movie);
      moviesSection.appendChild(movieItem);
    });
  });

