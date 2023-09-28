import { createSlice } from '@reduxjs/toolkit'
import { IFolderPreviewDto } from '@/shared'
import { IGlobalState } from '../../store'
import { addFolderAction, getFoldersAction, removeFolderAction } from './asyncThunk'

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
            .addCase(addFolderAction.fulfilled, (state, action) => {
                state.data?.push(action.payload)
                state.error = null
                state.isLoading = false
            })
            .addCase(addFolderAction.rejected, (state, action) => {
                state.data = null
                state.error = action.payload as string
                state.isLoading = false
            })
            .addCase(removeFolderAction.fulfilled, (state, action) => {
                state.data = state.data?.filter((folder) => folder.folderPath !== action.payload.pathToFolder) || null
                state.error = null
                state.isLoading = false
            })
            .addCase(removeFolderAction.rejected, (state, action) => {
                state.data = null
                state.error = action.payload as string
                state.isLoading = false
            })
    }
})

export const foldersReducer = folders.reducer
