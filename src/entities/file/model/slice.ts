import { createSlice } from '@reduxjs/toolkit'
import { IFilePreviewDto } from '@/shared'
import { IGlobalState } from '../../store'
import { getFilesAction } from './asyncThunk'

const initialState: IGlobalState<IFilePreviewDto[]> = {
    data: null,
    error: null,
    isLoading: true,
}

const files = createSlice({
    name: 'files',
    initialState: initialState as IGlobalState<IFilePreviewDto[]>,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFilesAction.pending, (state) => {
                state.error = null
                state.isLoading = true
            })
            .addCase(getFilesAction.fulfilled, (state, action) => {
                state.data = action.payload
                state.error = null
                state.isLoading = false
            })
            .addCase(getFilesAction.rejected, (state, action) => {
                state.data = null
                state.error = action.payload as string
                state.isLoading = false
            })
    }
})

export const filesReducer = files.reducer
