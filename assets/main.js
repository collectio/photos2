var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l;import{c as o,R as n,L as c,u as r,a as i,r as m,b as d,d as g,w as u,S as p,f as h,e as E,g as b,h as f,B as v,H as w,t as y,i as N,j as k,P as I}from"./vendor.js";var j={apiKey:"AIzaSyDnb7CnJxySsm2_w1Yq1l3ZlsRsN2qe16c",authDomain:"collectio-photo-2233e.firebaseapp.com",projectId:"collectio-photo-2233e",storageBucket:"collectio-photo-2233e.appspot.com",messagingSenderId:"590643802391",appId:"1:590643802391:web:ad661fba7fb099ca018752",measurementId:"G-X7DEP88WR5"};const x=o({name:"user",initialState:{user:null},reducers:{setUser:(e,t)=>{e.user=t.payload}}}),{setUser:A}=x.actions,C=e=>e.userReducer.user;var S=x.reducer;const P=o({name:"albums",initialState:{albums:[]},reducers:{setAlbums:(e,t)=>{e.albums=t.payload},unshiftAlbums:(e,t)=>{e.albums.unshift(t.payload)},pushAlbums:(e,t)=>{e.albums.push(t.payload)},replaceAlbum:(e,t)=>{const a=e.albums.findIndex((e=>e.id===t.payload.id));e.albums[a]=t.payload},removeAlbum:(e,t)=>{const a=[];e.albums.forEach((e=>{e.id!==t.payload&&a.push(e)})),e.albums=a}}}),{setAlbums:R,unshiftAlbums:$,pushAlbums:U,replaceAlbum:O,removeAlbum:D}=P.actions,L=e=>e.albumsReducer.albums;var T=P.reducer;const _=e=>n.createElement("div",{id:"home"},n.createElement("nav",null,n.createElement(c,{to:"/"},n.createElement("img",{className:"logo",src:"/collectio.svg",alt:"Collectio"}))),n.createElement("div",{className:"loading"},n.createElement("p",null,"読み込み中..."))),M=e=>n.createElement("div",{id:"home"},n.createElement("nav",null,n.createElement(c,{to:"/"},n.createElement("img",{className:"logo",src:"/collectio.svg",alt:"Collectio"}))),n.createElement("div",{className:"login"},n.createElement("h2",null,"Collectio Photoへようこそ"),n.createElement("p",null,"このアプリは、ボードゲームを遊んだ時の写真をアルバムにまとめて、遊んだゲームを記録できるアプリです。",n.createElement("br",null),n.createElement("br",null),"「この前、あの時、遊んだゲームはなんだった？」",n.createElement("br",null),"そんな時に役立ちます。",n.createElement("br",null),n.createElement("br",null),"どんな風に使えるか、ログインしてサンプルのアルバムを見てみましょう。"),n.createElement("p",null,n.createElement("button",{className:"google",onClick:e.GoogleLogin},"Googleでログイン")))),z=e=>{const t=r(L),a=r(C),l=i();return n.createElement("div",{id:"home"},n.createElement("nav",null,n.createElement(c,{to:"/"},n.createElement("img",{className:"logo",src:"/collectio.svg",alt:"Collectio"}))),n.createElement("div",{className:"profile"},n.createElement("img",{src:a.photoURL,alt:""}),n.createElement("p",null,a.displayName),n.createElement("button",{onClick:e.signOut},"ログアウト")),e.uploading?n.createElement("div",{className:"progress"},n.createElement("p",null,"アップロード中...")):null,n.createElement("div",{className:"albums"},t.map((e=>n.createElement("div",{className:"album",key:e.id},n.createElement(c,{to:`/album/${e.id}`},n.createElement("div",{className:"image"},n.createElement("h4",null,e.title),n.createElement("span",null,e.date),n.createElement("div",{className:"photos"},e.photos.map((e=>n.createElement("div",{key:e.image,className:"photo",style:{backgroundImage:`url(${e.image})`}})))))),n.createElement("div",{className:"games"},e.games.map(((e,t)=>n.createElement(c,{to:{pathname:`/game/${e.id}`,state:{game:e}},key:e.id+e.title},n.createElement("div",{className:"game"},n.createElement("div",{style:{backgroundImage:`url(${e.image})`}}),n.createElement("span",{className:"title"},e.title)))))))))),n.createElement("form",{action:"",encType:"multipart/form-data"},n.createElement("input",{className:"file",title:"写真を選択",onChange:t=>e.createAlbum(t,a,l),id:"file",type:"file",name:"file",accept:"image/*",multiple:!0}),n.createElement("label",{htmlFor:"file"})))},B=e=>{const[t,a]=m.exports.useState(null),l=i(),s=d();let{id:o}=g();const u=r(L);if(!t){const e=u.find((e=>e.id===o));e&&a(e)}const p=r(C);return null===t?null:n.createElement("div",{id:"album"},n.createElement("nav",null,n.createElement(c,{to:"/"},n.createElement("img",{className:"logo",src:"/back.svg",alt:"戻る"})),n.createElement("span",null),n.createElement("span",{className:"menu"},n.createElement("span",{onClick:()=>{const s=prompt("アルバムのタイトルを変更","");if(s){const o=Object.assign({},t,{title:s});a(o),e.updateAlbum(o,l)}}},n.createElement("img",{src:"/edit.svg",alt:"編集"})),n.createElement("span",{onClick:()=>{confirm(`「${t.title}」を削除します。\nよろしいですか？`)&&(e.deleteAlbum(t,l),s.push("/"))}},n.createElement("img",{src:"/delete.svg",alt:"削除"})))),n.createElement("div",{className:"album"},n.createElement("div",{className:"hero"},n.createElement("h4",null,t.title),n.createElement("span",null,t.date),t.photos&&t.photos.length>0?n.createElement("div",{className:"cover",style:{backgroundImage:`url(${t.photos[0].image})`}}):null),n.createElement("div",{className:"actions"},n.createElement("h4",null,"遊んだゲーム"),"sample"===t.id?n.createElement("a",{onClick:()=>alert("サンプルのため、シェアできません。"),className:"share"},"シェア"):n.createElement(c,{to:{pathname:`/share/${t.id}`},className:"share"},"シェア")),n.createElement("div",{className:"games"},t.games.map(((e,t)=>n.createElement(c,{to:{pathname:`/game/${e.id}`,state:{game:e}},key:e.id+e.title},n.createElement("div",{key:"game"+t,className:"game"},n.createElement("div",{style:{backgroundImage:`url(${e.image})`}}),n.createElement("span",{className:"title"},e.title))))),"sample"===t.id?n.createElement("a",{onClick:()=>alert("サンプルのため、ゲームは追加できません。"),className:"add"},"+"):n.createElement(c,{to:`/select/${o}`,className:"add"},"+"),0===t.games.length?n.createElement("p",null,"遊んだゲームを追加しましょう"):null),n.createElement("div",{className:"photos"},t.photos.map(((e,a)=>n.createElement(c,{to:{pathname:`/photo/${t.id}`,state:{album:t,index:a}},key:e.image},n.createElement("div",{className:"photo",style:{backgroundImage:`url(${e.image})`}})))))),n.createElement("form",{action:"",encType:"multipart/form-data"},n.createElement("input",{className:"file",title:"写真選択",onChange:s=>{e.addPhotos(s,p,t,l,(e=>{const l=Object.assign({},t,{photos:e});a(l)}))},id:"file",type:"file",name:"file",accept:"image/*",multiple:!0}),n.createElement("label",{htmlFor:"file"})))};var G=u((e=>{const{game:t}=e.location.state,[a,l]=m.exports.useState("");return m.exports.useEffect((()=>{if(t.id){const e="https://db.collectio.jp/wp-json/wp/v2/posts/"+t.id;fetch(e).then((e=>e.json())).then((e=>{e.acf.amazon&&l(e.acf.amazon)}))}}),[]),n.createElement("div",{id:"game"},n.createElement("nav",null,n.createElement("a",{onClick:()=>e.history.goBack()},n.createElement("img",{className:"logo",src:"/back.svg",alt:"戻る"})),n.createElement("span",null),n.createElement("span",null)),n.createElement("div",{className:"game"},t.image?n.createElement("img",{src:t.image,alt:t.title}):n.createElement("div",{className:"noimage"},t.title),n.createElement("p",{className:"title"},t.title),"0"!==t.year?n.createElement("p",{className:"year"},t.year):null,n.createElement("div",{className:"links"},""===a?n.createElement("a",{href:"https://www.amazon.co.jp/s?i=toys&k="+encodeURIComponent(t.title.replace(":"," ").replace("："," ")),className:"amazon",target:"_blank"},"Amazonで探す"):n.createElement("a",{href:a,className:"amazon",target:"_blank"},"Amazonで見る"),t.bodogema?n.createElement("a",{href:t.bodogema,className:"bodogema",target:"_blank"},"ボドゲーマ"):null,t.bgg?n.createElement("a",{href:t.bgg,className:"bgg",target:"_blank"},"BoardGameGeek"):null,t.bgdb?n.createElement("a",{href:t.bgdb,className:"bgdb",target:"_blank"},"ボードゲームデータベース"):null)))}));var q=u((e=>{const o=r(L),[i,d]=m.exports.useState({album:null});let{index:u}=e.location.state,{id:h}=g();m.exports.useEffect((()=>{if(!i.album){const e=o.filter((e=>e.id===h))[0];e&&d({album:e})}}));const E={dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,initialSlide:u};return i.album?n.createElement("div",{id:"photo"},n.createElement(c,{to:{pathname:`/album/${h}`},className:"close"},n.createElement("img",{src:"/close.svg"})),n.createElement(p,((e,o)=>{for(var n in o||(o={}))a.call(o,n)&&s(e,n,o[n]);if(t)for(var n of t(o))l.call(o,n)&&s(e,n,o[n]);return e})({},E),i.album.photos.map((e=>n.createElement(n.Fragment,{key:e.image},n.createElement("div",{style:{backgroundImage:`url(${e.image})`}})))))):null}));var F=u((e=>{const t=r(L),[a,l]=m.exports.useState(null),[s,o]=m.exports.useState([]),[i,d]=m.exports.useState(!1);let{id:u}=g();m.exports.useEffect((()=>{if(!a){const e=t.filter((e=>e.id===u))[0];e&&l(e)}}));return a?n.createElement("div",{id:"shareSelect"},n.createElement("nav",null,n.createElement(c,{to:{pathname:`/album/${a.id}`}},n.createElement("img",{className:"logo",src:"/back.svg",alt:"戻る"})),n.createElement("span",null,"写真の選択"),n.createElement("span",null)),n.createElement("div",{className:"album"},n.createElement("div",{className:"photos"},a.photos.map(((e,t)=>n.createElement("div",{key:e.image,className:"photo"+(i?" disabled":""),onClick:()=>(e=>{-1===s.indexOf(e)?!1===i&&(s.push(e),s.length>=4&&d(!0),o([...s])):(s.splice(s.indexOf(e),1),o([...s]),d(!1))})(t),style:{backgroundImage:`url(${e.image})`}},n.createElement("span",{className:"select"+(s.indexOf(t)>-1?" selected":"")}))))),n.createElement("div",{className:"bottomActions",onClick:()=>{if(0===s.length)return alert("写真を選択してください");const t=a.photos.filter(((e,t)=>s.indexOf(t)>-1));e.history.push({pathname:"/share",state:{photos:t,album:a}})}},n.createElement("span",{className:"share"},"次へ")))):null}));const V=async(e,t)=>{const a=await fetch(e).then((e=>e.blob()));return new File([a],`test${t}.jpg`,{type:a.type})};var J=u((e=>{const[t,a]=m.exports.useState({album:{},photos:[]});m.exports.useEffect((()=>{try{const{photos:t}=e.location.state,{album:l}=e.location.state;a({album:l,photos:t})}catch{e.history.push("/"),location.reload()}return scrollTo(0,0),()=>{}}),[t.album,t.photos]);return null===t.album?null:n.createElement("div",{id:"share"},n.createElement("nav",null,n.createElement("a",{onClick:()=>e.history.goBack()},n.createElement("img",{className:"logo",src:"/back.svg",alt:"戻る"}))),n.createElement("div",{className:"photos"},t.photos.map(((e,t)=>n.createElement("div",{key:e.image,className:"photo",style:{backgroundImage:`url(${e.image})`}})))),n.createElement("button",{onClick:async()=>{const e=[];for(const a of t.photos){const t=await V(a.image,Math.floor(10*Math.random()));e.push(t)}navigator.share?navigator.share({url:"https://collectio.jp/",files:e}).then((()=>{console.log("Share was successful.")})).catch((e=>{console.log("Sharing failed",e)})):alert("このブラウザではシェア機能が使えません。\n最新のSafari, Chromeをお使いください。")}},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19.067",height:"24.245",viewBox:"0 0 19.067 24.245"},n.createElement("path",{d:"M.005-4.834a.855.855,0,0,0,.849-.838V-16.7L.79-18.315l.73.763,1.622,1.74a.784.784,0,0,0,.58.258.751.751,0,0,0,.784-.763.75.75,0,0,0-.247-.559l-3.631-3.5a.838.838,0,0,0-.623-.29.838.838,0,0,0-.623.29l-3.631,3.5a.76.76,0,0,0-.258.559.748.748,0,0,0,.773.763.79.79,0,0,0,.591-.258l1.633-1.74.73-.763L-.854-16.7V-5.672A.865.865,0,0,0,.005-4.834ZM-6.161,3.577H6.161c2.245,0,3.373-1.117,3.373-3.33V-10.474c0-2.213-1.128-3.33-3.373-3.33h-3v1.729H6.128a1.519,1.519,0,0,1,1.676,1.7V.15a1.519,1.519,0,0,1-1.676,1.7H-6.139A1.507,1.507,0,0,1-7.8.15V-10.377a1.507,1.507,0,0,1,1.665-1.7h2.976V-13.8h-3c-2.245,0-3.373,1.117-3.373,3.33V.247C-9.534,2.46-8.406,3.577-6.161,3.577Z",transform:"translate(9.534 20.668)"})),"共有する"))}));const H=e=>{const t=r(L),a=m.exports.useRef(null),[l,s]=m.exports.useState(!1),[o,c]=m.exports.useState(null),[u,p]=m.exports.useState([]);let{id:E}=g();const b=i(),f=d();let v="";m.exports.useEffect((()=>{if(scrollTo(0,0),!o){const e=t.filter((e=>e.id===E))[0];e&&c(e)}a.current&&a.current.focus(),fetch("https://db-api-mxiq5qapta-an.a.run.app/search")}),[t]);const w=async e=>{e.preventDefault();const t=a.current.value;if(""===t)return p([]);if(t===v)return;v=t;let l=await y(t);var o;if(s(!0),0===l.length?l=await y((o=t,o.replace(/[\u3041-\u3096]/g,(function(e){const t=e.charCodeAt(0)+96;return String.fromCharCode(t)})))):(s(!1),p(l)),l.length<=0){const e=await N(t);l=l.concat(e)}s(!1),p(l)},y=async e=>{const t=await fetch("https://db-api-mxiq5qapta-an.a.run.app/search?q="+encodeURIComponent(e)).then((e=>e.json())),a=[];return t.map((e=>{a.push(e)})),a},N=async e=>{const t=await h("https://www.google.com/complete/search?hl=ja&client=firefox&q="+encodeURIComponent(e)).then((e=>e.json())),a=[];if(t[1].map((e=>{const t={id:null,title:e,image:null};a.push(t)})),0===a.length||-1===a.findIndex((t=>e===t.title))){const t={id:null,title:e,image:null};a.unshift(t)}return a},k=async e=>{if(e.id){const t=(await fetch(`https://db.collectio.jp/wp-json/wp/v2/posts/${e.id}?_embed`).then((e=>e.json()))).featured_image.src;if(e.image="https://db.collectio.jp/wp-includes/images/media/default.png"!==t?t:null,-1===o.games.findIndex((t=>t.id===e.id))){const t=Object.assign({},o,{games:[...o.games,e]});c(t)}}else if(-1===o.games.findIndex((t=>t.title===e.title))){const t=Object.assign({},o,{games:[...o.games,e]});c(t)}p([]),a.current.value=""};return null===o?null:n.createElement("div",{id:"select"},n.createElement("nav",null,n.createElement("a",{onClick:()=>f.goBack()},n.createElement("img",{className:"logo",src:"/back.svg",alt:"戻る"})),0===u.length?n.createElement("a",{onClick:()=>{(async()=>{e.updateAlbum(o,b),f.push("/album")})()}},"完了"):null),n.createElement("form",{action:"",onSubmit:w},n.createElement("div",{className:"bg"},n.createElement("input",{type:"text",ref:a,placeholder:"ゲームを検索",onChange:w})),0===u.length&&l?n.createElement("div",{className:"suggests"},"読み込み中..."):null,u.length>0?n.createElement("div",{className:"suggests"},u.slice(0,100).map(((e,t)=>n.createElement("div",{key:"suggest"+t,onClick:k.bind(void 0,e)},e.title)))):null),o.games.length>0?n.createElement("div",{className:"games"},n.createElement("h3",null,"遊んだゲーム"),o.games.map(((e,t)=>n.createElement("div",{key:"game"+t,className:"game"},e.image?n.createElement("img",{src:e.image,alt:""}):n.createElement("span",{className:"image"}),n.createElement("span",{className:"title"},e.title))))):null)};let W=v;W=window.cordova?w:v,E.initializeApp(j);const Z=E.firestore();E.storage(),E.analytics();const Y={id:"sample",title:"サンプルのボードゲーム会",date:`${(new Date).getFullYear()}/${(new Date).getMonth()+1}/${(new Date).getDate()}`,photos:[{image:"https://storage.googleapis.com/collectio-photo-assets/sample/1.jpg"},{image:"https://storage.googleapis.com/collectio-photo-assets/sample/2.jpg"},{image:"https://storage.googleapis.com/collectio-photo-assets/sample/3.jpg"},{image:"https://storage.googleapis.com/collectio-photo-assets/sample/4.jpg"},{image:"https://storage.googleapis.com/collectio-photo-assets/sample/5.jpg"},{image:"https://storage.googleapis.com/collectio-photo-assets/sample/6.jpg"}],games:[{bgdb:"http://www.gamers-jp.com/playgame/db_gamea.php?game_id=6959",bgg:"https://boardgamegeek.com/boardgame/191895",bodogema:"https://bodoge.hoobby.net/games/golovonogi",etitle:"Toddles-Bobbles Green",hasJPURL:1,id:"95735",keyword:"なんじゃもんじゃ,みどり,緑",maxPlayers:6,minPlayers:2,playAge:4,playingTime:15,title:"ナンジャモンジャ・ミドリ",year:"2010",image:"https://db.collectio.jp/wp-content/uploads/2019/05/95735.jpg"},{bgdb:"",bgg:"https://boardgamegeek.com/boardgame/230802",bodogema:"https://bodoge.hoobby.net/games/azul",etitle:"Azul",hasJPURL:1,id:"72660",keyword:"",maxPlayers:4,minPlayers:2,playAge:8,playingTime:45,title:"アズール",year:"2017",image:"https://db.collectio.jp/wp-content/uploads/2019/05/72660.jpg"},{bgdb:"http://www.gamers-jp.com/playgame/db_gamea.php?game_id=4786",bgg:"https://boardgamegeek.com/boardgame/68448",bodogema:"https://bodoge.hoobby.net/games/7-wonders",etitle:"7 Wonders",hasJPURL:1,id:"81063",keyword:"せかいのななふしぎ せぶんわんだー 7わんだー",maxPlayers:"",minPlayers:"",playAge:"",playingTime:"",title:"世界の七不思議",year:"2010",image:"https://db.collectio.jp/wp-content/uploads/2019/05/81063.jpg"},{bgdb:null,bgg:null,bodogema:null,etitle:"",hasJPURL:1,id:"110318",keyword:"",maxPlayers:null,minPlayers:null,playAge:null,playingTime:null,title:"Escape from the Office: The exciting escape game – escape your boss",year:"0",image:null}],userId:""},K=async(e,t,a,l,s)=>{if(e.target.files){const o=[];for(const t of e.target.files){const e=await X(t).catch((e=>console.log(e)));e&&o.push(e)}const n=Z.collection("albums").doc(a.id);await n.update(a).then((async()=>{console.log("Document written with ID: ",n.id);const e=[].concat(a.photos);for(const a of o){const l=await Q(t,n,a).catch((e=>console.log(e)));l&&e.push({image:l})}n.update({photos:e}).catch((e=>console.log(e)));const c=Object.assign({},a,{photos:e});l(O(c)),s(e)})).catch((e=>console.log(e)))}},X=e=>new Promise(((t,a)=>{const l=new FileReader;l.onload=async e=>{t(await ee(e.target.result))},l.readAsDataURL(e)})),Q=(e,t,a)=>(console.log("uploadPhoto"),new Promise(((l,s)=>{const o=E.storage().ref().child(`albums/${e.uid}/${t.id}/${(new Date).getTime()}.jpg`).putString(a,"data_url");o.on("state_changed",(e=>{const t=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+t+"% done"),e.state){case E.storage.TaskState.PAUSED:console.log("Upload is paused");break;case E.storage.TaskState.RUNNING:console.log("Upload is running")}}),(e=>{console.log(e),s()}),(async()=>{const e=await o.snapshot.ref.getDownloadURL();console.log("File available at",e),l(e)}))}))),ee=e=>new Promise(((t,a)=>{const l=640,s=document.createElement("canvas"),o=s.getContext("2d");if(o){const a=new Image;a.crossOrigin="Anonymous",a.onload=async a=>{const n=a.target;let c,r;if(n.width>n.height?(c=l,r=n.height*l/n.width):(r=l,c=n.width*l/n.height),s.width=c,s.height=r,o.drawImage(n,0,0,n.width,n.height,0,0,c,r),void 0===document.createElement("img").style.imageOrientation){const a=((e,t)=>{var a=document.createElement("canvas"),l=a.getContext("2d");if(l){switch(t){case 3:a.width=e.width,a.height=e.height,l.rotate(Math.PI),l.drawImage(e,-e.width,-e.height),l.rotate(-Math.PI);break;case 6:a.width=e.height,a.height=e.width,l.rotate(.5*Math.PI),l.drawImage(e,0,-e.height),l.rotate(.5*-Math.PI);break;case 8:a.width=e.height,a.height=e.width,l.rotate(.5*-Math.PI),l.drawImage(e,-e.width,0),l.rotate(.5*Math.PI);break;default:a.width=e.width,a.height=e.height,l.drawImage(e,0,0)}return a.toDataURL()}})(n,await y.orientation(e));t(a)}else t(s.toDataURL())},a.src=e}else a()})),te=async(e,t)=>{const a=Z.collection("albums").doc(e.id);await a.update(e).then((()=>{t(O(e))})).catch((e=>console.log(e)))},ae=async(e,t)=>{console.log(e),await Z.collection("albums").doc(e.id).delete(),t(D(e.id))},le=async e=>{let t=[];e.forEach((e=>{e.games.forEach((e=>{e.id&&t.push(parseInt(e.id))}))})),t=Array.from(new Set(t));const a="https://db.collectio.jp/wp-json/wp/v2/posts?include="+t.join(",");console.log(a);const l=await fetch(a).then((e=>e.json()));return e.forEach((e=>{e.games.forEach((e=>{l.map((t=>{"https://db.collectio.jp/wp-includes/images/media/default.png"!==t.featured_image.src&&e.id==t.id&&(e.image=t.featured_image.src)}))}))})),e};function se(){const[e,t]=m.exports.useState(!0),[a,l]=m.exports.useState(!1),s=r(C);r(L);const o=i();m.exports.useEffect((()=>{if(!s)return E.auth().onAuthStateChanged((e=>{e&&(o(A({uid:e.uid,photoURL:e.photoURL,displayName:e.displayName})),((e,t)=>{let a=[];Z.collection("albums").where("userId","==",e.uid).orderBy("date","desc").get().then((async e=>{e.forEach((e=>{const t=e.data();t.id=e.id,delete t.date,a.push(t)})),e.empty?t(U(Y)):(a=await le(a),t(R(a)))})).catch((e=>{console.log("Error getting documents: ",e)}))})(e,o)),t(!1)})),()=>{console.log("Clean up")}}));const c=()=>{if(window.cordova){let e={};"ios"!==window.cordova.platformId&&(e={webClientId:"16919798390-gt4d4vanvgu1n0u93nasrv7vt277r9gd.apps.googleusercontent.com",offline:!1}),window.plugins.googleplus.login(e,(e=>{let t=(new E.auth.GoogleAuthProvider).credential(e.idToken);E.auth().signInWithCredential(t)}),(e=>{console.log("error: "+e)}))}else{const e=new E.auth.GoogleAuthProvider;E.auth().signInWithRedirect(e)}},d=()=>{E.auth().signOut().then((()=>{location.reload()})).catch((e=>{}))};return n.createElement(W,null,n.createElement("div",null,n.createElement(b,null,n.createElement(f,{path:"/select/:id",render:()=>n.createElement(H,{updateAlbum:te})}),n.createElement(f,{path:"/share/:id"},n.createElement(F,null)),n.createElement(f,{path:"/share"},n.createElement(J,null)),n.createElement(f,{path:"/photo/:id"},n.createElement(q,null)),n.createElement(f,{path:"/game/:id"},n.createElement(G,null)),n.createElement(f,{path:"/album/:id",render:()=>n.createElement(B,{updateAlbum:te,addPhotos:K,deleteAlbum:ae})}),n.createElement(f,{path:"/",render:()=>e?n.createElement(_,null):s?n.createElement(z,{uploading:a,signOut:d,createAlbum:(e,t,a)=>{l(!0),(async(e,t,a,l)=>{if(e.target.files){const s=[];for(const t of e.target.files){const e=await X(t).catch((e=>console.log(e)));e&&s.push(e)}const o={id:"",title:"ある日のボードゲーム会",date:new Date,photos:[],games:[],userId:t.uid},n=await Z.collection("albums").add(o).catch((e=>{console.error("Error adding document: ",e)}));if(n){console.log("Document written with ID: ",n.id);const e=[];for(const a of s){const l=await Q(t,n,a).catch((e=>console.log(e)));l&&e.push({image:l})}n.update({id:n.id,photos:e}).catch((e=>console.log(e))),o.id=n.id,o.photos=e,delete o.date,a($(o)),l(!1)}}})(e,t,a,l)}}):n.createElement(M,{GoogleLogin:c})}))))}const oe=N({reducer:{userReducer:S,albumsReducer:T}});const ne=()=>{k.render(n.createElement(n.StrictMode,null,n.createElement(I,{store:oe},n.createElement(se,null))),document.getElementById("root"))};var ce;"true"===(ce={},location.search.substr(1).split("&").map((function(e){var t=e.split("=");ce[t[0]]=decodeURIComponent(t[1])})),ce).cordova?document.addEventListener("deviceready",ne,!1):ne();