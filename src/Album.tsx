import React, { useState, useEffect, Dispatch } from 'react'
import {
    useHistory,
    Link,
    useParams
} from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { selectAlbums } from './store/albums'
import { selectUser } from './store/user'
import { AlbumType, PhotoType, GameType } from './@types'

interface Props {
    updateAlbum: (album: AlbumType, dispatch:any) => void
    addPhotos: (e: any, user: any, album: any, dispatch: any) => void
    deletePhotos: (user: any, album: any, dispatch: any, photos:PhotoType[]) => void
    deleteAlbum: (e:any, dispatch:any) => void
}

import {DEFAULT_ALBUM_TITLE} from './App'

const Album: React.VFC<Props> = (props) => {
    const albums: AlbumType[] = useSelector(selectAlbums)
    const defaultAlbum: unknown = null
    const [album, setStateAlbum] = useState(defaultAlbum as AlbumType)
    const [editMode, setEditMode] = useState(false)
    const defaultPhotos: PhotoType[] = []
    const [selectedPhotos, setSelectedPhotos] = useState(defaultPhotos)
    const [loadingPhotoCount, setLoadingPhotoCount] = useState(0)

    const dispatch = useDispatch()
    const history = useHistory()

    let { id } = useParams<{ id: string }>()
    useEffect(() => {
        if (!album) {
            const alb = albums.find((a) => a.id === id)
            if (alb) setStateAlbum(alb)
        }
    }, [])

    useEffect(() => {
        const alb = albums.find((a) => a.id === id)
        if (alb) setStateAlbum(alb)
        // 各stateをリセットする
        setEditMode(false)
        setSelectedPhotos(defaultPhotos)
        setLoadingPhotoCount(0)
    }, [albums])

    const user = useSelector(selectUser)

    if (album===null) return null
    return (
        <div id="album">
            <nav>
                <Link to="/">
                    <img className="logo" src="/back.svg" alt="戻る" />
                </Link>
                <span></span>
                <span className="menu">
                    <span onClick={() => {
                        if (confirm(`「${album.title}」を削除します。\nよろしいですか？`)) {
                            props.deleteAlbum(album, dispatch)
                            history.push('/')
                        }
                    }}>
                        <img src="/delete.svg" alt="削除" />
                    </span>
                </span>
                {/* <span onClick={() => alert('アルバムのタイトル編集・アルバムの削除機能などがくる予定')}>
                    <img src="/menu.svg" alt="メニュー" />
                </span> */}
            </nav>
            <div className="album">
                <div className="hero">
                    <h4 onClick={() => {
                            const title = prompt('アルバムのタイトルを変更', album.title===DEFAULT_ALBUM_TITLE ? '' : album.title)
                            if (title) {
                                // @ts-ignore
                                const newAlbum = Object.assign({}, album, { title })
                                setStateAlbum(newAlbum)
                                props.updateAlbum(newAlbum, dispatch)
                            }
                        }}>
                        {album.title}
                        <span>
                            <img src="/edit-white.svg" alt="編集" />
                        </span>
                    </h4>
                    <span>{album.date}</span>
                    {album.photos && album.photos.length > 0 ? (
                        <div className="cover" style={{ backgroundImage: `url(${album.photos[0].image})` }}></div>
                    ) : null}
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
                        }} key={game.id + game.title}>
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
                        <Link to={`/select/${id}`} className="add">+</Link>
                    )}
                    {album.games.length === 0 ? (
                        <p>遊んだゲームを追加しましょう</p>
                    ) : null}
                </div>
                <div className="tabs">
                    <span className={editMode ? '' : ' active'} onClick={() => {
                        setEditMode(false)
                    }}>写真</span>
                    <span className={editMode ? ' active' : ''} onClick={() => {
                        setEditMode(true)
                    }}>
                        <img src={editMode ? '/edit-white.svg' : '/edit-gray.svg'} alt="編集" />編集
                    </span>
                </div>
                <div className="photos">
                    {album.photos.map((photo: PhotoType, index: number) => {
                        if (editMode) {
                            const isSelected = selectedPhotos.find((p) => p.image===photo.image) !== undefined
                            return (<div key={photo.image} className={'photo'} style={{ backgroundImage: `url(${photo.image})` }} onClick={() => {
                                if (isSelected) {
                                    const newPhotos = selectedPhotos.filter((p) => p.image!==photo.image)
                                    setSelectedPhotos(newPhotos)
                                } else {
                                    setSelectedPhotos([...selectedPhotos, photo])
                                }
                            }}>
                                <span className={'select' + (isSelected ? ' selected' : '')}></span>
                            </div>);
                        } else {
                            return (<Link to={{
                                pathname: `/photo/${album.id}`,
                                state: { album: album, index: index }
                            }} key={photo.image}>
                                <div className="photo" style={{ backgroundImage: `url(${photo.image})` }}></div>
                            </Link>);
                        }
                    })}
                    {Array.from({length: loadingPhotoCount}).map((count, i) => {
                        return <div className="photo loading" key={i}></div>
                    })}
                </div>
            </div>
            {editMode ? (
                <div className="delete" onClick={() => {
                    if (selectedPhotos.length > 0) props.deletePhotos(user, album, dispatch, selectedPhotos)
                }}>
                    
                    {selectedPhotos.length > 0 ? 
                        <>
                            <img src="/delete-white.svg" alt="" />
                            {selectedPhotos.length + '枚の写真を削除'}
                        </>
                    : '写真を選択してください'}
                </div>
            ) : (
                <form action="" encType="multipart/form-data">
                    <input className="file" title="写真選択" onChange={(e) => {
                        props.addPhotos(e, user, album, dispatch)
                        if (e.target.files) {
                            setLoadingPhotoCount(e.target.files.length)
                        }
                    }} id="file" type="file" name="file" accept="image/*" multiple={true} />
                    <label htmlFor="file"></label>
                </form>
            )}
        </div>
    )
}

export default Album