import './styles.css';
import Logo from './logo.png';
import getShows from './modules/getShow';
import { getLikes, addLike } from './modules/like.js';
import { getComment, createComment, postComment } from './modules/comment.js';
import displayShowsCounter from './modules/countShow.js';
import commentsCounter from './modules/countComment.js';

// Add Logo to header
const divLogo = document.querySelector('.logo');
const myLogo = new Image();
myLogo.src = Logo;
myLogo.classList.add('myLogo');
divLogo.append(myLogo);

// Add logo to title tab
const titleLogo = document.getElementById('titleLogo');
titleLogo.href = Logo;

// Initialize arrays to keep the objects of tv shows and likes
let showsArray = [];
let likesArray = [];

// Create an eventlistener to display popup with data fetched from API
const popup = (array) => {
  const commentBtns = document.querySelectorAll('.commentBtn');
  const commentPopup = document.querySelector('.comment-popup');
  const closeBtn = document.querySelector('.close-popup-btn');
  const comments = document.querySelector('.comments');
  commentBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const movieSummary = document.querySelector('.movie-summary');
      const movieTitle = document.querySelector('.movie-title');
      const popupPhoto = document.querySelector('.popup-photo');
      const submitCommentBtn = document.querySelector('.submit-comment-btn');
      const genre = document.querySelector('.genre');
      submitCommentBtn.setAttribute('id', index);
      commentPopup.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      popupPhoto.src = array[index].image.original;
      movieTitle.textContent = array[index].name;
      genre.textContent = array[index].genres.join(', ');
      movieSummary.innerHTML = array[index].summary;
      getComment(index).then((arr) => {
        const commentsList = document.querySelector('.comments-list');
        commentsList.innerHTML = '';
        if (arr.length > 0) {
          arr.forEach((item) => {
            createComment(item);
            commentsCounter();
          });
        }
      });
    });
  });
  closeBtn.addEventListener('click', () => {
    commentPopup.style.display = 'none';
    document.body.style.overflow = 'auto';
    comments.textContent = 'Comments';
  });
};

