import { configureStore } from '@reduxjs/toolkit'
import { filesReducer } from '../file'
import { foldersReducer } from '../folder'

const store = configureStore({
    reducer: {
        files: filesReducer,
        folders: foldersReducer,
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
