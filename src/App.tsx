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
import { selectAlbums, addAlbums } from './store/albums'


import Home from './Home'
import Album from './Album'
import Game from './Game'
import Generation from './Generation'


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


const loadAlbums = (user: any, dispatch: any) => {
    db.collection('albums').where('userId', '==', user.uid).orderBy('date').get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, ' => ', doc.data());
            const album = doc.data() as AlbumType
            album.id = doc.id
            dispatch(addAlbums(album))
        })
        // this.setGameImage()
        if (querySnapshot.empty) {
            dispatch(addAlbums(sampleAlbum))
        }
    })
    .catch((error) => {
        console.log('Error getting documents: ', error);
    });
}

export default function App() {
    const user: any = useSelector(selectUser)
    const dispatch = useDispatch()

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        if (user) return
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user)
            if (user) {
                console.log(user)
                dispatch(setUser({uid: user.uid}))
                loadAlbums(user, dispatch)
            }
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

                {user ? (
                    <button onClick={signOut}>ログアウト</button>
                ) : (
                    <button className="google" onClick={GoogleLogin}>
                        Googleでログイン
                    </button>
                )}

                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/game/:id">
                        <Game />
                    </Route>
                    <Route path="/album/:id">
                        <Album />
                    </Route>
                    <Route path="/">
                        {user ? (
                            <Home />
                        ) : (
                            <Generation />
                        )}
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}