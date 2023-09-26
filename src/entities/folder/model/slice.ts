import { createSlice } from '@reduxjs/toolkit'
import { IFolderPreviewDto } from '@/shared'
import { IGlobalState } from '../../store'
import { getFoldersAction } from './asyncThunk'

const initialState: IGlobalState<IFolderPreviewDto[]> = {
    data: null,
    error: null,
    isLoading: true,
}

const folders = createSlice({
    name: 'folders',
    initialState: initialState as IGlobalState<IFolderPreviewDto[]>,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFoldersAction.pending, (state) => {
                state.error = null
                state.isLoading = true
            })
            .addCase(getFoldersAction.fulfilled, (state, action) => {
                state.data = action.payload
                state.error = null
                state.isLoading = false
            })
            .addCase(getFoldersAction.rejected, (state, action) => {
                state.data = null
                state.error = action.payload as string
                state.isLoading = false
            })
    }
})

export const foldersReducer = folders.reducer
