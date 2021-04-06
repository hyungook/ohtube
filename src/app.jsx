import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import './app.css';
import Header from './components/header/header';
import Main from './components/main/main';
import VideoList from './components/video_list/video_list';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  
  const search = query => {
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
      <Header onSearch={search}/>
      <p>test</p>
      {/* <VideoList videos={videos}/> */}
      {/* React Router로 렌더링하는 컴포넌트에 prop 전달하기 */}
      <Route path='/video_list' render={() => <VideoList videos={videos} />}/>
      <Route exact path='/main' component={Main}/>
      <footer></footer>
    </div>
  );
}

export default App;
