import { IFilePreviewDto } from "../dto"

export function isFilePreview(data: unknown): data is IFilePreviewDto {
    const fileId = (data as Partial<IFilePreviewDto>).fileId
    const fileName = (data as Partial<IFilePreviewDto>).fileName
    if (typeof fileId !== 'string') {
        return false
    }
    if (typeof fileName !== 'string') {
        return false
    }
    return true
}