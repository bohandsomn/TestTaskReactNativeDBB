import { IGlobalState } from '@/entities/store'
import { IFilePreviewDto } from '@/shared'

export interface IFilesModel {
    files: IGlobalState<IFilePreviewDto[]>
    getFiles(): void
}