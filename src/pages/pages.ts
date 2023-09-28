import { IPage, PageNames } from '@/shared'
import { Folder } from './ui'

export const pages: IPage[] = [
    {
        component: Folder,
        options: {
            name: PageNames.FOLDER,
            header: () => { }
        }
    }
]

export const initialPage = PageNames.FOLDER
