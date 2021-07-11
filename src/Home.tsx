import React, { useState, useEffect, Dispatch } from 'react'
import {Link} from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { selectAlbums, addAlbums } from './store/albums'


export default function Home() {
    const user: any = useSelector(selectAlbums)
    const dispatch = useDispatch()
    return (
        <h1>Home</h1>
    )
}