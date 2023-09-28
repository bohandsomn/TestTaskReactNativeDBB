import React, { FC } from 'react'
import { HStack, Text, View } from '@gluestack-ui/themed'
import { FolderIcon } from '@/shared'
import { IFolderPreviewProps } from './type'
import { useFolderPreview } from './useFolderPreview'

export const FolderPreview: FC<IFolderPreviewProps> = ({
    folderName,
    folderPath,
    contextMenu,
}) => {
    const { textColor, handlePress } = useFolderPreview(folderPath)
    return (
        <HStack space="xs">
            <HStack onTouchEnd={handlePress} space="xs" alignItems="center">
                <FolderIcon />
                <Text color={textColor}>{folderName}</Text>
            </HStack>
            <View ml="$2">{contextMenu}</View>
        </HStack>
    )
}
