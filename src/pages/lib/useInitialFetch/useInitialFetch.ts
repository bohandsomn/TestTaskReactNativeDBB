import { useEffect } from 'react'
import { useFilesModel } from '@/entities/file'
import { useFoldersModel } from '@/entities/folder'
import { useAppPageNavigation } from '@/shared'

export const useInitialFetch = () => {
    const ROOT_PATH = ''
    const { getFiles } = useFilesModel()
    const { getFolders } = useFoldersModel()
    const navigation = useAppPageNavigation()
    const pathToParentFolder = (navigation.options?.path || ROOT_PATH) as string
    useEffect(() => {
        getFiles({
            filePath: pathToParentFolder
        })
        getFolders({
            pathToParentFolder,
        })
    }, [pathToParentFolder])
}