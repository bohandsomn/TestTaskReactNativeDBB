import React, { FC } from 'react'
import { FlatList } from '@gluestack-ui/themed'
import { EmptyList, ErrorBoundary, IFilePreviewDto, Loader } from '@/shared'
import { IFilesPreviewProps } from './type'
import { useFilesPreview } from './useFilesPreview'
import { FilePreview } from '../FilePreview'

export const FilesPreview: FC<IFilesPreviewProps> = () => {
    const { files } = useFilesPreview()
    if (files.isLoading) {
        return <Loader />
    }
    if (files.error) {
        return <ErrorBoundary message={files.error} />
    }
    if (!files.data?.length) {
        return <EmptyList />
    }
    return (
        <FlatList
            data={files.data}
            renderItem={({ item: preview }) => (
                <FilePreview {...(preview as IFilePreviewDto)} />
            )}
        />
    )
}
