import React, { FC } from 'react'
import { HStack, Text, View } from '@gluestack-ui/themed'
import { FileIcon } from '@/shared'
import { IFilePreviewProps } from './type'
import { useFilePreview } from './useFilePreview'

export const FilePreview: FC<IFilePreviewProps> = ({
    fileName,
    contextMenu,
}) => {
    const { textColor } = useFilePreview()
    return (
        <HStack space="xs" alignItems="center">
            <FileIcon />
            <Text color={textColor}>{fileName}</Text>
            <View ml="$2">{contextMenu}</View>
        </HStack>
    )
}
