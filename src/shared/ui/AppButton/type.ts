import { ReactNode } from 'react'
import { Button } from '@gluestack-ui/themed'

type IButtonProps = Parameters<typeof Button>[0]

export interface IAppButtonProps extends IButtonProps {
    leftIcon?: ReactNode
}