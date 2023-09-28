import { ICreateFileDto } from './dto/createFileDto'
import { ICreateFolderDto } from './dto/createFolderDto'
import { IDeleteFileDto } from './dto/deleteFileDto'
import { IDeleteFolderDto } from './dto/deleteFolderDto'
import { IFilePreviewDto } from './dto/filePreviewDto'
import { IFolderPreviewDto } from './dto/folderPreviewDto'
import { IGetFileDto } from './dto/getFileDto'
import { IGetFolderDto } from './dto/getFolderDto'
import { IGetFoldersDto } from './dto/getFoldersDto'
import { IUpdateFileDto } from './dto/updateFileDto'
import { IUpdateFolderDto } from './dto/updateFolderDto'

export interface IFileService {
    createFile(dto: ICreateFileDto): Promise<IFilePreviewDto>
    updateFile(dto: IUpdateFileDto): Promise<IFilePreviewDto>
    getFile(dto: IGetFileDto): Promise<IFilePreviewDto>
    getFiles(): Promise<IFilePreviewDto[]>
    deleteFile(dto: IDeleteFileDto): Promise<void>

    createFolder(dto: ICreateFolderDto): Promise<IFolderPreviewDto>
    updateFolder(dto: IUpdateFolderDto): Promise<IFolderPreviewDto>
    getFolder(dto: IGetFolderDto): Promise<IFolderPreviewDto>
    getFolders(dto: IGetFoldersDto): Promise<IFolderPreviewDto[]>
    deleteFolder(dto: IDeleteFolderDto): Promise<void>
}
