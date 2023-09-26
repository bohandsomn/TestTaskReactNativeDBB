import React, { FC, PropsWithChildren } from 'react'
import {
    NavigationContainer,
    createNavigationContainerRef,
} from '@react-navigation/native'
import { PageNames } from '../const'

const navigationRef = createNavigationContainerRef<Record<PageNames, unknown>>()

export const NavigationProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <NavigationContainer ref={navigationRef}>
            {children}
        </NavigationContainer>
    )
}
