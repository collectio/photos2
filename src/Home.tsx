import React, { useState, useEffect, Dispatch } from 'react'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { selectAlbums } from './store/albums'
import { selectUser } from './store/user'
import { AlbumType } from './@types'

interface Props {
    signOut: () => void
    createAlbum: (e:any, user:any, dispatch:any) => void
}


const Home: React.VFC<Props> = (props) => {
    const albums: AlbumType[] = useSelector(selectAlbums)
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    return (
        <div id="home">
            <nav>
                <Link to="/">
                    <img className="logo" src="/collectio.svg" alt="Collectio" />
                </Link>
            </nav>
            <div className="profile">
                <img src={user.photoURL} alt="" />
                <p>
                    {user.displayName}
                </p>
                <button onClick={props.signOut}>ログアウト</button>
            </div>
            <div className="albums">
                {albums.map((album) => (
                    <div className="album" key={album.id}>
                        <Link to={`/album/${album.id}`}>
                            <div className="image">
                                <h4>{album.title}</h4>
                                <span>{album.date}</span>
                                <div className="photos">
                                    {album.photos.map((photo) => (
                                        <div key={photo.image} className="photo" style={{ backgroundImage: `url(${photo.image})` }}></div>
                                    ))}
                                </div>
                            </div>
                        </Link>
                        <div className="games">
                            {album.games.map((game, i) => (
                                <Link to={{
                                    pathname: `/game/${game.id}`,
                                    state: { game: game }
                                }} key={game.id + game.title}>
                                    <div className="game">
                                        <div style={{ backgroundImage: `url(${game.image})` }}></div>
                                        <span className="title">
                                            {game.title}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <form action="" encType="multipart/form-data">
                <input className="file" onChange={(e) => props.createAlbum(e, user, dispatch)} id="file" type="file" name="file" accept="image/*" multiple={true} />
                <label htmlFor="file"></label>
            </form>
        </div >
    )
}

export default Home