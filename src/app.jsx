import { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import './app.css';
import Header from './components/header/header';
import Main from './components/main/main';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const[select, setSelect] = useState(null);


  const search = query => {
  setSelect(null);

  youtube
   .search(query) //
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
      
      {/* <button>
        <Link to="/video_list">video_list</Link>
      </button> */}

      {/* <button>
        <Link to="/main">main</Link>
      </button> */}

      <Route exact path='/' render={() => <Main videos={videos} />} />
      {select && (
      <div>
         <VideoDetail video={select} />
      </div>
    )}
      <div>
        <Route path='/video_list' render={() => <VideoList videos={videos} onVideoClick={select} display={select ? 'list' : 'grid'} />}/>
      </div>
      <footer> &copy; 2021 OHTUBE All Right Reserved</footer>

    </div>
  );
}

export default App;
