import React, { useEffect, useState } from 'react';
import { fetchStory } from '../services/newsApi';
import '../styles/story.css';
import { mapTime } from '../services/timeMapper';

export const Story = ({ id }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    fetchStory(id).then(data => data && data.url && setStory(data));
  });

  return <StoryTab content={story} />;
};

const StoryTab = ({ content }) => {
  const { by, url, time, title } = content || {};
  return content && url ? (
    <div className='story'>
      <h1>
        <a href={url}>{title}</a>
      </h1>
      <span>By: {by},</span>
      <span>Posted: {mapTime(time)} ago</span>
    </div>
  ) : null;
};
