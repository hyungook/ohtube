import React from 'react';

const VideoItem = (props) => {
    return (
        <li>
            <img src={props.video.snippet.thumbnails.medium.url} alt="video thumnail"/>
            <h1>{props.video.snippet.title}</h1>
        </li>
      );
};

export default VideoItem;