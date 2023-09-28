import { ReactNode } from 'react'

export interface IAppMenuProps {
    items?: {
        icon?: ReactNode
        label?: ReactNode
    }[]
}