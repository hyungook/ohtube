(this.webpackJsonptemplat=this.webpackJsonptemplat||[]).push([[0],{11:function(e,t,n){e.exports={App:"app_App__3ALCk","App-logo":"app_App-logo__18uX4","App-logo-spin":"app_App-logo-spin__3NP3n","App-header":"app_App-header__3r9r4","App-link":"app_App-link__3t6Ka",videoList:"app_videoList__23TJ6",VideoDetail:"app_VideoDetail__l6HpF"}},12:function(e,t,n){e.exports={videoSection:"video_detail_videoSection__3IYHZ",detailInfo:"video_detail_detailInfo__2DXzT"}},19:function(e,t,n){e.exports={videoUl:"video_list_videoUl__Rc5gm"}},2:function(e,t,n){e.exports={header:"header_header__v9FKw",headerSection:"header_headerSection__1AdYg",logo:"header_logo__1X7aW",buttonImg:"header_buttonImg__Xbjx7",inputSection:"header_inputSection__3sEWo",searchInput:"header_searchInput__1D65V",searchBtn:"header_searchBtn__wcdJs",shortCut:"header_shortCut__3RDtZ",shortCutBtn:"header_shortCutBtn__1MOFU",shortCutBox:"header_shortCutBox__7x0tR",shortCutUl:"header_shortCutUl__2l5_0",shortCutLi:"header_shortCutLi__3z3k8",liImg:"header_liImg__3qwW9",rotation:"header_rotation__21rgb",btnOpacity:"header_btnOpacity__2D5Nq",showBox:"header_showBox__2Tpk0"}},27:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(18),s=n.n(c),o=n(10),r=(n(27),n(5)),l=n(11),u=n.n(l),d=n(2),h=n.n(d),p=[{image:"",alt:"thumbnail",text:"\uc5d0\uc13c\uc15c",value:"\uc5d0\uc13c\uc15c"},{image:"",alt:"thumbnail",text:"\ub4dc\ub9bc\ucf54\ub529",value:"\ub4dc\ub9bc\ucf54\ub529"},{image:"",alt:"thumbnail",text:"\ub178\ub9c8\ub4dc\ucf54\ub4dc",value:"\ub178\ub9c8\ub4dc\ucf54\ub4dc"},{image:"",alt:"thumbnail",text:"\uc870\ucf54\ub529",value:"\uc870\ucf54\ub529"},{image:"",alt:"thumbnail",text:"\uc787\uc12d",value:"\uc787\uc12d"}],_=n(1),j=function(e){var t=e.onSearch,n=e.selectVideo,i=Object(a.useRef)(),c=Object(a.useRef)(),s=Object(a.useRef)(),o=Object(a.useState)(),l=Object(r.a)(o,2),u=(l[0],l[1],function(){var e=i.current.value;console.log(e),t(e),i.current.value="",n(null)}),d=Object(a.useCallback)((function(){u()}),[]),j=function(e){n(null);for(var a=e.target;!a.classList.contains("shortCut");)if("BODY"==(a=a.parentNode).nodeName)return void(a=null);var i=a.innerText;t(i),b()},b=function(){var e=s.current,t=c.current;e.classList.toggle("".concat(h.a.rotation)),t.classList.toggle("".concat(h.a.showBox))};return Object(_.jsxs)("header",{className:h.a.header,children:[Object(_.jsxs)("section",{className:h.a.headerSection,children:[Object(_.jsx)("div",{className:h.a.logo,onClick:function(){n(null),t(null)},children:Object(_.jsx)("img",{className:h.a.buttonImg,src:"".concat("/ohtube/images/","/ohtube.svg"),alt:"logo"})}),Object(_.jsxs)("div",{className:h.a.inputSection,children:[Object(_.jsx)("input",{className:h.a.searchInput,ref:i,type:"search",placeholder:"OHTube \uac80\uc0c9",onKeyPress:function(e){"Enter"===e.key&&u()}}),Object(_.jsx)("button",{className:h.a.searchBtn,type:"submit",onClick:d,children:"search"})]})]}),Object(_.jsxs)("div",{className:h.a.shortCut,children:[Object(_.jsx)("button",{className:h.a.shortCutBtn,onClick:b,ref:s,children:"+"}),Object(_.jsx)("div",{className:h.a.shortCutBox,ref:c,children:Object(_.jsx)("ul",{className:h.a.shortCutUl,children:p.map((function(e){return Object(_.jsxs)("li",{onClick:j,className:"".concat(h.a.shortCutLi," shortCut"),value:e.value,children:[Object(_.jsx)("div",{className:h.a.liImg}),Object(_.jsx)("p",{children:e.text})]})}))})})]})]})},b=n(12),v=n.n(b),m=function(e){var t=e.video,n=e.video.snippet;return Object(_.jsxs)("section",{className:v.a.videoSection,children:[Object(_.jsx)("iframe",{type:"text/html",width:"100%",height:"500px",title:"youtube video player",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allowFullScreen:!0}),Object(_.jsxs)("div",{className:v.a.detailInfo,children:[Object(_.jsx)("h2",{children:n.title}),Object(_.jsx)("h3",{children:n.channelTitle}),Object(_.jsx)("pre",{children:n.description})]})]})},x=n(7),f=n.n(x),O=function(e){var t=e.video,n=e.video.snippet,a=e.clickVideo;return Object(_.jsxs)("li",{className:f.a.videoLi,onClick:function(){a(t)},children:[Object(_.jsx)("img",{src:n.thumbnails.medium.url,className:f.a.video,alt:"video thumnail"}),Object(_.jsxs)("div",{className:f.a.info,children:[Object(_.jsx)("h4",{children:n.title}),Object(_.jsx)("p",{children:n.channelTitle})]})]})},g=n(19),y=n.n(g),k=function(e){var t=e.videos,n=e.clickVideo;return Object(_.jsx)("ul",{className:y.a.videoUl,children:t.map((function(e){return Object(_.jsx)(O,{video:e,clickVideo:n},e.id)}))})};var N=function(e){var t=e.youtube,n=Object(a.useState)([]),i=Object(r.a)(n,2),c=i[0],s=i[1],o=Object(a.useState)(null),l=Object(r.a)(o,2),d=l[0],h=l[1],p=function(e){h(e)};return Object(a.useEffect)((function(){t.mostPopular().then((function(e){return s(e)})),h(null)}),[]),Object(_.jsxs)("div",{children:[Object(_.jsx)(j,{onSearch:function(e){h(null),t.search(e).then((function(e){return s(e)}))},selectVideo:p}),d&&Object(_.jsx)("div",{className:u.a.VideoDetail,children:Object(_.jsx)(m,{video:d})}),Object(_.jsx)("div",{className:u.a.videoList,children:Object(_.jsx)(k,{videos:c,clickVideo:p,display:d?"list":"grid"})})]})},w=n(16),C=n(6),I=n.n(C),S=n(13),B=n(20),L=n(21),A=new(function(){function e(t){Object(B.a)(this,e),this.key=t,this.requestOptions={method:"GET",redirect:"follow"}}return Object(L.a)(e,[{key:"mostPopular",value:function(){var e=Object(S.a)(I.a.mark((function e(){var t,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=".concat(this.key),this.requestOptions);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.items);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(S.a)(I.a.mark((function e(t){var n,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/youtube/v3/search/?part=snippet&maxResults=20&q=".concat(t,"&type=video&key=").concat(this.key),this.requestOptions);case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a.items.map((function(e){return Object(w.a)(Object(w.a)({},e),{},{id:e.id.videoId})})));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())("AIzaSyDNG_hfL-YnQr3sh-KrE0yRiVEdJzIgMP4");s.a.render(Object(_.jsx)(i.a.StrictMode,{children:Object(_.jsx)(o.a,{children:Object(_.jsx)(N,{youtube:A})})}),document.getElementById("root"))},7:function(e,t,n){e.exports={videoLi:"video_item_videoLi__1_gy-",video:"video_item_video__37dg9",info:"video_item_info__lba2m"}}},[[35,1,2]]]);
//# sourceMappingURL=main.c9a2c445.chunk.js.map