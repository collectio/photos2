import { configureStore } from '@reduxjs/toolkit'

import generationReducer from './generation'
import userReducer from './user'

export const store = configureStore({
    reducer: {
        generationReducer: generationReducer,
        userReducer: userReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>