import React from 'react';
import styles from './video_item.module.css';

// props에서도 deconstructing이 가능하다.
const VideoItem = ({video, video:{snippet}, clickVideo}) => {

    // 비디오 클릭 시 해당 비디오 재생하는 함수
    const addVideo = () => {
        // console.log(video);
        clickVideo(video);
    };

    return (
        <li className={styles.videoLi} onClick={addVideo}>
            <img src={snippet.thumbnails.medium.url} className={styles.video} alt="video thumnail"/>
            <div className={styles.info}>
                <h4>{snippet.title}</h4>
                <p>{snippet.channelTitle}</p>
            </div>
        </li>
      );
};

export default VideoItem;