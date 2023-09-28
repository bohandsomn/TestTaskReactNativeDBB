import React, { FC } from 'react'
import { FlatList } from '@gluestack-ui/themed'
import { EmptyList, ErrorBoundary, IFolderPreviewDto, Loader } from '@/shared'
import { IFoldersPreviewProps } from './type'
import { useFoldersPreview } from './useFoldersPreview'
import { FolderPreview } from '../FolderPreview'

export const FoldersPreview: FC<IFoldersPreviewProps> = () => {
    const { folders } = useFoldersPreview()
    if (folders.isLoading) {
        return <Loader />
    }
    if (folders.error) {
        return <ErrorBoundary message={folders.error} />
    }
    if (!folders.data?.length) {
        return <EmptyList />
    }
    return (
        <FlatList
            data={folders.data}
            renderItem={({ item: preview }) => (
                <FolderPreview {...(preview as IFolderPreviewDto)} />
            )}
        />
    )
}
