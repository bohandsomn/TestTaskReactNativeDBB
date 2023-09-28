import React, { FC } from 'react'
import { AppModal } from '@/shared'
import { IModalCreateFileProps } from './type'
import { useModalCreate } from './useModalCreate'

export const ModalCreate: FC<IModalCreateFileProps> = ({
    confirm,
    pathInput,
    header,
}) => {
    const { close, showModal } = useModalCreate()
    return (
        <AppModal
            close={close}
            show={showModal}
            confirm={confirm}
            header={header}
        >
            {[pathInput]}
        </AppModal>
    )
}
