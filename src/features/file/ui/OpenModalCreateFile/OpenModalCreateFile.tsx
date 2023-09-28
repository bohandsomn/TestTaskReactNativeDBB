import React, { FC } from 'react'
import { CreateFileIcon } from '@/shared'
import { ToggleModal } from '../ToggleModal'

export const OpenModalCreateFile: FC = () => {
    return <ToggleModal leftIcon={<CreateFileIcon />}>Create file</ToggleModal>
}
