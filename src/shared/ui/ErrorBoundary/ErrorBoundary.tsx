import React, { FC } from 'react'
import { Center, Text } from '@gluestack-ui/themed'
import { IErrorBoundaryProps } from './type'

export const ErrorBoundary: FC<IErrorBoundaryProps> = ({
    message = 'Something went wrong...',
}) => {
    return (
        <Center>
            <Text>{message}</Text>
        </Center>
    )
}
