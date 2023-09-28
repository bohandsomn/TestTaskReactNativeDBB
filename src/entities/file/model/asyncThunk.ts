import { createAsyncThunk } from '@reduxjs/toolkit'
import { ICreateFileDto, IDeleteFileDto, IFilePreviewDto, createFileService, isFilePreview, IGetFilesDto } from '@/shared'
import { FileTypePrefix } from './typePrefix'

type RejectWithValue = ReturnType<Parameters<Parameters<typeof createAsyncThunk>[1]>[1]['rejectWithValue']>

export const getFilesAction = createAsyncThunk(
    FileTypePrefix.GET_FILES,
    async (dto: IGetFilesDto, thunkAPI): Promise<IFilePreviewDto[] | RejectWithValue> => {
        const service = createFileService()
        const response = await service.getFiles()
        if (!response.every((file) => isFilePreview(file))) {
            return thunkAPI.rejectWithValue('Files not found')
        }
        return response.filter((file) => file.filePath.includes(dto.filePath))
    }
)

export const addFileAction = createAsyncThunk(
    FileTypePrefix.ADD_FILE,
    async (dto: ICreateFileDto, thunkAPI): Promise<IFilePreviewDto | RejectWithValue> => {
        const service = createFileService()
        const response = await service.createFile(dto)
        if (!isFilePreview(response)) {
            return thunkAPI.rejectWithValue('File not created')
        }
        return response
    }
)

export const removeFileAction = createAsyncThunk(
    FileTypePrefix.REMOVE_FILE,
    async (dto: IDeleteFileDto): Promise<IDeleteFileDto | RejectWithValue> => {
        const service = createFileService()
        await service.deleteFile(dto)
        return dto
    }
)
