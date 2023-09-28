import { useFilesModel } from '@/entities/file'

export const useFilesPreview = () => {
    const files = useFilesModel().files
    return {
        files,
    }
}