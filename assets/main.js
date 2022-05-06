var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,n=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&i(e,a,t[a]);if(l)for(var a of l(t))s.call(t,a)&&i(e,a,t[a]);return e};import{c,j as r,a as d,L as h,u as m,b as g,r as p,d as u,e as b,F as f,w,S as v,R as y,f as N,g as k,h as I,i as j,B as A,H as x,t as S,s as C,k as P,l as $,P as O}from"./vendor.js";var E={apiKey:"AIzaSyDnb7CnJxySsm2_w1Yq1l3ZlsRsN2qe16c",authDomain:"collectio-photo-2233e.firebaseapp.com",projectId:"collectio-photo-2233e",storageBucket:"collectio-photo-2233e.appspot.com",messagingSenderId:"590643802391",appId:"1:590643802391:web:ad661fba7fb099ca018752",measurementId:"G-X7DEP88WR5",webClientId:"590643802391-m1fno3tkvrl42o0qk1t4ap80s178eo2i.apps.googleusercontent.com"};const R=c({name:"user",initialState:{user:null},reducers:{setUser:(e,t)=>{e.user=t.payload}}}),{setUser:D}=R.actions,T=e=>e.userReducer.user;var U=R.reducer;const L=c({name:"albums",initialState:{albums:[]},reducers:{setAlbums:(e,t)=>{e.albums=t.payload},unshiftAlbums:(e,t)=>{e.albums.unshift(t.payload)},pushAlbums:(e,t)=>{e.albums.push(t.payload)},replaceAlbum:(e,t)=>{const a=e.albums.findIndex((e=>e.id===t.payload.id));e.albums[a]=t.payload},removeAlbum:(e,t)=>{const a=[];e.albums.forEach((e=>{e.id!==t.payload&&a.push(e)})),e.albums=a}}}),{setAlbums:_,unshiftAlbums:M,pushAlbums:B,replaceAlbum:q,removeAlbum:z}=L.actions,F=e=>e.albumsReducer.albums;var G=L.reducer;const W=e=>r("div",{id:"home",children:[r("nav",{children:[d(h,{to:"/",children:d("img",{className:"logo",src:"/collectio.svg",alt:"Collectio"})}),d("span",{})]}),d("div",{className:"loading",children:d("p",{children:"読み込み中..."})})]}),V=e=>r("div",{id:"home",children:[r("nav",{children:[d(h,{to:"/",children:d("img",{className:"logo",src:"/collectio.svg",alt:"Collectio"})}),d("span",{})]}),r("div",{className:"login",children:[d("h2",{children:"コレフォトへようこそ"}),r("p",{children:["コレフォトは、ボードゲーム遊んだ写真のアルバムが作れるアプリです。",d("br",{}),d("br",{}),"ゲーム会の後に、とりあえず写真を入れるだけ。",d("br",{}),"あとから、気に入った写真をSNSへシェア。",d("br",{}),d("br",{}),"まず、ログインしてサンプルのアルバムを見てみましょう。"]}),d("p",{children:d("button",{className:"google",onClick:e.GoogleLogin,children:"Googleでログイン"})}),window.cordova&&"iOS"===device.platform?d("p",{children:d("button",{className:"apple",onClick:e.AppleLogin,children:"Signin with Apple"})}):null]})]}),J=e=>{const t=m(F),a=m(T),l=g();return r("div",{id:"home",children:[r("nav",{children:[d(h,{to:"/",children:d("img",{className:"logo",src:"/collectio.svg",alt:"Collectio"})}),d("button",{onClick:e.signOut,children:"ログアウト"})]}),e.uploading?d("div",{className:"progress",children:d("p",{children:"アップロード中..."})}):null,d("div",{className:"albums",children:t.map((e=>r("div",{className:"album",children:[d(h,{to:`/album/${e.id}`,children:r("div",{className:"image",children:[d("h4",{children:e.title}),d("span",{children:e.date}),d("div",{className:"photos",children:e.photos.map((e=>d("div",{className:"photo",style:{backgroundImage:`url(${e.image})`}},e.image)))})]})}),d("div",{className:"games",children:e.games.map(((e,t)=>d(h,{to:{pathname:`/game/${e.id}`,state:{game:e}},children:r("div",{className:"game",children:[d("div",{style:{backgroundImage:`url(${e.image})`}}),d("span",{className:"title",children:e.title})]})},e.id+e.title)))})]},e.id)))}),r("form",{action:"",encType:"multipart/form-data",children:[d("input",{className:"file",title:"写真を選択",onChange:t=>e.createAlbum(t,a,l),id:"file",type:"file",name:"file",accept:"image/*",multiple:!0}),d("label",{htmlFor:"file"})]})]})},H=e=>{const t=m(F),[a,l]=p.exports.useState(null),[o,s]=p.exports.useState(!1),i=[],[n,c]=p.exports.useState(i),[w,v]=p.exports.useState(0),y=g(),N=u();let{id:k}=b();p.exports.useEffect((()=>{if(!a){const e=t.find((e=>e.id===k));e&&l(e)}}),[]),p.exports.useEffect((()=>{const e=t.find((e=>e.id===k));e&&l(e),s(!1),c(i),v(0)}),[t]);const I=m(T);return null===a?null:r("div",{id:"album",children:[r("nav",{children:[d(h,{to:"/",children:d("img",{className:"logo",src:"/back.svg",alt:"戻る"})}),d("span",{}),d("span",{className:"menu",children:d("span",{onClick:()=>{confirm(`「${a.title}」を削除します。\nよろしいですか？`)&&(e.deleteAlbum(a,y),N.push("/"))},children:d("img",{src:"/delete.svg",alt:"削除"})})})]}),r("div",{className:"album",children:[r("div",{className:"hero",children:[r("h4",{onClick:()=>{const t=prompt("アルバムのタイトルを変更",a.title===oe?"":a.title);if(t){const o=Object.assign({},a,{title:t});l(o),e.updateAlbum(o,y)}},children:[a.title,d("span",{children:d("img",{src:"/edit-white.svg",alt:"編集"})})]}),d("span",{children:a.date}),a.photos&&a.photos.length>0?d("div",{className:"cover",style:{backgroundImage:`url(${a.photos[0].image})`}}):null]}),r("div",{className:"actions",children:[d("h4",{children:"遊んだゲーム"}),"sample"===a.id?d("a",{onClick:()=>alert("サンプルのため、シェアできません。"),className:"share",children:"シェア"}):d(h,{to:{pathname:`/share/${a.id}`},className:"share",children:"シェア"})]}),r("div",{className:"games",children:[a.games.map(((e,t)=>d(h,{to:{pathname:`/game/${e.id}`,state:{game:e}},children:r("div",{className:"game",children:[d("div",{style:{backgroundImage:`url(${e.image})`}}),d("span",{className:"title",children:e.title})]},"game"+t)},e.id+e.title))),"sample"===a.id?d("a",{onClick:()=>alert("サンプルのため、ゲームは追加できません。"),className:"add",children:"+"}):d(h,{to:`/select/${k}`,className:"add",children:"+"}),0===a.games.length?d("p",{children:"遊んだゲームを追加しましょう"}):null]}),r("div",{className:"tabs",children:[d("span",{className:o?"":" active",onClick:()=>{s(!1)},children:"写真"}),r("span",{className:o?" active":"",onClick:()=>{s(!0)},children:[d("img",{src:o?"/edit-white.svg":"/edit-gray.svg",alt:"編集"}),"編集"]})]}),r("div",{className:"photos",children:[a.photos.map(((e,t)=>{if(o){const t=void 0!==n.find((t=>t.image===e.image));return d("div",{className:"photo",style:{backgroundImage:`url(${e.image})`},onClick:()=>{if(t){const t=n.filter((t=>t.image!==e.image));c(t)}else c([...n,e])},children:d("span",{className:"select"+(t?" selected":"")})},e.image)}return d(h,{to:{pathname:`/photo/${a.id}`,state:{album:a,index:t}},children:d("div",{className:"photo",style:{backgroundImage:`url(${e.image})`}})},e.image)})),Array.from({length:w}).map(((e,t)=>d("div",{className:"photo loading"},t)))]})]}),o?d("div",{className:"delete",onClick:()=>{n.length>0&&e.deletePhotos(I,a,y,n)},children:n.length>0?r(f,{children:[d("img",{src:"/delete-white.svg",alt:""}),n.length+"枚の写真を削除"]}):"写真を選択してください"}):r("form",{action:"",encType:"multipart/form-data",children:[d("input",{className:"file",title:"写真選択",onChange:t=>{e.addPhotos(t,I,a,y),t.target.files&&v(t.target.files.length)},id:"file",type:"file",name:"file",accept:"image/*",multiple:!0}),d("label",{htmlFor:"file"})]})]})};var Z=w((e=>{let t;try{t=e.location.state.game}catch{e.history.push("/"),location.reload()}const[a,l]=p.exports.useState("");return p.exports.useEffect((()=>{if(t.id){const e="https://db.collectio.jp/wp-json/wp/v2/posts/"+t.id;fetch(e).then((e=>e.json())).then((e=>{e.acf.amazon&&l(e.acf.amazon)}))}}),[]),r("div",{id:"game",children:[r("nav",{children:[d("a",{onClick:()=>e.history.goBack(),children:d("img",{className:"logo",src:"/back.svg",alt:"戻る"})}),d("span",{}),d("span",{})]}),r("div",{className:"game",children:[t.image?d("img",{src:t.image,alt:t.title}):d("div",{className:"noimage",children:t.title}),d("p",{className:"title",children:t.title}),"0"!==t.year?d("p",{className:"year",children:t.year}):null,r("div",{className:"links",children:[d("a",""===a?{href:"https://www.amazon.co.jp/s?i=toys&tag=collectio0c-22&k="+encodeURIComponent(t.title.replace(":"," ").replace("："," ")),className:"amazon",target:"_blank",children:"Amazonで探す"}:{href:a+"?tag=collectio0c-22",className:"amazon",target:"_blank",children:"Amazonで見る"}),t.bodogema?d("a",{href:t.bodogema,className:"bodogema",target:"_blank",children:"ボドゲーマ"}):null,t.bgg?d("a",{href:t.bgg,className:"bgg",target:"_blank",children:"BoardGameGeek"}):null,t.bgdb?d("a",{href:t.bgdb,className:"bgdb",target:"_blank",children:"ボードゲームデータベース"}):null]})]})]})}));var Y=w((e=>{const l=m(F),[o,s]=p.exports.useState({album:null});let i;try{i=e.location.state.index}catch{e.history.push("/"),location.reload()}let{id:c}=b();p.exports.useEffect((()=>{if(!o.album){const e=l.filter((e=>e.id===c))[0];e&&s({album:e})}}));const h={dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,initialSlide:i};return o.album?r("div",{id:"photo",children:[d("a",{className:"close",onClick:()=>e.history.goBack(),children:d("img",{src:"/close.svg"})}),d(v,(g=n({},h),u={children:o.album.photos.map((e=>d(y.Fragment,{children:d("div",{style:{backgroundImage:`url(${e.image})`}})},e.image)))},t(g,a(u))))]}):null;var g,u}));var K=w((e=>{const t=m(F),[a,l]=p.exports.useState(null),[o,s]=p.exports.useState([]),[i,n]=p.exports.useState(!1);let{id:c}=b();p.exports.useEffect((()=>{if(!a){const e=t.filter((e=>e.id===c))[0];e&&l(e)}}));return a?r("div",{id:"shareSelect",children:[r("nav",{children:[d(h,{to:{pathname:`/album/${a.id}`},children:d("img",{className:"logo",src:"/back.svg",alt:"戻る"})}),d("span",{children:"写真の選択"}),d("span",{})]}),r("div",{className:"album",children:[d("div",{className:"photos",children:a.photos.map(((e,t)=>d("div",{className:"photo"+(i?" disabled":""),onClick:()=>(e=>{-1===o.indexOf(e)?!1===i&&(o.push(e),o.length>=4&&n(!0),s([...o])):(o.splice(o.indexOf(e),1),s([...o]),n(!1))})(t),style:{backgroundImage:`url(${e.image})`},children:d("span",{className:"select"+(o.indexOf(t)>-1?" selected":"")})},e.image)))}),d("div",{className:"bottomActions",onClick:()=>{if(0===o.length)return alert("写真を選択してください");const t=a.photos.filter(((e,t)=>o.indexOf(t)>-1));e.history.push({pathname:"/share",state:{photos:t,album:a}})},children:d("span",{className:"share",children:"次へ"})})]})]}):null}));const X=async(e,t)=>{const a=await fetch(e).then((e=>e.blob()));return new File([a],`test${t}.jpg`,{type:a.type})};var Q=w((e=>{const[t,a]=p.exports.useState({album:{},photos:[]});p.exports.useEffect((()=>{try{const{photos:t}=e.location.state,{album:l}=e.location.state;a({album:l,photos:t})}catch{e.history.push("/"),location.reload()}return scrollTo(0,0),()=>{}}),[t.album,t.photos]);return null===t.album?null:r("div",{id:"share",children:[d("nav",{children:d("a",{onClick:()=>e.history.goBack(),children:d("img",{className:"logo",src:"/back.svg",alt:"戻る"})})}),d("div",{className:"photos",children:t.photos.map(((e,t)=>d("div",{className:"photo",style:{backgroundImage:`url(${e.image})`}},e.image)))}),r("button",{onClick:async()=>{if(window.cordova){const e=[];for(const a of t.photos)e.push(a.image);window.plugins.socialsharing.share(null,null,e,"https://collectio.jp/")}else if(navigator.share){const e=[];for(const a of t.photos){const t=await X(a.image,Math.floor(10*Math.random()));e.push(t)}navigator.share({url:"https://collectio.jp/",files:e}).then((()=>{console.log("Share was successful.")})).catch((e=>{console.log("Sharing failed",e)}))}else alert("このブラウザではシェア機能が使えません。\n最新のSafari, Chromeをお使いください。")},children:[d("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19.067",height:"24.245",viewBox:"0 0 19.067 24.245",children:d("path",{d:"M.005-4.834a.855.855,0,0,0,.849-.838V-16.7L.79-18.315l.73.763,1.622,1.74a.784.784,0,0,0,.58.258.751.751,0,0,0,.784-.763.75.75,0,0,0-.247-.559l-3.631-3.5a.838.838,0,0,0-.623-.29.838.838,0,0,0-.623.29l-3.631,3.5a.76.76,0,0,0-.258.559.748.748,0,0,0,.773.763.79.79,0,0,0,.591-.258l1.633-1.74.73-.763L-.854-16.7V-5.672A.865.865,0,0,0,.005-4.834ZM-6.161,3.577H6.161c2.245,0,3.373-1.117,3.373-3.33V-10.474c0-2.213-1.128-3.33-3.373-3.33h-3v1.729H6.128a1.519,1.519,0,0,1,1.676,1.7V.15a1.519,1.519,0,0,1-1.676,1.7H-6.139A1.507,1.507,0,0,1-7.8.15V-10.377a1.507,1.507,0,0,1,1.665-1.7h2.976V-13.8h-3c-2.245,0-3.373,1.117-3.373,3.33V.247C-9.534,2.46-8.406,3.577-6.161,3.577Z",transform:"translate(9.534 20.668)"})}),"共有する"]})]})}));const ee=e=>e.replace(/[\u3041-\u3096]/g,(function(e){const t=e.charCodeAt(0)+96;return String.fromCharCode(t)})),te=e=>{const t=m(F),a=p.exports.useRef(null),[l,o]=p.exports.useState(!1),[s,i]=p.exports.useState(null),[n,c]=p.exports.useState([]);let{id:h}=b();const f=g(),w=u();let v="";p.exports.useEffect((()=>{if(scrollTo(0,0),!s){const e=t.filter((e=>e.id===h))[0];e&&i(e)}a.current&&a.current.focus(),fetch("https://db-api-mxiq5qapta-an.a.run.app/search")}),[t]);const y=async e=>{e.preventDefault();const t=a.current.value;if(""===t)return c([]);if(t===v)return;v=t;let l=await k(t);if(o(!0),l.length>0){if(o(!1),-1===l.findIndex((e=>t===e.title))){const e={id:null,title:t,image:null};l.push(e)}c(l)}else ee(t)!==t&&(l=await k(ee(t)),l.length>0&&(o(!1),c(l)));if(0===l.length){const e=await I(t);if(0===e.length||-1===e.findIndex((e=>t===e.title))){const a={id:null,title:t,image:null};e.push(a)}l=l.concat(e),o(!1),c(l)}},k=async e=>{const t=await fetch("https://db-api-mxiq5qapta-an.a.run.app/search?q="+encodeURIComponent(e)).then((e=>e.json())),a=[];return t.map((e=>{a.push(e)})),a},I=async e=>{const t=await N("https://www.google.com/complete/search?hl=ja&client=firefox&q="+encodeURIComponent(e)).then((e=>e.json())),a=[];return t[1].map((e=>{const t={id:null,title:e,image:null};a.push(t)})),a},j=async e=>{if(e.id){const t=(await fetch(`https://db.collectio.jp/wp-json/wp/v2/posts/${e.id}?_embed`).then((e=>e.json()))).featured_image.src;if(e.image="https://db.collectio.jp/wp-includes/images/media/default.png"!==t?t:null,-1===s.games.findIndex((t=>t.id===e.id))){const t=Object.assign({},s,{games:[...s.games,e]});i(t)}}else if(-1===s.games.findIndex((t=>t.title===e.title))){const t=Object.assign({},s,{games:[...s.games,e]});i(t)}c([]),a.current.value=""};return null===s?null:r("div",{id:"select",children:[r("nav",{children:[d("a",{onClick:()=>w.goBack(),children:d("img",{className:"logo",src:"/back.svg",alt:"戻る"})}),0===n.length?d("a",{onClick:()=>{(async()=>{e.updateAlbum(s,f),w.push(`/album/${s.id}`)})()},className:"complete",children:"完了"}):null]}),r("form",{action:"",onSubmit:y,children:[d("div",{className:"bg",children:d("input",{type:"text",ref:a,placeholder:s.games.length>=2?"さらにゲームを追加":"ゲームを検索",onChange:y})}),0===n.length&&l?d("div",{className:"suggests",children:"読み込み中..."}):null,n.length>0?d("div",{className:"suggests",children:n.slice(0,100).map(((e,t)=>d("div",{onClick:j.bind(void 0,e),children:e.title},"suggest"+t)))}):null]}),s.games.length>0?r("div",{className:"games",children:[d("h3",{children:"遊んだゲーム"}),s.games.map(((e,t)=>r("div",{className:"game",children:[e.image?d("img",{src:e.image,alt:""}):d("span",{className:"image"}),r("span",{className:"data",children:[d("span",{className:"title",children:e.title}),d("span",{className:"delete",onClick:()=>{(e=>{const t=Object.assign({},s,{games:s.games.filter((t=>t.id!==e.id||null==t.id&&t.title!==e.title))});i(t)})(e)},children:d("img",{src:"/delete.svg",alt:"削除"})})]})]},"game"+t)))]}):null,d("div",{className:"photos",children:d("div",{children:s.photos.map(((e,t)=>d("div",{className:"photo",children:d("img",{src:e.image,alt:""})},"photo"+t)))})})]})};let ae=A;ae=window.cordova?x:A,k.initializeApp(E);const le=k.firestore();k.storage(),k.analytics();const oe="ある日のボードゲーム会",se={id:"sample",title:"サンプルのボードゲーム会",date:`${(new Date).getFullYear()}/${(new Date).getMonth()+1}/${(new Date).getDate()}`,photos:[{image:"https://storage.googleapis.com/collectio-photo-assets/sample/1.jpg"},{image:"https://storage.googleapis.com/collectio-photo-assets/sample/2.jpg"},{image:"https://storage.googleapis.com/collectio-photo-assets/sample/3.jpg"},{image:"https://storage.googleapis.com/collectio-photo-assets/sample/4.jpg"},{image:"https://storage.googleapis.com/collectio-photo-assets/sample/5.jpg"},{image:"https://storage.googleapis.com/collectio-photo-assets/sample/6.jpg"}],games:[{bgdb:"http://www.gamers-jp.com/playgame/db_gamea.php?game_id=6959",bgg:"https://boardgamegeek.com/boardgame/191895",bodogema:"https://bodoge.hoobby.net/games/golovonogi",etitle:"Toddles-Bobbles Green",hasJPURL:1,id:"95735",keyword:"なんじゃもんじゃ,みどり,緑",maxPlayers:6,minPlayers:2,playAge:4,playingTime:15,title:"ナンジャモンジャ・ミドリ",year:"2010",image:"https://db.collectio.jp/wp-content/uploads/2019/05/95735.jpg"},{bgdb:"",bgg:"https://boardgamegeek.com/boardgame/230802",bodogema:"https://bodoge.hoobby.net/games/azul",etitle:"Azul",hasJPURL:1,id:"72660",keyword:"",maxPlayers:4,minPlayers:2,playAge:8,playingTime:45,title:"アズール",year:"2017",image:"https://db.collectio.jp/wp-content/uploads/2019/05/72660.jpg"},{bgdb:"http://www.gamers-jp.com/playgame/db_gamea.php?game_id=4786",bgg:"https://boardgamegeek.com/boardgame/68448",bodogema:"https://bodoge.hoobby.net/games/7-wonders",etitle:"7 Wonders",hasJPURL:1,id:"81063",keyword:"せかいのななふしぎ せぶんわんだー 7わんだー",maxPlayers:"",minPlayers:"",playAge:"",playingTime:"",title:"世界の七不思議",year:"2010",image:"https://db.collectio.jp/wp-content/uploads/2019/05/81063.jpg"},{bgdb:null,bgg:null,bodogema:null,etitle:"",hasJPURL:1,id:"110318",keyword:"",maxPlayers:null,minPlayers:null,playAge:null,playingTime:null,title:"Escape from the Office: The exciting escape game – escape your boss",year:"0",image:null}],userId:""},ie=async(e,t,a,l)=>{if(e.target.files){const o=[];for(const t of e.target.files){const e=await ne(t).catch((e=>console.log(e)));e&&o.push(e)}const s=le.collection("albums").doc(a.id);await s.update(a).then((async()=>{console.log("Document written with ID: ",s.id);const e=[].concat(a.photos);for(const a of o){const l=await ce(t,s,a).catch((e=>console.log(e)));l&&e.push({image:l})}s.update({photos:e}).catch((e=>console.log(e)));const i=Object.assign({},a,{photos:e});l(q(i))})).catch((e=>console.log(e)))}},ne=e=>new Promise(((t,a)=>{const l=new FileReader;l.onload=async e=>{t(await he(e.target.result))},l.readAsDataURL(e)})),ce=(e,t,a)=>(console.log("uploadPhoto"),new Promise(((l,o)=>{const s=k.storage().ref().child(`albums/${e.uid}/${t.id}/${(new Date).getTime()}.jpg`).putString(a,"data_url");s.on("state_changed",(e=>{const t=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+t+"% done"),e.state){case k.storage.TaskState.PAUSED:console.log("Upload is paused");break;case k.storage.TaskState.RUNNING:console.log("Upload is running")}}),(e=>{console.log(e),o()}),(async()=>{const e=await s.snapshot.ref.getDownloadURL();console.log("File available at",e),l(e)}))}))),re=(e,t,a)=>new Promise(((l,o)=>{const s=le.collection("albums").doc(t.id),i=k.storage().ref(),n=a.image.split("?")[0].split("%2F")[3];i.child(`albums/${e.uid}/${s.id}/${n}`).delete().then((()=>{console.log("File deleted"),l()})).catch((e=>{console.log(e),o()}))})),de=async(e,t,a,l)=>{for(const n of l)await re(e,t,n).catch((e=>console.log(e)));const o=[];for(const n of t.photos){void 0===l.find((e=>e.image===n.image))&&void 0===o.find((e=>e.image===n.image))&&o.push(n)}const s=le.collection("albums").doc(t.id);await s.update({photos:o}).catch((e=>console.log(e)));const i=Object.assign({},t,{photos:o});a(q(i))},he=e=>new Promise(((t,a)=>{const l=640,o=document.createElement("canvas"),s=o.getContext("2d");if(s){const a=new Image;a.crossOrigin="Anonymous",a.onload=async a=>{const i=a.target;let n,c;if(i.width>i.height?(n=l,c=i.height*l/i.width):(c=l,n=i.width*l/i.height),o.width=n,o.height=c,s.drawImage(i,0,0,i.width,i.height,0,0,n,c),void 0===document.createElement("img").style.imageOrientation){const a=((e,t)=>{var a=document.createElement("canvas"),l=a.getContext("2d");if(l){switch(t){case 3:a.width=e.width,a.height=e.height,l.rotate(Math.PI),l.drawImage(e,-e.width,-e.height),l.rotate(-Math.PI);break;case 6:a.width=e.height,a.height=e.width,l.rotate(.5*Math.PI),l.drawImage(e,0,-e.height),l.rotate(.5*-Math.PI);break;case 8:a.width=e.height,a.height=e.width,l.rotate(.5*-Math.PI),l.drawImage(e,-e.width,0),l.rotate(.5*Math.PI);break;default:a.width=e.width,a.height=e.height,l.drawImage(e,0,0)}return a.toDataURL("image/jpeg",.8)}})(i,await S.orientation(e));t(a)}else t(o.toDataURL("image/jpeg",.8))},a.src=e}else a()})),me=async(e,t)=>{const a=le.collection("albums").doc(e.id);await a.update(e).then((()=>{t(q(e))})).catch((e=>console.log(e)))},ge=async(e,t)=>{console.log(e),await le.collection("albums").doc(e.id).delete(),t(z(e.id))},pe=async e=>{let t=[];e.forEach((e=>{e.games.forEach((e=>{e.id&&t.push(parseInt(e.id))}))})),t=Array.from(new Set(t));const a="https://db.collectio.jp/wp-json/wp/v2/posts?include="+t.join(",");console.log(a);const l=await fetch(a).then((e=>e.json()));return e.forEach((e=>{e.games.forEach((e=>{l.map((t=>{"https://db.collectio.jp/wp-includes/images/media/default.png"!==t.featured_image.src&&e.id==t.id&&(e.image=t.featured_image.src)}))}))})),e};function ue(){const[e,t]=p.exports.useState(!0),[a,l]=p.exports.useState(!1),o=m(T);m(F);const s=g();p.exports.useEffect((()=>{if(!o)return k.auth().onAuthStateChanged((e=>{e&&(s(D({uid:e.uid})),((e,t)=>{let a=[];le.collection("albums").where("userId","==",e.uid).orderBy("date","desc").get().then((async e=>{e.forEach((e=>{const t=e.data();t.id=e.id,delete t.date,a.push(t)})),e.empty?t(B(se)):(a=await pe(a),t(_(a)))})).catch((e=>{console.log("Error getting documents: ",e)}))})(e,s)),t(!1)})),()=>{console.log("Clean up")}}));const i=()=>{if(window.cordova){let e={};"ios"!==window.cordova.platformId&&(e={webClientId:E.webClientId,offline:!1}),window.plugins.googleplus.login(e,(e=>{let t=(new k.auth.GoogleAuthProvider).credential(e.idToken);k.auth().signInWithCredential(t)}),(e=>{console.log("error: "+e)}))}else{const e=new k.auth.GoogleAuthProvider;k.auth().signInWithRedirect(e)}};k.auth();const n=()=>{window.cordova&&SignInWithApple.isAvailable().then((function(e){console.info(e);const t=function(e){let t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",l=a.length;for(let o=0;o<e;o++)t+=a.charAt(Math.floor(Math.random()*l));return t}(32);return SignInWithApple.request({requestedScopes:[SignInWithApple.Scope.Email],nonce:C(t).toString()}).then((e=>{let a=new k.auth.OAuthProvider("apple.com").credential({idToken:e.identityToken,rawNonce:t});k.auth().signInWithCredential(a).then((()=>{})).catch((e=>{e.code;const t=e.message;console.log("firebase auth failed with Apple Sign In"),console.log(t),alert(e.message||"エラーが発生しました")}))})).catch((e=>{console.error(e),alert(e.message||"エラーが発生しました")}))})).catch((e=>{console.log(e),alert("この機種ではAppleアカウントのログインをサポートしていません")}))},c=()=>{k.auth().signOut().then((()=>{location.reload()})).catch((e=>{}))};return d(ae,{children:d("div",{children:r(I,{children:[d(j,{path:"/select/:id",render:()=>d(te,{updateAlbum:me})}),d(j,{path:"/share/:id",children:d(K,{})}),d(j,{path:"/share",children:d(Q,{})}),d(j,{path:"/photo/:id",children:d(Y,{})}),d(j,{path:"/game/:id",children:d(Z,{})}),d(j,{path:"/album/:id",render:()=>d(H,{updateAlbum:me,addPhotos:ie,deletePhotos:de,deleteAlbum:ge})}),d(j,{path:"/",render:()=>e?d(W,{}):o?d(J,{uploading:a,signOut:c,createAlbum:(e,t,a)=>{l(!0),(async(e,t,a,l)=>{if(e.target.files){const o=[];for(const t of e.target.files){const e=await ne(t).catch((e=>console.log(e)));e&&o.push(e)}const s={id:"",title:oe,date:new Date,photos:[],games:[],userId:t.uid},i=await le.collection("albums").add(s).catch((e=>{console.error("Error adding document: ",e)}));if(i){console.log("Document written with ID: ",i.id);const e=[];for(const a of o){const l=await ce(t,i,a).catch((e=>console.log(e)));l&&e.push({image:l})}i.update({id:i.id,photos:e}).catch((e=>console.log(e))),s.id=i.id,s.photos=e,delete s.date,a(M(s)),l(!1)}}})(e,t,a,l)}}):d(V,{GoogleLogin:i,AppleLogin:n})})]})})})}const be=P({reducer:{userReducer:U,albumsReducer:G}});const fe=()=>{$.render(d(y.StrictMode,{children:d(O,{store:be,children:d(ue,{})})}),document.getElementById("root"))};var we;"true"===(we={},location.search.substr(1).split("&").map((function(e){var t=e.split("=");we[t[0]]=decodeURIComponent(t[1])})),we).cordova?document.addEventListener("deviceready",fe,!1):fe();
