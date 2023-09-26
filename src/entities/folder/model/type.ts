import { IGlobalState } from '@/entities/store'
import { IFolderPreviewDto, IGetFoldersDto } from '@/shared'

export interface IFoldersModel {
    folders: IGlobalState<IFolderPreviewDto[]>
    getFolders(dto: IGetFoldersDto): void
}