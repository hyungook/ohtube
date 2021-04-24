import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

// rsi => 단축키! (까먹지말자)
const VideoList = ({videos, clickVideo}) => {
    // console.log(`list : ${clickVideo}`);
    return (
        <ul className={styles.videoUl}>
            {videos.map(video => (<VideoItem key={video.id} video={video} clickVideo={clickVideo} />))}
        </ul>
      );
};

export default VideoList;