import React, { useState, useEffect } from 'react'
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

import { useSelector, useDispatch } from 'react-redux'
import { selectUser, setUser } from './store/user'

import Generation from './Generation'

export default function App() {
    const user: any = useSelector(selectUser)
    const dispatch = useDispatch()

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        // document.title = `You clicked ${user} times`;

        firebase.auth().onAuthStateChanged((user) => {
            console.log(user)
            if (user) {
                console.log(user)
                dispatch(setUser(user))
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
                    <Route path="/about">
                        {user ? (
                            <Generation />
                        ) : (
                            <Generation />
                        )}
                    </Route>
                    <Route path="/users">
                        <Generation />
                    </Route>
                    <Route path="/">
                        <Generation />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}