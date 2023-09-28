import React from 'react'
import { View } from '@gluestack-ui/themed'
import { ToolBar } from '@/widgets/tool'
import { FileLists } from '@/widgets/content'
import { useFolder } from './useFolder'

export const Folder = () => {
    useFolder()
    return (
        <View>
            <ToolBar />
            <FileLists />
        </View>
    )
}
