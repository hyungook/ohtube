class Youtube {
    constructor(key) {
        this.key = key;
        this.requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    // mostPopular() {
    //     return fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=${this.key}`,
    //     this.requestOptions)
    //     .then(response => response.json())
    //     .then(result => result.items)
    //   }

    async mostPopular() {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=${this.key}`,
            this.requestOptions);
        const result_1 = await response.json();
        return result_1.items;
    }

    //   search(query) {
    //      return fetch(`https://www.googleapis.com/youtube/v3/search/?part=snippet&maxResults=20&q=${query}&type=video&key=${this.key}`,
    //      this.requestOptions)
    //       .then(response => response.json())
    //       .then(result => result.items.map(item => ({...item, id:item.id.videoId}))) // 아이템을 받아서 새로운 오브젝트를 만들어, 기존에 있는 아이템 정보를 유지하고, 아이디만 오브젝트가 아니라 그 오브젝트 안에 있는 videoId로 덮는다.
    //   }

    async search(query) {
       const response = await fetch(`https://www.googleapis.com/youtube/v3/search/?part=snippet&maxResults=20&q=${query}&type=video&key=${this.key}`,
            this.requestOptions);
        const result_1 = await response.json();
        return result_1.items.map(item => ({ ...item, id: item.id.videoId })); // 아이템을 받아서 새로운 오브젝트를 만들어, 기존에 있는 아이템 정보를 유지하고, 아이디만 오브젝트가 아니라 그 오브젝트 안에 있는 videoId로 덮는다.
    }
}

export default Youtube;