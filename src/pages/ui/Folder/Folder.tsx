import React from 'react'
import { ScrollView, View } from '@gluestack-ui/themed'
import { ToolBar } from '@/widgets/tool'
import { FileLists } from '@/widgets/content'
import { useFolder } from './useFolder'

export const Folder = () => {
    useFolder()
    return (
        <ScrollView>
            <ToolBar />
            <FileLists />
        </ScrollView>
    )
}
