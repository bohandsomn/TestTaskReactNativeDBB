import { FC } from 'react'

interface IPageOptions extends Record<string, any> {
    name: string
}

export interface IPage {
    component: FC
    options: IPageOptions
}

export interface INavigatorProps {
    pages: IPage[]
    initialPage: string
}