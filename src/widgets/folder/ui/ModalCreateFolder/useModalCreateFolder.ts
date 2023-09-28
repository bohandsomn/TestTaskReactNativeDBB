import { useMemo } from 'react'
import { useCreateFolderContext, useFoldersModel } from '@/entities/folder'
import { useAppPageNavigation, useModalContext, useNotification } from '@/shared'

export const useModalCreateFolder = () => {
    const [pathToFolder] = useCreateFolderContext((state) => state.pathToFolder)
    const notification = useNotification()
    const { addFolder } = useFoldersModel()
    const [, setModalState] = useModalContext()
    const confirm = () => {
        if (!pathToFolder[1]) {
            return notification.fail('Please enter a file path')
        }
        if (typeof pathToFolder[0] !== 'string') {
            return notification.fail('Something went wrong')
        }
        addFolder({ pathToFolder })
        setModalState({ showModal: false })
        handleChange('')
    }
    const [folderPath, setCreateFolderState] = useCreateFolderContext((state) => state.pathToFolder[1] || '')
    const navigation = useAppPageNavigation()
    const pathToParentFolder = (navigation.options?.path || '') as string
    const handleChange = (folderPath: string) => {
        setCreateFolderState({ pathToFolder: [pathToParentFolder, folderPath] })
    }
    const placeholder = 'Ender path of folder'
    const rules = useMemo(() => [() => folderPath === '' ? 'The folder path must be longer than 0 characters' : null], [folderPath])
    const pathInput = useMemo(() => ({
        value: folderPath,
        onChange: handleChange,
        placeholder,
        rules
    }), [folderPath])
    return {
        confirm,
        pathInput,
    }
}