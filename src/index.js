import './style.css';
import movieApiGet from './modules/apiGet.js'
import movieApiSend from './modules/apiSend.js'

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
      const response = await fetch("https://api.tvmaze.com/shows");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching movies:", error);
      return [];
    }
  }
  // Function to fetch the number of likes for a movie from the base API
  async function fetchLikes(movieId) {
    try {
      const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/?item_id=${movieId}/likes`);
      const data = await response.json();
      return data.length;
    } catch (error) {
      console.error("Error fetching likes:", error);
      return 0;
    }
  }
  // Function to like a movie using the base API
  async function likeMovie(movieId) {
    try {
      const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/?item_id=${movieId}/likes`, {
        method: "POST",
      });
      if (response.status === 201) {
        // Update the UI to display the new like count
        const movieIdAttribute = `data-movie-id="${movieId}"`;
        const likeButton = document.querySelector(`button[${movieIdAttribute}]`);
        const currentLikes = parseInt(likeButton.textContent.match(/\d+/)[0]);
        likeButton.textContent = `Like (${currentLikes + 1})`;
      } else {
        console.error("Failed to like movie. Status code:", response.status);
      }
    } catch (error) {
      console.error("Error liking movie:", error);
    }
  }
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

