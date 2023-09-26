import { Dropbox, DropboxResponse, file_requests, files } from "dropbox"
import { accessToken } from "../../config"
import { IFileService } from "../type"
import { ICreateFileDto } from "../dto/createFileDto"
import { IFilePreviewDto } from "../dto/filePreviewDto"
import { IUpdateFileDto } from "../dto/updateFileDto"
import { IGetFileDto } from "../dto/getFileDto"
import { IDeleteFileDto } from "../dto/deleteFileDto"
import { ICreateFolderDto } from "../dto/createFolderDto"
import { IFolderPreviewDto } from "../dto/folderPreviewDto"
import { IUpdateFolderDto } from "../dto/updateFolderDto"
import { IGetFolderDto } from "../dto/getFolderDto"
import { IGetFoldersDto } from "../dto/getFoldersDto"
import { IDeleteFolderDto } from "../dto/deleteFolderDto"

export class DropBoxFileService implements IFileService {
    private readonly client: Dropbox

    constructor() {
        this.client = new Dropbox({ accessToken })
    }

    async createFile(dto: ICreateFileDto): Promise<IFilePreviewDto> {
        const arg = this.mapCreateFileDto(dto)
        const response = await this.client.fileRequestsCreate(arg)
        const filePreviewDto = this.mapFileResponse(response)
        return filePreviewDto
    }

    async updateFile(dto: IUpdateFileDto): Promise<IFilePreviewDto> {
        const arg = this.mapUpdateFileDto(dto)
        const response = await this.client.fileRequestsUpdate(arg)
        const filePreviewDto = this.mapFileResponse(response)
        return filePreviewDto
    }

    async getFile(dto: IGetFileDto): Promise<IFilePreviewDto> {
        const arg = this.mapGetFileDto(dto)
        const response = await this.client.fileRequestsGet(arg)
        const filePreviewDto = this.mapFileResponse(response)
        return filePreviewDto
    }

    async getFiles(): Promise<IFilePreviewDto[]> {
        const response = await this.client.fileRequestsList()
        const files = this.mapFilesResponse(response)
        return files
    }

    async deleteFile(dto: IDeleteFileDto): Promise<void> {
        const arg = this.mapDeleteFileDto(dto)
        await this.client.fileRequestsDelete(arg)
    }

    async createFolder(dto: ICreateFolderDto): Promise<IFolderPreviewDto> {
        const arg = this.mapCreateFolderDto(dto)
        const response = await this.client.filesCreateFolderV2(arg)
        const folderPreviewDto = this.mapFolderResponse(response)
        return folderPreviewDto
    }

    async updateFolder(dto: IUpdateFolderDto): Promise<IFolderPreviewDto> {
        const arg = this.mapUpdateFolderDto(dto)
        const response = await this.client.filesMoveV2(arg)
        const folderPreviewDto = this.mapFolderRelocationResponse(response)
        return {
            ...folderPreviewDto,
            folderId: dto.folderId,
        }
    }

    async getFolder(dto: IGetFolderDto): Promise<IFolderPreviewDto> {
        const arg = this.mapGetFolderDto(dto)
        const response = await this.client.filesGetMetadata(arg)
        const folderPreviewDto = this.mapFolderResponse(response as any)
        return folderPreviewDto
    }

    async getFolders(dto: IGetFoldersDto): Promise<IFolderPreviewDto[]> {
        const arg = this.mapGetFoldersDto(dto)
        const response = await this.client.filesListFolder(arg)
        const foldersPreviewDto = this.mapFoldersResponse(response)
        return foldersPreviewDto
    }

    async deleteFolder(dto: IDeleteFolderDto): Promise<void> {
        const arg = this.mapDeleteFolderDto(dto)
        await this.client.filesDeleteV2(arg)
    }

    private mapCreateFileDto(dto: ICreateFileDto): file_requests.CreateFileRequestArgs {
        const title = dto.fileName
        const destination = this.mapPath(dto.pathToFolder)
        return {
            title,
            destination,
        }
    }

    private mapUpdateFileDto(dto: IUpdateFileDto): file_requests.UpdateFileRequestArgs {
        const id = dto.fileId
        const title = dto.fileName
        return {
            id,
            title,
        }
    }

    private mapGetFileDto(dto: IGetFileDto): file_requests.GetFileRequestArgs {
        const id = dto.fileId
        return {
            id,
        }
    }

    private mapDeleteFileDto(dto: IDeleteFileDto): file_requests.DeleteFileRequestArgs {
        const id = dto.fileId
        return {
            ids: [id],
        }
    }

    private mapCreateFolderDto(dto: ICreateFolderDto): files.CreateFolderArg {
        const path = this.mapPath(dto.pathToFolder)
        return {
            path,
        }
    }

    private mapUpdateFolderDto(dto: IUpdateFolderDto): files.RelocationArg {
        const fromPath = this.mapPath(dto.fromPath)
        const toPath = this.mapPath(dto.toPath)
        return {
            from_path: fromPath,
            to_path: toPath,
        }
    }

    private mapGetFolderDto(dto: IGetFolderDto): files.GetMetadataArg {
        const path = this.mapPath(dto.pathToFolder)
        return {
            path,
        }
    }

    private mapGetFoldersDto(dto: IGetFoldersDto): files.ListFolderArg {
        const path = this.mapPath(dto.pathToParentFolder)
        return {
            path,
        }
    }

    private mapDeleteFolderDto(dto: IDeleteFolderDto): files.DeleteArg {
        const path = this.mapPath(dto.pathToFolder)
        return {
            path,
        }
    }

    private mapFileResponse(response: DropboxResponse<file_requests.FileRequest>): IFilePreviewDto {
        const fileId = response.result.id
        const fileName = response.result.title
        return {
            fileId,
            fileName,
        }
    }

    private mapFolderResponse(response: DropboxResponse<files.FileMetadataReference | files.FolderMetadataReference>): IFolderPreviewDto
    private mapFolderResponse(response: DropboxResponse<files.CreateFolderResult>): IFolderPreviewDto
    private mapFolderResponse(response: DropboxResponse<files.FileMetadataReference | files.FolderMetadataReference | files.CreateFolderResult>): IFolderPreviewDto {
        const data = (response as Partial<DropboxResponse<files.CreateFolderResult>>).result?.metadata
            ? (response as DropboxResponse<files.CreateFolderResult>).result.metadata
            : (response as DropboxResponse<files.FileMetadataReference | files.FolderMetadataReference>).result
        const folderId = data?.id
        const folderName = data.name
        return {
            folderId,
            folderName,
        }
    }

    private mapFolderRelocationResponse(response: DropboxResponse<files.RelocationResult>): Omit<IFolderPreviewDto, 'folderId'> {
        const folderName = response.result.metadata.name
        return {
            folderName,
        }
    }

    private mapFilesResponse(response: DropboxResponse<file_requests.ListFileRequestsResult>): IFilePreviewDto[] {
        const files = response.result.file_requests.map((file): IFilePreviewDto => ({
            fileId: file.id,
            fileName: file.title,
        }))
        return files
    }

    private mapFoldersResponse(response: DropboxResponse<files.ListFolderResult>): IFolderPreviewDto[] {
        const folders = (response.result.entries as any).map((entity: files.FileMetadataReference | files.FolderMetadataReference): IFolderPreviewDto => ({
            folderId: entity?.id,
            folderName: entity.name,
        }))
        return folders
    }

    private mapPath(path: string): string {
        return '/' + path
    }
}