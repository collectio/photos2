import React, { useState, useEffect, Dispatch } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'


import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

import firebaseConfig from '../firebaseConfig.json'

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()
// if (location.hostname === 'localhost' || location.hostname.match(/192\.168\.0\.\w+$/)) {
//     db.useEmulator('localhost', 8080)
// }
export const storage = firebase.storage()
export const analytics = firebase.analytics()

import { AlbumType, PhotoType, GameType } from './@types/index';

import { useSelector, useDispatch } from 'react-redux'
import { selectUser, setUser } from './store/user'
import { selectAlbums, setAlbums, unshiftAlbums, pushAlbums, removeAlbum } from './store/albums'


import Loading from './Loading'
import Welcome from './Welcome'
import Home from './Home'
import Album from './Album'
import Game from './Game'
import Photo from './Photo'
import ShareSelect from './ShareSelect'
import Share from './Share'


// サンプルのアルバム
const sampleAlbum: AlbumType = {
    id: 'sample',
    title: 'サンプルのボードゲーム会',
    date: `${(new Date()).getFullYear()}/${(new Date()).getMonth() + 1}/${(new Date()).getDate()}`,
    photos: [
        { image: 'https://storage.googleapis.com/collectio-photo-assets/sample/1.jpg' },
        { image: 'https://storage.googleapis.com/collectio-photo-assets/sample/2.jpg' },
        { image: 'https://storage.googleapis.com/collectio-photo-assets/sample/3.jpg' },
        { image: 'https://storage.googleapis.com/collectio-photo-assets/sample/4.jpg' },
        { image: 'https://storage.googleapis.com/collectio-photo-assets/sample/5.jpg' },
        { image: 'https://storage.googleapis.com/collectio-photo-assets/sample/6.jpg' },
    ],
    games: [{ "bgdb": "http://www.gamers-jp.com/playgame/db_gamea.php?game_id=6959", "bgg": "https://boardgamegeek.com/boardgame/191895", "bodogema": "https://bodoge.hoobby.net/games/golovonogi", "etitle": "Toddles-Bobbles Green", "hasJPURL": 1, "id": "95735", "keyword": "なんじゃもんじゃ,みどり,緑", "maxPlayers": 6, "minPlayers": 2, "playAge": 4, "playingTime": 15, "title": "ナンジャモンジャ・ミドリ", "year": "2010", "image": "https://db.collectio.jp/wp-content/uploads/2019/05/95735.jpg" }, { "bgdb": "", "bgg": "https://boardgamegeek.com/boardgame/230802", "bodogema": "https://bodoge.hoobby.net/games/azul", "etitle": "Azul", "hasJPURL": 1, "id": "72660", "keyword": "", "maxPlayers": 4, "minPlayers": 2, "playAge": 8, "playingTime": 45, "title": "アズール", "year": "2017", "image": "https://db.collectio.jp/wp-content/uploads/2019/05/72660.jpg" }, { "bgdb": "http://www.gamers-jp.com/playgame/db_gamea.php?game_id=4786", "bgg": "https://boardgamegeek.com/boardgame/68448", "bodogema": "https://bodoge.hoobby.net/games/7-wonders", "etitle": "7 Wonders", "hasJPURL": 1, "id": "81063", "keyword": "せかいのななふしぎ せぶんわんだー 7わんだー", "maxPlayers": "", "minPlayers": "", "playAge": "", "playingTime": "", "title": "世界の七不思議", "year": "2010", "image": "https://db.collectio.jp/wp-content/uploads/2019/05/81063.jpg" }, { "bgdb": null, "bgg": null, "bodogema": null, "etitle": "", "hasJPURL": 1, "id": "110318", "keyword": "", "maxPlayers": null, "minPlayers": null, "playAge": null, "playingTime": null, "title": "Escape from the Office: The exciting escape game – escape your boss", "year": "0", "image": null }],
    userId: ''
}

// Todo: この辺りの関数は、storeに移す？

const loadAlbums = (user: any, dispatch: any) => {
    db.collection('albums').where('userId', '==', user.uid).orderBy('date', 'desc').get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, ' => ', doc.data());
            const album = doc.data() as AlbumType
            album.id = doc.id
            // ToDo: 後で要修正
            delete album.date
            dispatch(pushAlbums(album))
        })
        if (querySnapshot.empty) {
            dispatch(pushAlbums(sampleAlbum))
        }
    })
    .catch((error) => {
        console.log('Error getting documents: ', error);
    });
}

const createAlbum = async(e: any, user: any, dispatch: any, setUploading: any): Promise<void> => {
    if (e.target.files) {
        const photoImages: string[] = [];
        for (const file of e.target.files) {
            const photoImage = await loadImage(file).catch((error) => console.log(error))
            if (photoImage) photoImages.push(photoImage)
        }
        // console.log(photoImages)
        // const date = new Date()
        const album: AlbumType = {
            id: '',
            title: 'ある日のボードゲーム会',
            // https://qiita.com/yuiken/items/1a43a2a87ca421626f18
            // date: new Date(`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`),
            date: new Date(),
            photos: [],
            games: [],
            userId: user.uid
        }

        const docRef = await db.collection('albums').add(album)
            .catch((error) => {
                console.error('Error adding document: ', error);
            })
        if (docRef) {
            console.log('Document written with ID: ', docRef.id);
            const photos: PhotoType[] = []
            for (const photoImage of photoImages) {
                const photoUrl = await uploadPhoto(user, docRef, photoImage).catch((error) => console.log(error))
                if (photoUrl) {
                    photos.push({
                        image: photoUrl
                    })
                }
            }
            docRef.update({ id: docRef.id, photos: photos }).catch((error) => console.log(error))
            album.id = docRef.id
            album.photos = photos
            delete album.date
            dispatch(unshiftAlbums(album))
            setUploading(false)
        }
    }
}


const loadImage = (file: any): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader: any = new FileReader();
        reader.onload = async (e: any) => {
            resolve(await resizeImage(e.target.result))
        }
        reader.readAsDataURL(file)
    })
}

const uploadPhoto = (user: any, docRef: any, photoImage: string): Promise<string> => {
    console.log('uploadPhoto')
    return new Promise((resolve, reject) => {
        const storageRef = firebase.storage().ref();
        const ref = storageRef.child(`albums/${user.uid}/${docRef.id}/${(new Date()).getTime()}.jpg`);
        const uploadTask = ref.putString(photoImage, 'data_url')
        uploadTask.on('state_changed', (snapshot: any) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }
        }, (error) => {
            console.log(error)
            reject()
        }, async () => {
            const photoUrl = await uploadTask.snapshot.ref.getDownloadURL()
            console.log('File available at', photoUrl);
            resolve(photoUrl)
        })
    })

}

const resizeImage = (base64: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const MIN_SIZE = 640
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        if (ctx) {
            const img = new Image();
            img.crossOrigin = 'Anonymous'
            img.onload = (event) => {
                const image = event.target as HTMLImageElement
                let dstWidth, dstHeight
                if (image.width > image.height) {
                    dstWidth = MIN_SIZE;
                    dstHeight = image.height * MIN_SIZE / image.width
                } else {
                    dstHeight = MIN_SIZE;
                    dstWidth = image.width * MIN_SIZE / image.height
                }
                canvas.width = dstWidth
                canvas.height = dstHeight
                ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, dstWidth, dstHeight)
                resolve(canvas.toDataURL())
            }
            img.src = base64
        } else {
            reject()
        }
    })
}

const deleteAlbum = async(album: AlbumType, dispatch: any): Promise<void> => {
    console.log(album)
    const res = await db.collection('albums').doc(album.id).delete()
    // Todo: 写真の削除
    dispatch(removeAlbum(album.id))
}

// ゲーム画像を最新のものにする
const setGameImage = async (albums: AlbumType[]): Promise<AlbumType[]> => {
    let ids: number[] = []
    albums.forEach((album) => {
        album.games.forEach((game: GameType) => {
            if(game.id) ids.push(parseInt(game.id))
        })
    })
    ids = Array.from(new Set(ids))
    const url = 'https://db.collectio.jp/wp-json/wp/v2/posts?include=' + ids.join(',')
    const games = await fetch(url).then(r => r.json())
    // console.log(games)
    albums.forEach((album) => {
        album.games.forEach((g: GameType) => {
            games.map((game: any) => {
                // console.log(game.featured_image.src)
                if (game.featured_image.src !== 'https://db.collectio.jp/wp-includes/images/media/default.png') {
                    if (g.id == game.id) {
                        g.image = game.featured_image.src
                    }
                }
            })
        })
    })
    return albums
}

export default function App() {
    const [loading, setLoading] = useState(true)
    const [uploading, setUploading] = useState(false)
    const user: any = useSelector(selectUser)
    const albums: any = useSelector(selectAlbums)
    const dispatch = useDispatch()

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        if (user) return
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                dispatch(setUser({uid: user.uid, photoURL: user.photoURL, displayName: user.displayName}))
                loadAlbums(user, dispatch)
            }
            setLoading(false)
        })

        // Specify how to clean up after this effect
        return () => {
            console.log('Clean up')
        }
    })

    const GoogleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithRedirect(provider)
    }

    const signOut = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            location.reload()
        }).catch((error) => {
            // An error happened.
        })
    }

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/share/:id">
                        <ShareSelect />
                    </Route>
                    <Route path="/share">
                        <Share />
                    </Route>
                    <Route path="/photo/:id">
                        <Photo />
                    </Route>
                    <Route path="/game/:id">
                        <Game />
                    </Route>
                    <Route path="/album/:id" render={() => <Album deleteAlbum={deleteAlbum} />} />
                    <Route path="/" render={() => {
                        if (loading) return <Loading />
                        if (user) {
                            return <Home uploading={uploading} signOut={signOut} createAlbum={(e, user, dispatch) => {
                                setUploading(true)
                                createAlbum(e, user, dispatch, setUploading)
                            }} />
                        } else {
                            return <Welcome GoogleLogin={GoogleLogin} />
                        }
                     }}>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}