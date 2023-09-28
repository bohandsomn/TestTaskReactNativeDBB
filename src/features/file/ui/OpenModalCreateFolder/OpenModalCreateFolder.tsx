import React, { FC } from 'react'
import { CreateFolderIcon } from '@/shared'
import { ToggleModal } from '../ToggleModal'

export const OpenModalCreateFolder: FC = () => {
    return (
        <ToggleModal leftIcon={<CreateFolderIcon />}>Create folder</ToggleModal>
    )
}
