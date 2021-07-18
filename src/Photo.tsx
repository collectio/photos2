import React, { useState, useEffect, Dispatch } from 'react'
import {Link, withRouter, useParams} from 'react-router-dom'

import Slider from 'react-slick'

import { useSelector } from 'react-redux'
import { selectAlbums } from './store/albums'
import { AlbumType, PhotoType } from './@types'

const Photo: React.VFC = (props: any) => {
    const albums: AlbumType[] = useSelector(selectAlbums)
    const defaultAlbum: unknown = null
    const [state, setState] = useState({
        album: defaultAlbum as AlbumType
    })

    let {index} = props.location.state

    let { id } = useParams<{ id: string }>()
    useEffect(() => {
        if (!state.album) {
            const alb = albums.filter((a) => a.id === id)[0]
            if (alb) setState({ album: alb })
        }
    })

    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: index
    }

    if (!state.album) return null
    console.log(state.album)
    return (<div id="photo">
        {/* <Link to={{pathname: `/album/${id}`}} className="close">
            <img src="/assets/close.svg" />
        </Link> */}
        <Slider {...sliderSettings}>
        {state.album.photos.map((p: PhotoType) => {
            return (<React.Fragment>
            <div style={{backgroundImage: `url(${p.image})`}}></div>
            </React.Fragment>)
        })}
        </Slider>
    </div>)
}

export default withRouter(Photo)