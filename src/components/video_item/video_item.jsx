import React from 'react';

// props에서도 deconstructing이 가능하다.
const VideoItem = ({video, video:{snippet}, onVideoClick, display}) => {
    return (
        <li
        onClick={() => console.log(video)}>
            <img src={snippet.thumbnails.medium.url} alt="video thumnail"/>
            <div>
                <p>{snippet.title}</p>
                <p>{snippet.channelTitle}</p>
            </div>
        </li>
      );
};

export default VideoItem;