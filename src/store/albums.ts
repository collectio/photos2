import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

import { AlbumType } from '../@types/index';

type Albums = {
  albums: AlbumType[]
}

const initialState: Albums = {
  albums: []
}

export const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    addAlbums: (state, action) => {
      state.albums.push(action.payload)
    },
    removeAlbum: (state, action) => {
      const newAlbums: AlbumType[] = []
      state.albums.forEach(album => {
        if (album.id !== action.payload) {
          newAlbums.push(album)
        }
      })
      state.albums = newAlbums
    }
  },
})

export const { addAlbums, removeAlbum } = albumsSlice.actions

export const selectAlbums = (state: RootState) => 
  state.albumsReducer.albums
  
export default albumsSlice.reducer