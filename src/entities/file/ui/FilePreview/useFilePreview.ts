import { useColors } from '@/shared'

export const useFilePreview = () => {
    const colors = useColors()
    const textColor = colors.white
    return {
        textColor
    }
}