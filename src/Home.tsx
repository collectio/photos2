import React, { useState, useEffect, Dispatch } from 'react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectAlbums } from './store/albums'
import { selectUser } from './store/user'
import { AlbumType } from './@types'

interface Props {
    signOut: () => void
}


const Home: React.VFC<Props> = (props) => {
    const albums: AlbumType[] = useSelector(selectAlbums)
    const user = useSelector(selectUser)
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
        </div >
    )
}

export default Home