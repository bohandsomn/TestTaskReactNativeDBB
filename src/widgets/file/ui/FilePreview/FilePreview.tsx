import React, { FC } from 'react'
import { FilePreview as FilePreviewEntity } from '@/entities/file'
import { IFilePreviewProps } from './type'
import { FileMenu } from '../FileMenu'

export const FilePreview: FC<IFilePreviewProps> = (props) => {
    return (
        <FilePreviewEntity contextMenu={<FileMenu {...props} />} {...props} />
    )
}
