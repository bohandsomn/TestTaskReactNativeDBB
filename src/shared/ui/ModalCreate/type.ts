import { ReactNode } from 'react'

export interface IModalCreateFileProps {
    confirm: () => void
    pathInput: {
        value: string
        onChange: (value: string) => void
        placeholder?: string
        rules: (() => string | null)[]
    }
    header: string
}