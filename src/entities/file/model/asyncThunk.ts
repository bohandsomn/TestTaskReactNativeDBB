import { createAsyncThunk } from '@reduxjs/toolkit'
import { DropBoxFileService, IFilePreviewDto, isFilePreview } from '@/shared'
import { FileTypePrefix } from './typePrefix'

type RejectWithValue = ReturnType<Parameters<Parameters<typeof createAsyncThunk>[1]>[1]['rejectWithValue']>

export const getFilesAction = createAsyncThunk(
    FileTypePrefix.GET_FILES,
    async (_: void, thunkAPI): Promise<IFilePreviewDto[] | RejectWithValue> => {
        const service = new DropBoxFileService()
        const response = await service.getFiles()
        if (!response.every((file) => isFilePreview(file))) {
            return thunkAPI.rejectWithValue('Files not found')
        }
        return response
    }
)
