import React, { useState, useEffect, Dispatch } from 'react'
import {
    useHistory,
    Link,
    useParams
} from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { selectAlbums } from './store/albums'
import { AlbumType, PhotoType, GameType } from './@types'

interface Props {
    deleteAlbum: (e:any, dispatch:any) => void
}


const Album: React.VFC<Props> = (props) => {
    const albums: AlbumType[] = useSelector(selectAlbums)
    const defaultAlbum: unknown = null
    const [state, setState] = useState({
        album: defaultAlbum as AlbumType
    })
    const dispatch = useDispatch()

    const history = useHistory()

    let { id } = useParams<{ id: string }>()
    useEffect(() => {
        if (!state.album) {
            const alb = albums.filter((a) => a.id === id)[0]
            if (alb) setState({ album: alb })
        }
    })

    if (!state.album) return null
    const album = state.album
    return (
        <div id="album">
            <nav>
                <Link to="/">
                    <img className="logo" src="/back.svg" alt="戻る" />
                </Link>
                <span></span>
                <span onClick={() => {
                    if (confirm(`「${album.title}」を削除します。\nよろしいですか？`)) {
                        props.deleteAlbum(state.album, dispatch)
                        history.push('/')
                    }
                }}>
                    <img src="/delete.svg" alt="削除" />
                </span>
                {/* <span onClick={() => alert('アルバムのタイトル編集・アルバムの削除機能などがくる予定')}>
                    <img src="/menu.svg" alt="メニュー" />
                </span> */}
            </nav>
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
                            pathname: `/share/${album.id}`,
                        }} className="share">
                            シェア
                        </Link>
                    )}
                </div>
                <div className="games">
                    {album.games.map((game: GameType, i: number) => {
                        return <Link to={{
                            pathname: `/game/${game.id}`,
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
                            pathname: `/photo/${album.id}`,
                            state: { album: album, index: index }
                        }} key={photo.image}>
                            <div className="photo" style={{ backgroundImage: `url(${photo.image})` }}></div>
                        </Link>);
                    })}
                </div>
            </div>
        </div>
    )
}

export default Album