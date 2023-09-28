import React, { FC } from 'react'
import { useDeleteFolder } from './useDeleteFolder'
import { Text, View } from '@gluestack-ui/themed'
import { IDeleteFolderProps } from './type'

export const DeleteFolder: FC<IDeleteFolderProps> = ({ pathToFolder }) => {
    const { handlePress } = useDeleteFolder(pathToFolder)
    return (
        <View onTouchEnd={handlePress}>
            <Text>Delete folder</Text>
        </View>
    )
}
