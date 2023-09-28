import { useCreateFolderContext } from '@/entities/folder'
import { useAppPageNavigation } from '@/shared'
import { useMemo } from 'react'

export const usePathInputCreateFolder = () => {
    const [folderPath, setState] = useCreateFolderContext((state) => state.pathToFolder[1] || '')
    const navigation = useAppPageNavigation()
    const pathToParentFolder = (navigation.options?.path || '') as string
    const handleChange = (folderPath: string) => {
        setState({ pathToFolder: [pathToParentFolder, folderPath] })
    }
    const placeholder = 'Ender path of folder'
    const rules = useMemo(() => [() => folderPath === '' ? null : 'The folder path must be longer than 0 characters'], [folderPath])
    return {
        folderPath,
        handleChange,
        placeholder,
        rules,
    }
}