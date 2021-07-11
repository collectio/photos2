import React, { useState, useEffect, Dispatch } from 'react'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { selectAlbums, addAlbums } from './store/albums'
import { AlbumType } from './@types'


export default function Home() {
    const albums: AlbumType[] = useSelector(selectAlbums)
    const dispatch = useDispatch()
    return (
        <div id="home">
            <div className="albums">
                {albums.map((album) => {
                    return (<div className="album">
                        <Link to={`/album`} key={album.title + album.date} onClick={() => this.props.setAlbum(album)}>
                            <div className="image">
                                <h4>{album.title}</h4>
                                <span>{album.date}</span>
                                <div className="photos">
                                    {album.photos.map((photo) => {
                                        return (<div key={photo.image} className="photo" style={{ backgroundImage: `url(${photo.image})` }}></div>)
                                    })}
                                </div>
                            </div>
                        </Link>
                        <div className="games">
                            {album.games.map((game, i) => {
                                return <Link to={{
                                    pathname: "/game",
                                    state: { game: game }
                                }} key={game.id} onClick={() => this.props.setGame(game)}>
                                    <div key={game.id} data-id={game.id} className="game">
                                        <div style={{ backgroundImage: `url(${game.image})` }}></div>
                                        <span className="title">
                                            {game.title}
                                        </span>
                                    </div>
                                </Link>
                            })}
                        </div>
                    </div>)
                })}
            </div>
        </div>
    )
}