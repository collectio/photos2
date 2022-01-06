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
    const [album, setStateAlbum] = useState(defaultAlbum as AlbumType)
    const [selectedIndexes, setSelectedIndexes] = useState([] as number[])
    const [selectDisabled, setSelectDisabled] = useState(false)

    let { id } = useParams<{ id: string }>()
    useEffect(() => {
        if (!album) {
            const alb = albums.filter((a) => a.id === id)[0]
            if (alb) setStateAlbum(alb)
        }
    })

    const select = (index: number) => {
        if (selectedIndexes.indexOf(index) === -1) {
            if (selectDisabled === false) {
                selectedIndexes.push(index)
                if (selectedIndexes.length >= 4) setSelectDisabled(true)
                setSelectedIndexes([...selectedIndexes])
            }
        } else {
            selectedIndexes.splice(selectedIndexes.indexOf(index), 1)
            setSelectedIndexes([...selectedIndexes])
            setSelectDisabled(false)
        }
    }

    const share = () => {
        if (selectedIndexes.length === 0) return alert('写真を選択してください')
        const photos = album.photos.filter((photo: PhotoType, index: number) => selectedIndexes.indexOf(index) > -1)
        props.history.push({
            pathname: '/share',
            state: { photos: photos, album: album }
        })
    }

    if (!album) return null
    return (<div id="shareSelect">
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
                    return (<div key={photo.image} className={'photo' + (selectDisabled ? ' disabled' : '')} onClick={() => select(index)} style={{ backgroundImage: `url(${photo.image})` }}>
                        <span className={'select' + (selectedIndexes.indexOf(index) > -1 ? ' selected' : '')}></span>
                    </div>);
                })}
            </div>
            <div className="bottomActions" onClick={share}>
                <span className="share">次へ</span>
            </div>
        </div>
    </div>)
}

export default withRouter(ShareSelect)
