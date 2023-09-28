import { useFilesModel } from '@/entities/file'
import { useNotification } from '@/shared'

export const useDeleteFile = (fileId: string) => {
    const notification = useNotification()
    const { removeFile } = useFilesModel()
    const handlePress = () => {
        if (!fileId) {
            return notification.fail('Something went wrong')
        }
        removeFile({ fileId })
    }
    return {
        handlePress,
    }
}