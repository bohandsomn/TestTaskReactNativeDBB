import { IFilePreviewDto } from '@/shared'

export interface IFileMenuProps extends Pick<IFilePreviewDto, 'fileCreated' | 'fileId'> { }
