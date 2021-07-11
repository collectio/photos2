import { configureStore } from '@reduxjs/toolkit'

import generationReducer from './generation'
import userReducer from './user'
import albumsReducer from './albums'

export const store = configureStore({
    reducer: {
        generationReducer: generationReducer,
        userReducer: userReducer,
        albumsReducer: albumsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>