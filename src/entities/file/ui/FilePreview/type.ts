import { ReactNode } from 'react'
import { IFilePreviewDto } from '@/shared'

export interface IFilePreviewProps extends IFilePreviewDto {
    contextMenu: ReactNode
}
