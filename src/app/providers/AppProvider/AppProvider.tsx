import React, { FC } from 'react'
import { initialPage, pages } from '@/pages'
import { StoreProvider } from '@/entities/store'
import { NavigationProvider, Navigator, UiProvider } from '@/shared'

export const AppProvider: FC = () => {
    return (
        <StoreProvider>
            <NavigationProvider>
                <UiProvider>
                    <Navigator pages={pages} initialPage={initialPage} />
                </UiProvider>
            </NavigationProvider>
        </StoreProvider>
    )
}
