import React, { FC } from 'react'
import { Center, Text } from '@gluestack-ui/themed'
import { ILoaderProps } from './type'

export const Loader: FC<ILoaderProps> = ({ message = 'Loading...' }) => {
    return (
        <Center>
            <Text>{message}</Text>
        </Center>
    )
}
