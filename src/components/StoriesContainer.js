import React, { useEffect, useState } from 'react';
import { fetchStoryIds } from '../services/newsApi';
import { Story } from './Story';
// import { infiniteScroll } from '../services/infiniteScroll';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    fetchStoryIds()
      .then(data => setStoryIds(data))
      .catch(err => console.log('Story id was not returned', err));
  });

  return (
    <div>
      <div className='story_header_wrapper'>
        <div className='container'>
          <h1 className='story_header'>Hacker News</h1>
        </div>
      </div>
      <div className='container'>
        {storyIds.map(id => (
          <Story id={id} key={id} />
        ))}
      </div>
    </div>
  );
};
