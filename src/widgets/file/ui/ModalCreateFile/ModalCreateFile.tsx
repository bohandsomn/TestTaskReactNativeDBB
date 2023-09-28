import React from 'react'
import { OpenModalCreateFile } from '@/features/file'
import { ModalCreate } from '@/shared'
import { useModalCreateFile } from './useModalCreateFile'

export const ModalCreateFile = () => {
    const { confirm, pathInput } = useModalCreateFile()
    return (
        <>
            <OpenModalCreateFile />
            <ModalCreate
                confirm={confirm}
                pathInput={pathInput}
                header="Create file"
            />
        </>
    )
}
