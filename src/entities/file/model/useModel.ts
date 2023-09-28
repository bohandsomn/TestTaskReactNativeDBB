import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '@/entities/store'
import { ICreateFileDto, IDeleteFileDto, IGetFilesDto } from '@/shared'
import { IFilesModel } from './type'
import { addFileAction, getFilesAction, removeFileAction } from './asyncThunk'

export const useFilesModel = (): IFilesModel => {
    const files = useAppSelector((state) => state.files)
    const dispatch = useAppDispatch()
    const getFiles = useCallback((dto: IGetFilesDto) => dispatch(getFilesAction(dto)), [dispatch])
    const addFile = useCallback((dto: ICreateFileDto) => dispatch(addFileAction(dto)), [dispatch])
    const removeFile = useCallback((dto: IDeleteFileDto) => dispatch(removeFileAction(dto)), [dispatch])
    return {
        files,
        getFiles,
        addFile,
        removeFile,
    }
}