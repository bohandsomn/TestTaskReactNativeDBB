import React, { FC } from 'react'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { IUiProviderProps } from './type'
import { theme } from './theme'

export const UiProvider: FC<IUiProviderProps> = ({ children }) => {
    return <GluestackUIProvider config={theme}>{children}</GluestackUIProvider>
}
