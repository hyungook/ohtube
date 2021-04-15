import React from 'react';
import Header from '../header/header';
import VideoList from '../video_list/video_list';

const Main = ({videos}) => {
        return(
            <section>
                <ul className='videolist'>
                    <VideoList videos={videos} />
                </ul>
            </section>
        )
};

export default Main;