// import { Dropbox, DropboxResponse, file_requests, files } from 'dropbox'
import axios, { AxiosInstance, isAxiosError } from 'axios'
import { accessToken, baseURL } from '../../config'
import { IFileService } from '../type'
import {
    ICreateFileDto,
    IFilePreviewDto,
    IUpdateFileDto,
    IGetFileDto,
    IDeleteFileDto,
    ICreateFolderDto,
    IFolderPreviewDto,
    IUpdateFolderDto,
    IGetFolderDto,
    IGetFoldersDto,
    IDeleteFolderDto
} from '../dto'

export class DropBoxFileService implements IFileService {
    private readonly client: AxiosInstance

    constructor() {
        // this.client = new Dropbox({ accessToken })
        this.client = axios.create({
            baseURL,
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
    }

    async createFile(dto: ICreateFileDto): Promise<IFilePreviewDto> {
        try {
            console.log({ dto })
            const data = this.mapCreateFileDto(dto)
            console.log({ data })
            const response = (await this.client.post('file_requests/create', data)).data
            console.log({ response })
            const filePreviewDto = this.mapFileResponse(response)
            console.log({ filePreviewDto })
            return filePreviewDto
        } catch (error) {
            if (isAxiosError(error)) {
                console.log(error.name)
                console.log(error.message)
            }
            throw error
        }
    }

    async updateFile(dto: IUpdateFileDto): Promise<IFilePreviewDto> {
        const data = this.mapUpdateFileDto(dto)
        const response = (await this.client.post('file_requests/update', data)).data
        const filePreviewDto = this.mapFileResponse(response)
        return filePreviewDto
    }

    async getFile(dto: IGetFileDto): Promise<IFilePreviewDto> {
        const data = this.mapGetFileDto(dto)
        const response = (await this.client.post('file_requests/get', data)).data
        const filePreviewDto = this.mapFileResponse(response)
        return filePreviewDto
    }

    async getFiles(): Promise<IFilePreviewDto[]> {
        const response = (await this.client.post('file_requests/list')).data
        const files = this.mapFilesResponse(response)
        return files
    }

    async deleteFile(dto: IDeleteFileDto): Promise<void> {
        const data = this.mapDeleteFileDto(dto)
        await this.client.post('file_requests/delete', data)
    }

    async createFolder(dto: ICreateFolderDto): Promise<IFolderPreviewDto> {
        const data = this.mapCreateFolderDto(dto)
        const response = (await this.client.post('files/create_folder_v2', data)).data
        const folderPreviewDto = this.mapFolderResponse(response)
        return folderPreviewDto
    }

    async updateFolder(dto: IUpdateFolderDto): Promise<IFolderPreviewDto> {
        const data = this.mapUpdateFolderDto(dto)
        const response = (await this.client.post('files/move_v2', data)).data
        const folderPreviewDto = this.mapFolderRelocationResponse(response)
        return {
            ...folderPreviewDto,
            folderId: dto.folderId,
        }
    }

    async getFolder(dto: IGetFolderDto): Promise<IFolderPreviewDto> {
        const data = this.mapGetFolderDto(dto)
        const response = (await this.client.post('files/get_metadata', data)).data
        const folderPreviewDto = this.mapFolderResponse(response)
        return folderPreviewDto
    }

    async getFolders(dto: IGetFoldersDto): Promise<IFolderPreviewDto[]> {
        const data = this.mapGetFoldersDto(dto)
        const response = (await this.client.post('files/list_folder', data)).data
        const foldersPreviewDto = this.mapFoldersResponse(response)
        return foldersPreviewDto
    }

    async deleteFolder(dto: IDeleteFolderDto): Promise<void> {
        const data = this.mapDeleteFolderDto(dto)
        await this.client.post('files/delete_v2', data)
    }

    private mapCreateFileDto(dto: ICreateFileDto) {
        const title = dto.fileName
        const destination = this.mapPath(dto.pathToFolder)
        return {
            title,
            destination,
        }
    }

    private mapUpdateFileDto(dto: IUpdateFileDto) {
        const id = dto.fileId
        const title = dto.fileName
        return {
            id,
            title,
        }
    }

    private mapGetFileDto(dto: IGetFileDto) {
        const id = dto.fileId
        return {
            id,
        }
    }

    private mapDeleteFileDto(dto: IDeleteFileDto) {
        const id = dto.fileId
        return {
            ids: [id],
        }
    }

    private mapCreateFolderDto(dto: ICreateFolderDto) {
        const path = dto.pathToFolder.join('/')
        return {
            path,
        }
    }

    private mapUpdateFolderDto(dto: IUpdateFolderDto) {
        const fromPath = this.mapPath(dto.fromPath)
        const toPath = this.mapPath(dto.toPath)
        return {
            from_path: fromPath,
            to_path: toPath,
        }
    }

    private mapGetFolderDto(dto: IGetFolderDto) {
        const path = this.mapPath(dto.pathToFolder)
        return {
            path,
        }
    }

    private mapGetFoldersDto(dto: IGetFoldersDto) {
        const path = this.mapPath(dto.pathToParentFolder)
        return {
            path,
        }
    }

    private mapDeleteFolderDto(dto: IDeleteFolderDto) {
        const path = this.mapPath(dto.pathToFolder)
        return {
            path,
        }
    }

    private mapFileResponse(response: any): IFilePreviewDto {
        const fileId = this.mapId(response.id)
        const fileName = response.title
        const filePath = response.destination
        return {
            fileId,
            fileName,
            filePath,
        }
    }

    private mapFolderResponse(response: any): IFolderPreviewDto {
        const data = response?.metadata
            ? response.metadata
            : response
        const folderId = this.mapId(data?.id || '')
        const folderName = data.name
        const folderPath = data.path_display
        return {
            folderId,
            folderName,
            folderPath,
        }
    }

    private mapFolderRelocationResponse(response: any): Omit<IFolderPreviewDto, 'folderId'> {
        const folderName = response.metadata.name
        const folderPath = response.metadata.path_display
        return {
            folderName,
            folderPath,
        }
    }

    private mapFilesResponse(response: any): IFilePreviewDto[] {
        const files = response.file_requests.map((file: any): IFilePreviewDto => ({
            fileId: this.mapId(file.id),
            fileName: file.title,
            filePath: file.destination,
        }))
        return files
    }

    private mapFoldersResponse(response: any): IFolderPreviewDto[] {
        const folders = response.entries.map((entity: any): IFolderPreviewDto => ({
            folderId: this.mapId(entity?.id || ''),
            folderName: entity.name,
            folderPath: entity.path_display,
        }))
        return folders
    }

    private mapPath(path: string): string {
        if (!path) {
            return path
        }
        return '/' + path
    }

    private mapId(id: string): string {
        const parsedId = id.split('id:')[1]
        return parsedId || id
    }
}