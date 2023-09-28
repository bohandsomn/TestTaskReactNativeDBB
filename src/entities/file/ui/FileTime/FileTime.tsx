import React, { FC } from 'react'
import { useFileTime } from './useFileTime'
import { IFileTimeProps } from './type'
import { Text, View } from '@gluestack-ui/themed'

export const FileTime: FC<IFileTimeProps> = ({ fileCreated }) => {
    const { utcDate } = useFileTime(fileCreated)
    return (
        <View>
            <Text>{utcDate}</Text>
        </View>
    )
}
