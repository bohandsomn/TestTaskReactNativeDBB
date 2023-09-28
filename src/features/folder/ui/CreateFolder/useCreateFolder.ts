import { useCreateFolderContext, useFoldersModel } from '@/entities/folder'
import { useModalContext, useNotification } from '@/shared'

export const useCreateFolder = () => {
    const [pathToFolder] = useCreateFolderContext((state) => state.pathToFolder)
    const notification = useNotification()
    const { addFolder } = useFoldersModel()
    const [, setState] = useModalContext()
    const handlePress = () => {
        if (!pathToFolder[1]) {
            return notification.fail('Please enter a file path')
        }
        if (typeof pathToFolder[0] !== 'string') {
            return notification.fail('Something went wrong')
        }
        addFolder({ pathToFolder })
        setState({ showModal: false })
    }
    return {
        handlePress,
    }
}