import React, { FC } from 'react'
import { FolderPreview as FolderPreviewEntity } from '@/entities/folder'
import { IFolderPreviewProps } from './type'
import { FolderMenu } from '../FolderMenu'

export const FolderPreview: FC<IFolderPreviewProps> = (props) => {
    return (
        <FolderPreviewEntity
            contextMenu={<FolderMenu pathToFolder={props.folderPath} />}
            {...props}
        />
    )
}
