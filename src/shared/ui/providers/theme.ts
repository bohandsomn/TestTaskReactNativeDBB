import { config } from '@gluestack-ui/themed'

export const theme: typeof config.theme = {
    ...config.theme,
    tokens: {
        ...config.theme.tokens,
        colors: {
            ...config.theme.tokens.colors as any,
            primary: '#151044',
            secondary: '#CDD6FF',
            tertiary: '#DDDFE5',
            accent: '#DFF892',
            bgWhite: '#EBEBEB',
            white: '#FFFFFF',
            disable: '#A19FB7',
            black: '#202020',
        }
    }
}