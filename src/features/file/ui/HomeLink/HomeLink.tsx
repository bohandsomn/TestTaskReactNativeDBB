import { AppLink, PageNames } from '@/shared'
import { Text } from '@gluestack-ui/themed'
import React from 'react'

export const HomeLink = () => {
    return (
        <AppLink to={`/${PageNames.FOLDER}`}>
            <Text color="$white" fontSize="$xl">
                Home
            </Text>
        </AppLink>
    )
}
