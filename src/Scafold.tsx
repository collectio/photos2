import React, { useState, useEffect, Dispatch } from 'react'
import {Link} from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectAlbums } from './store/albums'
import { AlbumType, PhotoType, GameType } from './@types'

const Component: React.VFC = (props: any) => {
    const albums: AlbumType[] = useSelector(selectAlbums)
    const defaultAlbum: unknown = null
    const [state, setState] = useState({
        album: defaultAlbum as AlbumType
    })

    useEffect(() => {
    })

    if (!state.album) return null
    const album = state.album
    return (
        <div></div>
    )
}

export default Component