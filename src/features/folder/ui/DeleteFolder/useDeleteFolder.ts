import { useFoldersModel } from '@/entities/folder'
import { useNotification } from '@/shared'

export const useDeleteFolder = (pathToFolder: string) => {
    const notification = useNotification()
    const { removeFolder } = useFoldersModel()
    const handlePress = () => {
        if (!pathToFolder) {
            return notification.fail('Something went wrong')
        }
        removeFolder({ pathToFolder })
    }
    return {
        handlePress,
    }
}