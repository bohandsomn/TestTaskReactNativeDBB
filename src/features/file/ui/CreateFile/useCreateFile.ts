import { useCreateFileContext, useFilesModel } from "@/entities/file"
import { useAppPageNavigation, useModalContext, useNotification } from "@/shared"

export const useCreateFile = () => {
    const [fileName] = useCreateFileContext((state) => state.fileName)
    const navigation = useAppPageNavigation()
    const notification = useNotification()
    const pathToFolder = navigation.options?.path || ''
    const { addFile } = useFilesModel()
    const [, setState] = useModalContext()
    const handlePress = () => {
        if (!fileName) {
            return notification.fail('Please enter a file name')
        }
        if (typeof pathToFolder !== 'string') {
            return notification.fail('Something went wrong')
        }
        addFile({ fileName, pathToFolder })
        setState({ showModal: false })
    }
    return {
        handlePress,
    }
}