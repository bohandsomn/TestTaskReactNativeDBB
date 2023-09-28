export interface IFilePreviewDto {
    readonly fileId: string
    readonly fileName: string
    readonly filePath: string
    /**
     * @type {ISOString}
     * @example "2023-09-26T09:36:17Z"
     */
    readonly fileCreated: string
}
