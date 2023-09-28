import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '@/entities/store'
import { ICreateFolderDto, IDeleteFolderDto, IGetFoldersDto } from '@/shared'
import { IFoldersModel } from './type'
import { addFolderAction, getFoldersAction, removeFolderAction } from './asyncThunk'

export const useFoldersModel = (): IFoldersModel => {
    const folders = useAppSelector((state) => state.folders)
    const dispatch = useAppDispatch()
    const getFolders = useCallback((dto: IGetFoldersDto) => dispatch(getFoldersAction(dto)), [dispatch])
    const addFolder = useCallback((dto: ICreateFolderDto) => dispatch(addFolderAction(dto)), [dispatch])
    const removeFolder = useCallback((dto: IDeleteFolderDto) => dispatch(removeFolderAction(dto)), [dispatch])
    return {
        folders,
        getFolders,
        addFolder,
        removeFolder,
    }
}