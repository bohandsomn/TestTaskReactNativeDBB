import React, { FC } from 'react'
import { AppButton } from '@/shared'
import { IOpenModalCreateFileProps } from './type'
import { useToggleModal } from './useToggleModal'

export const ToggleModal: FC<IOpenModalCreateFileProps> = ({
    leftIcon,
    children,
}) => {
    const { handlePress } = useToggleModal()
    return (
        <AppButton leftIcon={leftIcon} onPress={handlePress}>
            {children}
        </AppButton>
    )
}
