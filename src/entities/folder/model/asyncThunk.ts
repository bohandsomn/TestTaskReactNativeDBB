import { createAsyncThunk } from '@reduxjs/toolkit'
import { createFileService, ICreateFolderDto, IDeleteFolderDto, IFolderPreviewDto, IGetFoldersDto, isFolderPreview } from '@/shared'
import { FolderTypePrefix } from './typePrefix'

type RejectWithValue = ReturnType<Parameters<Parameters<typeof createAsyncThunk>[1]>[1]['rejectWithValue']>

export const getFoldersAction = createAsyncThunk(
    FolderTypePrefix.GET_FOLDERS,
    async (dto: IGetFoldersDto, thunkAPI): Promise<IFolderPreviewDto[] | RejectWithValue> => {
        const service = createFileService()
        const response = await service.getFolders(dto)
        if (!response.every((folder) => isFolderPreview(folder))) {
            return thunkAPI.rejectWithValue('Folders not found')
        }
        return response
    }
)

export const addFolderAction = createAsyncThunk(
    FolderTypePrefix.ADD_FOLDER,
    async (dto: ICreateFolderDto, thunkAPI): Promise<IFolderPreviewDto | RejectWithValue> => {
        const service = createFileService()
        const response = await service.createFolder(dto)
        if (!isFolderPreview(response)) {
            return thunkAPI.rejectWithValue('Folder not created')
        }
        return response
    }
)

export const removeFolderAction = createAsyncThunk(
    FolderTypePrefix.REMOVE_FOLDER,
    async (dto: IDeleteFolderDto): Promise<IDeleteFolderDto | RejectWithValue> => {
        const service = createFileService()
        await service.deleteFolder(dto)
        return dto
    }
)
