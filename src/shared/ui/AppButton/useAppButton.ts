import { useColors } from '../lib'

export const useAppButton = (isFocused: boolean) => {
    const colors = useColors()
    const backgroundColor = isFocused ? colors.secondary : colors.black
    const textColor = isFocused ? colors.black : colors.white
    return {
        backgroundColor,
        textColor,
    }
}