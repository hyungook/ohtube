import React from 'react';
import VideoItem from '../video_item/video_item';

// rsi => 단축키! (까먹지말자)
const VideoList = ({videos, clickVideo}) => {
    // console.log(`list : ${clickVideo}`);
    return (
        <ul>
            {videos.map(video => (<VideoItem key={video.id} video={video} clickVideo={clickVideo} />))}
        </ul>
      );
};

export default VideoList;