import displayShowsCounter from './mock/countShow.js';

test('display the total correct number of shows on the page', async () => {
  document.body.innerHTML = '<a class=show></a>';
  const show = document.querySelector('.show');
  displayShowsCounter(show);
  expect(show.innerHTML).toBe('TV Shows (6)');
});