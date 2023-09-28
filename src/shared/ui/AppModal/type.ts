export interface IAppModalProps {
    show: boolean
    close: () => void
    header?: string
    confirm?: () => void
    children: {
        value: string
        onChange: (value: string) => void
        placeholder?: string
        rules?: (() => string | null)[]
    }[]
}