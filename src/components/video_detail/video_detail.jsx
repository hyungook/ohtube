import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({video, video: {snippet}}) => (
    <section className={styles.videoSection}>
        <iframe
        type="text/html" width="100%" height="500px"
        title="youtube video player"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0" allowFullScreen></iframe>
        <div className={styles.detailInfo}>
            <h2>{snippet.title}</h2>
            <h3>{snippet.channelTitle}</h3>
            <pre>{snippet.description}</pre>
        </div>
    </section>
);

export default VideoDetail;