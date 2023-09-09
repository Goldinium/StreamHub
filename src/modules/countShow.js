import getShows from './getShow.js';

const countItems = async () => {
  const response = await getShows();
  return response.length;
};

const displayShowsCounter = async () => {
  const counts = await countItems();
  const showsCount = document.querySelector('.showsCount');
  showsCount.innerHTML = `All Shows (${counts})`;
};

export default displayShowsCounter;