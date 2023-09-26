import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '@/entities/store'
import { IFilesModel } from './type'
import { getFilesAction } from './asyncThunk'

export const useFilesModel = (): IFilesModel => {
    const files = useAppSelector((state) => state.files)
    const dispatch = useAppDispatch()
    const getFiles = useCallback(() => dispatch(getFilesAction()), [dispatch])
    return {
        files,
        getFiles,
    }
}