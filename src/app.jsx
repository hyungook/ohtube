import { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import './app.css';
import Header from './components/header/header';
// import Main from './components/main/main';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (video) => {
    setSelectedVideo(null);

    youtube
    .search(video) //
    .then(videos => setVideos(videos))
    };

    useEffect(() => {
      youtube
      .mostPopular() //
      .then(videos => setVideos(videos))
  },[]);

  return (
    <div>
      <Header onSearch={search} />
      {/* <VideoList videos={videos}/> */}
      {/* React Router로 렌더링하는 컴포넌트에 prop 전달하기 */}
      {/* <Route exact path='/' render={() => <Main videos={videos} />} /> */}

      {/* {selectedVideo && (
        <div>
          <div>hello</div>
          <VideoDetail video={selectedVideo} />
        </div>
      )} */}

      <div>
        <VideoList videos={videos} clickVideo={selectVideo} />
        {/* <Route path='/' render={() => <VideoList videos={videos} clickVideo={selectVideo} />}/> */}
      </div>
      <footer> &copy; 2021 OHTUBE All Right Reserved</footer>

    </div>
  );
}

export default App;
