import React, { FC } from 'react'
import { Center, Text } from '@gluestack-ui/themed'
import { IEmptyListProps } from './type'

export const EmptyList: FC<IEmptyListProps> = ({
    message = 'List is empty...',
}) => {
    return (
        <Center>
            <Text color="$white">{message}</Text>
        </Center>
    )
}
