import { IGlobalState } from '@/entities/store'
import { ICreateFolderDto, IDeleteFolderDto, IFolderPreviewDto, IGetFoldersDto } from '@/shared'

export interface IFoldersModel {
    folders: IGlobalState<IFolderPreviewDto[]>
    getFolders(dto: IGetFoldersDto): void
    addFolder(dto: ICreateFolderDto): void
    removeFolder(dto: IDeleteFolderDto): void
}