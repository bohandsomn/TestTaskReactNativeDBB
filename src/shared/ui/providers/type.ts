import { PropsWithChildren } from 'react'

export interface IUiProviderProps extends PropsWithChildren { }

export interface IColors {
    readonly primary: '#151044'
    readonly secondary: '#CDD6FF'
    readonly tertiary: '#DDDFE5'
    readonly accent: '#DFF892'
    readonly bgWhite: '#EBEBEB'
    readonly white: '#FFFFFF'
    readonly disable: '#A19FB7'
    readonly black: '#202020'
}
