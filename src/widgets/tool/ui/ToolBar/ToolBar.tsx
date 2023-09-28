import React, { FC } from 'react'
import { HStack, ScrollView } from '@gluestack-ui/themed'
import { ModalCreateFile } from '@/widgets/file'
import { ModalCreateFolder } from '@/widgets/folder'
import { Share, Upload } from '@/features/file'
import { ModalProvider } from '@/shared'
import { CreateFileProvider } from '@/entities/file'
import { CreateFolderProvider } from '@/entities/folder'

export const ToolBar: FC = () => {
    return (
        <ScrollView horizontal m="$2">
            <HStack space="xs">
                <ModalProvider>
                    <CreateFileProvider>
                        <ModalCreateFile />
                    </CreateFileProvider>
                </ModalProvider>
                <ModalProvider>
                    <CreateFolderProvider>
                        <ModalCreateFolder />
                    </CreateFolderProvider>
                </ModalProvider>
                <Share />
                <Upload />
            </HStack>
        </ScrollView>
    )
}
