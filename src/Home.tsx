import React, { useState, useEffect, Dispatch } from 'react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectAlbums } from './store/albums'
import { AlbumType } from './@types'


export default function Home() {
    const albums: AlbumType[] = useSelector(selectAlbums)
    return (
        <div id="home">
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
                                }} key={game.id+game.title}>                                    
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
        </div>
    )
}