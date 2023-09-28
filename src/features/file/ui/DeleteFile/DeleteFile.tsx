import React, { FC } from 'react'
import { Text, View } from '@gluestack-ui/themed'
import { useDeleteFile } from './useDeleteFile'
import { IDeleteFileProps } from './type'

export const DeleteFile: FC<IDeleteFileProps> = ({ fileId }) => {
    const { handlePress } = useDeleteFile(fileId)
    return (
        <View onTouchEnd={handlePress}>
            <Text>Delete file</Text>
        </View>
    )
}
