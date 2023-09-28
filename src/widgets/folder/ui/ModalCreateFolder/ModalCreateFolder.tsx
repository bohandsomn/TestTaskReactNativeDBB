import React from 'react'
import { OpenModalCreateFolder } from '@/features/file'
import { ModalCreate } from '@/shared'
import { useModalCreateFolder } from './useModalCreateFolder'

export const ModalCreateFolder = () => {
    const { confirm, pathInput } = useModalCreateFolder()
    return (
        <>
            <OpenModalCreateFolder />
            <ModalCreate
                confirm={confirm}
                pathInput={pathInput}
                header="Create folder"
            />
        </>
    )
}
