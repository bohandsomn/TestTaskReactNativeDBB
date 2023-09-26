import React, { FC } from 'react'
import { INavigatorProps } from './type'
import Stack from '../../stack'

export const Navigator: FC<INavigatorProps> = ({ pages, initialPage }) => {
    return (
        <Stack.Navigator initialRouteName={initialPage}>
            {pages.map(
                ({ component, options: { name, ...options } }, index) => (
                    <Stack.Screen
                        key={index}
                        component={component}
                        name={name}
                        options={options}
                    />
                ),
            )}
        </Stack.Navigator>
    )
}
