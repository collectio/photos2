import React, { useState, useEffect, Dispatch } from 'react'
import {
    Link,
    useParams,
    withRouter,
} from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectAlbums } from './store/albums'
import { AlbumType, PhotoType, GameType } from './@types'

const ShareSelect: React.VFC = (props: any) => {
    const albums: AlbumType[] = useSelector(selectAlbums)
    const defaultAlbum: unknown = null
    const [state, setState] = useState({
        album: defaultAlbum as AlbumType,
        selectedImageIndex: [] as number[],
        selectDisabled: false,
    })

    let { id } = useParams<{ id: string }>()
    useEffect(() => {
        scrollTo(0, 0)
        if (!state.album) {
            const alb = albums.filter((a) => a.id === id)[0]
            if (alb) setState({...state, album: alb})
        }
    })

    const select = (index: number) => {
        if (state.selectedImageIndex.indexOf(index) === -1) {
            if (state.selectDisabled === false) {
                state.selectedImageIndex.push(index)
            }
        } else {
            state.selectedImageIndex.splice(state.selectedImageIndex.indexOf(index), 1)
            setState({...state, selectDisabled: false})
        }
        if (state.selectedImageIndex.length >= 4) {
            setState({...state, selectDisabled: true})
        }
        setState(state)
    }

    const share = () => {
        if (state.selectedImageIndex.length === 0) return alert('写真を選択してください')
        const photos = state.album.photos.filter((photo: PhotoType, index: number) => state.selectedImageIndex.indexOf(index) > -1)
        props.history.push({
            pathname: '/share',
            state: { photos: photos, album: state.album }
        })
    }

    if (!state.album) return null
    const album = state.album
    return (<div id="albumSelect">
        <nav>
            <Link to={{pathname: `/album/${album.id}`}}>
                <img className="logo" src="/back.svg" alt="戻る" />
            </Link>
            <span>写真の選択</span>
            <span></span>
        </nav>
        <div className="album">
            <div className="photos">
                {album.photos.map((photo: PhotoType, index: number) => {
                    return (<div key={photo.image} className={'photo' + (state.selectDisabled ? ' disabled' : '')} onClick={() => select(index)} style={{ backgroundImage: `url(${photo.image})` }}>
                        <span className={'select' + (state.selectedImageIndex.indexOf(index) > -1 ? ' selected' : '')}></span>
                    </div>);
                })}
            </div>
            <div className="bottomActions">
                <span className="share" onClick={share}>次へ</span>
            </div>
        </div>
    </div>)
}

export default withRouter(ShareSelect)
