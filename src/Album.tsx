import React, { useState, useEffect, Dispatch } from 'react'
import {
    Link,
    useParams
} from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectAlbums } from './store/albums'
import { AlbumType, PhotoType, GameType } from './@types'

export default function Album() {
    const albums: AlbumType[] = useSelector(selectAlbums)
    const defaultAlbum: unknown = null
    const [state, setState] = useState({
        album: defaultAlbum as AlbumType
    })

    let { id } = useParams()
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        if (!state.album) {
            const album = albums.filter((a) => a.id === id)[0]
            if (album) setState({ album })
        }
    })

    if (!state.album) return null
    const album = state.album
    return (
        <div id="album">
            <div className="album">
                <div className="hero">
                    <h4>{album.title}</h4>
                    <span>{album.date}</span>
                    <div className="cover" style={{ backgroundImage: `url(${album.photos[0].image})` }}></div>
                </div>
                <div className="actions">
                    <h4>遊んだゲーム</h4>
                    {album.id === 'sample' ? (
                        <a onClick={() => alert('サンプルのため、シェアできません。')} className="share">
                            シェア
                        </a>
                    ) : (
                        <Link to={{
                            pathname: "/shareSelect",
                            state: { album: album }
                        }} className="share">
                            シェア
                        </Link>
                    )}
                </div>
                <div className="games">
                    {album.games.map((game: GameType, i: number) => {
                        return <Link to={{
                            pathname: "/game",
                            state: { game: game }
                        }} key={game.id}>
                            <div key={'game' + i} className="game">
                                <div style={{ backgroundImage: `url(${game.image})` }}></div>
                                <span className="title">
                                    {game.title}
                                </span>
                            </div>
                        </Link>
                    })}
                    {album.id === 'sample' ? (
                        <a onClick={() => alert('サンプルのため、ゲームは追加できません。')} className="add">
                            +
                        </a>
                    ) : (
                        <Link to="/select" className="add">+</Link>
                    )}
                    {album.games.length === 0 ? (
                        <p>遊んだゲームを追加しましょう</p>
                    ) : null}
                </div>
                <div className="photos">
                    {album.photos.map((photo: PhotoType, index: number) => {
                        return (<Link to={{
                            pathname: "/photo",
                            state: { album: album, photo: photo, index: index }
                        }} key={photo.image}>
                            <div className="photo" style={{ backgroundImage: `url(${photo.image})` }}></div>
                        </Link>);
                    })}
                </div>
            </div>
        </div>
    )
}