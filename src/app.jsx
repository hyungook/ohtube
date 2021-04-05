import { useEffect, useState } from 'react';
import './app.css';
import Header from './components/header/header';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
  
  const search = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://www.googleapis.com/youtube/v3/search/?part=snippet&maxResults=20&q=${query}&type=video&key=AIzaSyDNG_hfL-YnQr3sh-KrE0yRiVEdJzIgMP4`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id:item.id.videoId}))) // 아이템을 받아서 새로운 오브젝트를 만들어, 기존에 있는 아이템 정보를 유지하고, 아이디만 오브젝트가 아니라 그 오브젝트 안에 있는 videoId로 덮는다.
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=AIzaSyDNG_hfL-YnQr3sh-KrE0yRiVEdJzIgMP4", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[]);

  return (
    <div>
      <Header onSearch={search}/>
      <VideoList videos={videos}/>
    </div>
  );
}

export default App;
