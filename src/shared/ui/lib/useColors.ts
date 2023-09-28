import { IColors } from '../providers'
import { theme } from '../providers/theme'

export const useColors = (): IColors => {
    const colors = theme.tokens.colors as any
    return colors
}