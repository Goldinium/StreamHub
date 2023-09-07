// Function to fetch the number of likes for a movie from the base API
const fetchLikes = async (movieID) => {
    const appId = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3dTEWwwumIK5aWu0ysQ3';
    const fetchLikes = fetch(`${appId}/likes/`);
    const likesCount = await fetchLikes;
    const jsonedFormat = await likesCount.json();
    const result = jsonedFormat[movieID].likes;
    return result;
  };
  
  export default fetchLikes;
