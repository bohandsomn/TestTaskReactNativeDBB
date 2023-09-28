import { ReactNode } from 'react'
import { IFolderPreviewDto } from '@/shared'

export interface IFolderPreviewProps extends IFolderPreviewDto {
    contextMenu: ReactNode
}
