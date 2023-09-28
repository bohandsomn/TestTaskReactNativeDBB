import { useMemo } from 'react'
import { useCreateFileContext, useFilesModel } from '@/entities/file'
import { useAppPageNavigation, useModalContext, useNotification } from '@/shared'

export const useModalCreateFile = () => {
    const [fileName, setCreateFileState] = useCreateFileContext((state) => state.fileName)
    const navigation = useAppPageNavigation()
    const notification = useNotification()
    const pathToFolder = navigation.options?.path || ''
    const { addFile } = useFilesModel()
    const [, setModalState] = useModalContext()
    const confirm = () => {
        if (!fileName) {
            return notification.fail('Please enter a file name')
        }
        if (typeof pathToFolder !== 'string') {
            return notification.fail('Something went wrong')
        }
        addFile({ fileName, pathToFolder })
        setModalState({ showModal: false })
        setCreateFileState({ fileName: '' })
    }
    const pathInput = useMemo(() => ({
        value: fileName,
        onChange: (fileName: string) => {
            setCreateFileState({ fileName })
        },
        placeholder: 'Ender name of file',
        rules: [() => fileName === '' ? 'The file name must be longer than 0 characters' : null]
    }), [fileName, setCreateFileState])
    return {
        confirm,
        pathInput,
    }
}