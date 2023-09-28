import { useColors } from '../lib'

export const useAppInput = () => {
    const colors = useColors()
    const backgroundColor = colors.white
    return {
        backgroundColor,
    }
}