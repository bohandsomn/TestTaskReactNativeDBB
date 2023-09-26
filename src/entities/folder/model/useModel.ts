import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '@/entities/store'
import { IGetFoldersDto } from '@/shared'
import { IFoldersModel } from './type'
import { getFoldersAction } from './asyncThunk'

export const useFoldersModel = (): IFoldersModel => {
    const folders = useAppSelector((state) => state.folders)
    const dispatch = useAppDispatch()
    const getFolders = useCallback((dto: IGetFoldersDto) => dispatch(getFoldersAction(dto)), [dispatch])
    return {
        folders,
        getFolders,
    }
}