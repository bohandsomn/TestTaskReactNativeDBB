import React, { FC } from 'react'
import { Link } from '@react-navigation/native'
import { IAppLinkProps } from './type'

export const AppLink: FC<IAppLinkProps> = ({ to, children }) => {
    return <Link to={to}>{children}</Link>
}
