import React from 'react';

const VideoDetail = ({video, video: {snippet}}) => (
    <section>
        <iframe
        type="text/html" width="100%" height="500px"
        title="youtube video player"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0" allowFullScreen></iframe>
        <h2>{snippet.title}</h2>
        <h3>{snippet.channelTitle}</h3>
        <pre>{snippet.description}</pre>
    </section>
);

export default VideoDetail;