import { useFoldersModel } from '@/entities/folder'

export const useFoldersPreview = () => {
    const folders = useFoldersModel().folders
    return {
        folders,
    }
}