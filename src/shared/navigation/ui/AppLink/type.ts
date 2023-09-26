import { PropsWithChildren } from 'react'
import { PageNames } from '../../const'

export interface IAppLinkProps extends PropsWithChildren {
    to: `/${PageNames}`
}