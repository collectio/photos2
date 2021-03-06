import { configureStore } from '@reduxjs/toolkit'

import userReducer from './user'
import albumsReducer from './albums'

export const store = configureStore({
    reducer: {
        userReducer: userReducer,
        albumsReducer: albumsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>