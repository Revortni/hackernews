export const baseUrl =
  'https://cors-anywhere.herokuapp.com/https://hacker-news.firebaseio.com/v0/';

export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const fetchStoryIds = async () => {
  const response = await fetch(newStoriesUrl).then(data => data.json());
  return response;
};

export const fetchStory = async storyId => {
  const response = await fetch(`${storyUrl + storyId}.json`).then(data =>
    data.json()
  );
  return response;
};
