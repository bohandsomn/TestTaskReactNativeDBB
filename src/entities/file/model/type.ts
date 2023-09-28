import { IGlobalState } from '@/entities/store'
import { ICreateFileDto, IDeleteFileDto, IFilePreviewDto, IGetFilesDto } from '@/shared'

export interface IFilesModel {
    files: IGlobalState<IFilePreviewDto[]>
    getFiles(dto: IGetFilesDto): void
    addFile(dto: ICreateFileDto): void
    removeFile(dto: IDeleteFileDto): void
}