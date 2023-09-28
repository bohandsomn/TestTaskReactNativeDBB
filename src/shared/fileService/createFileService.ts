import { DropBoxFileService } from './dropBox'
import { IFileService } from './type'

export function createFileService(): IFileService {
    const fileService = new DropBoxFileService()
    return fileService
}