import React from 'react'
import { Text, View } from '@gluestack-ui/themed'
import { FilesPreview } from '@/widgets/file'
import { FoldersPreview } from '@/widgets/folder'
import { useFileLists } from './useFileLists'
import { HomeLink } from '@/features/file'

export const FileLists = () => {
    const { bgColor, textColor } = useFileLists()
    return (
        <View bgColor={bgColor} m="$2" p="$5" borderRadius="$xl">
            <HomeLink />
            <Text color={textColor}>Folders</Text>
            <FoldersPreview />
            <Text color={textColor}>Files</Text>
            <FilesPreview />
        </View>
    )
}
