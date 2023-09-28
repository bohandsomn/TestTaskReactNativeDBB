import { useCreateFileContext } from '@/entities/file'
import { useMemo } from 'react'

export const usePathInputCreateFile = () => {
    const [fileName, setState] = useCreateFileContext((state) => state.fileName)
    const handleChange = (fileName: string) => {
        setState({ fileName })
    }
    const placeholder = 'Ender name of file'
    const rules = useMemo(() => [() => fileName === '' ? 'The file name must be longer than 0 characters' : null], [fileName])
    return {
        fileName,
        handleChange,
        placeholder,
        rules,
    }
}