import { useColors } from '@/shared'

export const useFileLists = () => {
    const colors = useColors()
    const bgColor = colors.black
    const textColor = colors.white
    return {
        bgColor,
        textColor
    }
}