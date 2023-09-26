import { createAsyncThunk } from '@reduxjs/toolkit'
import { DropBoxFileService, IFolderPreviewDto, IGetFoldersDto, isFolderPreview } from '@/shared'
import { FolderTypePrefix } from './typePrefix'

type RejectWithValue = ReturnType<Parameters<Parameters<typeof createAsyncThunk>[1]>[1]['rejectWithValue']>

export const getFoldersAction = createAsyncThunk(
    FolderTypePrefix.GET_FOLDERS,
    async (dto: IGetFoldersDto, thunkAPI): Promise<IFolderPreviewDto[] | RejectWithValue> => {
        const service = new DropBoxFileService()
        const response = await service.getFolders(dto)
        if (!response.every((folder) => isFolderPreview(folder))) {
            return thunkAPI.rejectWithValue('Folders not found')
        }
        return response
    }
)
