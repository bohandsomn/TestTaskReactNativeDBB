import { IFolderPreviewDto } from '../dto'

export function isFolderPreview(data: unknown): data is IFolderPreviewDto {
    const folderId = (data as Partial<IFolderPreviewDto>).folderId
    const folderName = (data as Partial<IFolderPreviewDto>).folderName
    if (typeof folderId !== 'string') {
        return false
    }
    if (typeof folderName !== 'string') {
        return false
    }
    return true
}