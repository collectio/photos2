var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l;import{c as o,R as n,L as c,u as m,a as r,r as i,b as g,d,w as p,S as u,f as h,B as E,e as b,g as y,h as v,i as f,P as N}from"./vendor.37d79277.js";var w={apiKey:"AIzaSyDnb7CnJxySsm2_w1Yq1l3ZlsRsN2qe16c",authDomain:"collectio-photo-2233e.firebaseapp.com",projectId:"collectio-photo-2233e",storageBucket:"collectio-photo-2233e.appspot.com",messagingSenderId:"590643802391",appId:"1:590643802391:web:ad661fba7fb099ca018752",measurementId:"G-X7DEP88WR5"};const k=o({name:"user",initialState:{user:null},reducers:{setUser:(e,t)=>{e.user=t.payload}}}),{setUser:x}=k.actions,P=e=>e.userReducer.user;var S=k.reducer;const I=o({name:"albums",initialState:{albums:[]},reducers:{addAlbums:(e,t)=>{e.albums.push(t.payload)},removeAlbum:(e,t)=>{const a=[];e.albums.forEach((e=>{e.id!==t.payload&&a.push(e)})),e.albums=a}}}),{addAlbums:j,removeAlbum:A}=I.actions,R=e=>e.albumsReducer.albums;var $=I.reducer;const C=e=>n.createElement("div",{id:"home"},n.createElement("nav",null,n.createElement(c,{to:"/"},n.createElement("img",{className:"logo",src:"/collectio.svg",alt:"Collectio"}))),n.createElement("div",{className:"loading"},n.createElement("p",null,"読み込み中..."))),U=e=>n.createElement("div",{id:"home"},n.createElement("nav",null,n.createElement(c,{to:"/"},n.createElement("img",{className:"logo",src:"/collectio.svg",alt:"Collectio"}))),n.createElement("div",{className:"login"},n.createElement("h2",null,"Collectio Photoへようこそ"),n.createElement("p",null,"このアプリは、ボードゲームを遊んだ時の写真をアルバムにまとめて、遊んだゲームを記録できるアプリです。",n.createElement("br",null),n.createElement("br",null),"「この前、あの時、遊んだゲームはなんだった？」",n.createElement("br",null),"そんな時に役立ちます。",n.createElement("br",null),n.createElement("br",null),"どんな風に使えるか、ログインしてサンプルのアルバムを見てみましょう。"),n.createElement("p",null,n.createElement("button",{className:"google",onClick:e.GoogleLogin},"Googleでログイン")))),D=e=>{const t=m(R),a=m(P),l=r();return n.createElement("div",{id:"home"},n.createElement("nav",null,n.createElement(c,{to:"/"},n.createElement("img",{className:"logo",src:"/collectio.svg",alt:"Collectio"}))),n.createElement("div",{className:"profile"},n.createElement("img",{src:a.photoURL,alt:""}),n.createElement("p",null,a.displayName),n.createElement("button",{onClick:e.signOut},"ログアウト")),e.uploading?n.createElement("div",{className:"progress"},n.createElement("p",null,"アップロード中...")):null,n.createElement("div",{className:"albums"},t.map((e=>n.createElement("div",{className:"album",key:e.id},n.createElement(c,{to:`/album/${e.id}`},n.createElement("div",{className:"image"},n.createElement("h4",null,e.title),n.createElement("span",null,e.date),n.createElement("div",{className:"photos"},e.photos.map((e=>n.createElement("div",{key:e.image,className:"photo",style:{backgroundImage:`url(${e.image})`}})))))),n.createElement("div",{className:"games"},e.games.map(((e,t)=>n.createElement(c,{to:{pathname:`/game/${e.id}`,state:{game:e}},key:e.id+e.title},n.createElement("div",{className:"game"},n.createElement("div",{style:{backgroundImage:`url(${e.image})`}}),n.createElement("span",{className:"title"},e.title)))))))))),n.createElement("form",{action:"",encType:"multipart/form-data"},n.createElement("input",{className:"file",onChange:t=>e.createAlbum(t,a,l),id:"file",type:"file",name:"file",accept:"image/*",multiple:!0}),n.createElement("label",{htmlFor:"file"})))},O=e=>{const t=m(R),[a,l]=i.exports.useState({album:null}),s=r(),o=g();let{id:p}=d();if(i.exports.useEffect((()=>{if(!a.album){const e=t.filter((e=>e.id===p))[0];e&&l({album:e})}})),!a.album)return null;const u=a.album;return n.createElement("div",{id:"album"},n.createElement("nav",null,n.createElement(c,{to:"/"},n.createElement("img",{className:"logo",src:"/back.svg",alt:"戻る"})),n.createElement("span",null),n.createElement("span",{onClick:()=>{e.deleteAlbum(a.album,s),o.push("/")}},n.createElement("img",{src:"/delete.svg",alt:"削除"}))),n.createElement("div",{className:"album"},n.createElement("div",{className:"hero"},n.createElement("h4",null,u.title),n.createElement("span",null,u.date),n.createElement("div",{className:"cover",style:{backgroundImage:`url(${u.photos[0].image})`}})),n.createElement("div",{className:"actions"},n.createElement("h4",null,"遊んだゲーム"),"sample"===u.id?n.createElement("a",{onClick:()=>alert("サンプルのため、シェアできません。"),className:"share"},"シェア"):n.createElement(c,{to:{pathname:`/share/${u.id}`},className:"share"},"シェア")),n.createElement("div",{className:"games"},u.games.map(((e,t)=>n.createElement(c,{to:{pathname:`/game/${e.id}`,state:{game:e}},key:e.id},n.createElement("div",{key:"game"+t,className:"game"},n.createElement("div",{style:{backgroundImage:`url(${e.image})`}}),n.createElement("span",{className:"title"},e.title))))),"sample"===u.id?n.createElement("a",{onClick:()=>alert("サンプルのため、ゲームは追加できません。"),className:"add"},"+"):n.createElement(c,{to:"/select",className:"add"},"+"),0===u.games.length?n.createElement("p",null,"遊んだゲームを追加しましょう"):null),n.createElement("div",{className:"photos"},u.photos.map(((e,t)=>n.createElement(c,{to:{pathname:`/photo/${u.id}`,state:{album:u,index:t}},key:e.image},n.createElement("div",{className:"photo",style:{backgroundImage:`url(${e.image})`}})))))))};var L=p((e=>{const{game:t}=e.location.state;return n.createElement("div",{id:"game"},n.createElement("nav",null,n.createElement("a",{onClick:()=>e.history.goBack()},n.createElement("img",{className:"logo",src:"/back.svg",alt:"戻る"})),n.createElement("span",null),n.createElement("span",null)),n.createElement("div",{className:"game"},t.image?n.createElement("img",{src:t.image,alt:t.title}):n.createElement("div",{className:"noimage"},t.title),n.createElement("p",{className:"title"},t.title),"0"!==t.year?n.createElement("p",{className:"year"},t.year):null,n.createElement("div",{className:"links"},n.createElement("a",{href:"https://www.amazon.co.jp/s?k="+encodeURIComponent(t.title),className:"amazon",target:"_blank"},"Amazonで探す"),t.bodogema?n.createElement("a",{href:t.bodogema,className:"bodogema",target:"_blank"},"ボドゲーマ"):null,t.bgg?n.createElement("a",{href:t.bgg,className:"bgg",target:"_blank"},"BoardGameGeek"):null,t.bgdb?n.createElement("a",{href:t.bgdb,className:"bgdb",target:"_blank"},"ボードゲームデータベース"):null)))}));var T=p((e=>{const o=m(R),[r,g]=i.exports.useState({album:null});let{index:p}=e.location.state,{id:h}=d();i.exports.useEffect((()=>{if(!r.album){const e=o.filter((e=>e.id===h))[0];e&&g({album:e})}}));const E={dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,initialSlide:p};return r.album?n.createElement("div",{id:"photo"},n.createElement(c,{to:{pathname:`/album/${h}`},className:"close"},n.createElement("img",{src:"/close.svg"})),n.createElement(u,((e,o)=>{for(var n in o||(o={}))a.call(o,n)&&s(e,n,o[n]);if(t)for(var n of t(o))l.call(o,n)&&s(e,n,o[n]);return e})({},E),r.album.photos.map((e=>n.createElement(n.Fragment,{key:e.image},n.createElement("div",{style:{backgroundImage:`url(${e.image})`}})))))):null}));var _=p((e=>{const t=m(R),[a,l]=i.exports.useState(null),[s,o]=i.exports.useState([]),[r,g]=i.exports.useState(!1);let{id:p}=d();i.exports.useEffect((()=>{if(!a){const e=t.filter((e=>e.id===p))[0];e&&l(e)}}));return a?n.createElement("div",{id:"shareSelect"},n.createElement("nav",null,n.createElement(c,{to:{pathname:`/album/${a.id}`}},n.createElement("img",{className:"logo",src:"/back.svg",alt:"戻る"})),n.createElement("span",null,"写真の選択"),n.createElement("span",null)),n.createElement("div",{className:"album"},n.createElement("div",{className:"photos"},a.photos.map(((e,t)=>n.createElement("div",{key:e.image,className:"photo"+(r?" disabled":""),onClick:()=>(e=>{-1===s.indexOf(e)?!1===r&&(s.push(e),s.length>=4&&g(!0),o([...s])):(s.splice(s.indexOf(e),1),o([...s]),g(!1))})(t),style:{backgroundImage:`url(${e.image})`}},n.createElement("span",{className:"select"+(s.indexOf(t)>-1?" selected":"")}))))),n.createElement("div",{className:"bottomActions"},n.createElement("span",{className:"share",onClick:()=>{if(0===s.length)return alert("写真を選択してください");const t=a.photos.filter(((e,t)=>s.indexOf(t)>-1));e.history.push({pathname:"/share",state:{photos:t,album:a}})}},"次へ")))):null}));h.initializeApp(w);const G=h.firestore();h.storage(),h.analytics();const B={id:"sample",title:"サンプルのボードゲーム会",date:`${(new Date).getFullYear()}/${(new Date).getMonth()+1}/${(new Date).getDate()}`,photos:[{image:"https://storage.googleapis.com/collectio-photo-assets/sample/1.jpg"},{image:"https://storage.googleapis.com/collectio-photo-assets/sample/2.jpg"},{image:"https://storage.googleapis.com/collectio-photo-assets/sample/3.jpg"},{image:"https://storage.googleapis.com/collectio-photo-assets/sample/4.jpg"},{image:"https://storage.googleapis.com/collectio-photo-assets/sample/5.jpg"},{image:"https://storage.googleapis.com/collectio-photo-assets/sample/6.jpg"}],games:[{bgdb:"http://www.gamers-jp.com/playgame/db_gamea.php?game_id=6959",bgg:"https://boardgamegeek.com/boardgame/191895",bodogema:"https://bodoge.hoobby.net/games/golovonogi",etitle:"Toddles-Bobbles Green",hasJPURL:1,id:"95735",keyword:"なんじゃもんじゃ,みどり,緑",maxPlayers:6,minPlayers:2,playAge:4,playingTime:15,title:"ナンジャモンジャ・ミドリ",year:"2010",image:"https://db.collectio.jp/wp-content/uploads/2019/05/95735.jpg"},{bgdb:"",bgg:"https://boardgamegeek.com/boardgame/230802",bodogema:"https://bodoge.hoobby.net/games/azul",etitle:"Azul",hasJPURL:1,id:"72660",keyword:"",maxPlayers:4,minPlayers:2,playAge:8,playingTime:45,title:"アズール",year:"2017",image:"https://db.collectio.jp/wp-content/uploads/2019/05/72660.jpg"},{bgdb:"http://www.gamers-jp.com/playgame/db_gamea.php?game_id=4786",bgg:"https://boardgamegeek.com/boardgame/68448",bodogema:"https://bodoge.hoobby.net/games/7-wonders",etitle:"7 Wonders",hasJPURL:1,id:"81063",keyword:"せかいのななふしぎ せぶんわんだー 7わんだー",maxPlayers:"",minPlayers:"",playAge:"",playingTime:"",title:"世界の七不思議",year:"2010",image:"https://db.collectio.jp/wp-content/uploads/2019/05/81063.jpg"},{bgdb:null,bgg:null,bodogema:null,etitle:"",hasJPURL:1,id:"110318",keyword:"",maxPlayers:null,minPlayers:null,playAge:null,playingTime:null,title:"Escape from the Office: The exciting escape game – escape your boss",year:"0",image:null}],userId:""},z=e=>new Promise(((t,a)=>{const l=new FileReader;l.onload=async e=>{t(await J(e.target.result))},l.readAsDataURL(e)})),F=(e,t,a)=>(console.log("uploadPhoto"),new Promise(((l,s)=>{const o=h.storage().ref().child(`albums/${e.uid}/${t.id}/${(new Date).getTime()}.jpg`).putString(a,"data_url");o.on("state_changed",(e=>{const t=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+t+"% done"),e.state){case h.storage.TaskState.PAUSED:console.log("Upload is paused");break;case h.storage.TaskState.RUNNING:console.log("Upload is running")}}),(e=>{console.log(e),s()}),(async()=>{const e=await o.snapshot.ref.getDownloadURL();console.log("File available at",e),l(e)}))}))),J=e=>new Promise(((t,a)=>{const l=640,s=document.createElement("canvas"),o=s.getContext("2d");if(o){const a=new Image;a.crossOrigin="Anonymous",a.onload=e=>{const a=e.target;let n,c;a.width>a.height?(n=l,c=a.height*l/a.width):(c=l,n=a.width*l/a.height),s.width=n,s.height=c,o.drawImage(a,0,0,a.width,a.height,0,0,n,c),t(s.toDataURL())},a.src=e}else a()})),W=async(e,t)=>{console.log(e),await G.collection("albums").doc(e.id).delete(),t(A(e.id))};function q(){const[e,t]=i.exports.useState(!0),[a,l]=i.exports.useState(!1),s=m(P),o=r();i.exports.useEffect((()=>{if(!s)return h.auth().onAuthStateChanged((e=>{e&&(o(x({uid:e.uid,photoURL:e.photoURL,displayName:e.displayName})),((e,t)=>{G.collection("albums").where("userId","==",e.uid).orderBy("date","desc").get().then((e=>{e.forEach((e=>{const a=e.data();a.id=e.id,delete a.date,t(j(a))})),e.empty&&t(j(B))})).catch((e=>{console.log("Error getting documents: ",e)}))})(e,o)),t(!1)})),()=>{console.log("Clean up")}}));const c=()=>{const e=new h.auth.GoogleAuthProvider;h.auth().signInWithRedirect(e)},g=()=>{h.auth().signOut().then((()=>{location.reload()})).catch((e=>{}))};return n.createElement(E,null,n.createElement("div",null,n.createElement(b,null,n.createElement(y,{path:"/share/:id"},n.createElement(_,null)),n.createElement(y,{path:"/photo/:id"},n.createElement(T,null)),n.createElement(y,{path:"/game/:id"},n.createElement(L,null)),n.createElement(y,{path:"/album/:id",render:()=>n.createElement(O,{deleteAlbum:W})}),n.createElement(y,{path:"/",render:()=>e?n.createElement(C,null):s?n.createElement(D,{uploading:a,signOut:g,createAlbum:(e,t,a)=>{l(!0),(async(e,t,a,l)=>{if(e.target.files){const s=[];for(const t of e.target.files){const e=await z(t).catch((e=>console.log(e)));e&&s.push(e)}const o={id:"",title:"ある日のボードゲーム会",date:new Date,photos:[],games:[],userId:t.uid},n=await G.collection("albums").add(o).catch((e=>{console.error("Error adding document: ",e)}));if(n){console.log("Document written with ID: ",n.id);const e=[];for(const a of s){const l=await F(t,n,a).catch((e=>console.log(e)));l&&e.push({image:l})}n.update({id:n.id,photos:e}).catch((e=>console.log(e))),o.id=n.id,o.photos=e,delete o.date,a(j(o)),l(!1)}}})(e,t,a,l)}}):n.createElement(U,{GoogleLogin:c})}))))}const M=v({reducer:{userReducer:S,albumsReducer:$}});f.render(n.createElement(n.StrictMode,null,n.createElement(N,{store:M},n.createElement(q,null))),document.getElementById("root"));