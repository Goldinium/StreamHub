import './style.css';
// import movieApiGet from './modules/apiGet.js';
// import movieApiSend from './modules/apiSend.js';

// Function to like a movie using the base API
async function likeMovie(movieId) {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/?item_id=${movieId}/likes`, {
      method: 'POST',
    });
    if (response.status === 201) {
      // Update the UI to display the new like count
      const movieIdAttribute = `data-movie-id="${movieId}"`;
      const likeButton = document.querySelector(`button[${movieIdAttribute}]`);
      const currentLikes = parseInt(likeButton.textContent.match(/\d+/)[0], 10);
      likeButton.textContent = `Like (${currentLikes + 1})`;
    } else {
      console.error('Failed to like movie. Status code:', response.status);
    }
  } catch (error) {
    console.error('Error liking movie:', error);
  }
}

// Function to show the movie details popup
function showMoviePopup(movie) {
  document.getElementById('poster-img').src = movie.image.medium;
  document.getElementById('poster-name').textContent = movie.name;

  // Create an array of description items
  const descriptions = [
    `Genres: ${movie.genres.join(', ')}`,
    `Language: ${movie.language}`,
    `Runtime: ${movie.runtime} minutes`,
    `Rating: ${movie.rating.average}`,
  ];

  // Render the description list
  const descriptionList = document.getElementById('description-list');
  descriptionList.innerHTML = '';
  descriptions.forEach((description) => {
    const listItem = document.createElement('li');
    listItem.textContent = description;
    descriptionList.appendChild(listItem);
  });

  document.getElementById('popup-container').style.display = 'flex';
}

function createMovieItem(movie) {
  const movieItem = document.createElement('div');
  movieItem.classList.add('movie-item');

  const image = document.createElement('img');
  image.src = movie.image.medium;
  image.alt = movie.name;

  const movieName = document.createElement('h2');
  movieName.textContent = movie.name;

  const likeButton = document.createElement('button');
  likeButton.textContent = `Like (${movie.likes || 0})`;
  likeButton.setAttribute('data-movie-id', movie.id);

  // Add event listener for liking a movie
  likeButton.addEventListener('click', () => {
    likeMovie(movie.id);
  });

  const commentButton = document.createElement('button');
  commentButton.textContent = 'Comment';
  commentButton.classList.add('comment-popup-btn');

  // Add event listener for displaying the movie details popup
  commentButton.addEventListener('click', () => {
    showMoviePopup(movie);
  });

  movieItem.appendChild(image);
  movieItem.appendChild(movieName);
  movieItem.appendChild(likeButton);
  movieItem.appendChild(commentButton);
  return movieItem;
}
// Function to fetch movies from the TV Maze
async function fetchMovies() {
  try {
    const response = await fetch('https://api.tvmaze.com/shows');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
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
    console.error('Error fetching likes:', error);
    return 0;
  }
}

// Event listener for closing the movie details popup
document.getElementById('close-popup-btn').addEventListener('click', () => {
  document.getElementById('popup-container').style.display = 'none';
});

// Event listener for displaying movie items
document.addEventListener('DOMContentLoaded', async () => {
  const moviesData = await fetchMovies();
  const moviesSection = document.querySelector('.movies');
  moviesData.forEach(async (movie) => {
    const likes = await fetchLikes(movie.id);
    movie.likes = likes;
    const movieItem = createMovieItem(movie);
    moviesSection.appendChild(movieItem);
  });
});
