export const useFileTime = (fileCreated: string) => {
    const utcDate = new Date(fileCreated).toUTCString()
    return {
        utcDate,
    }
}