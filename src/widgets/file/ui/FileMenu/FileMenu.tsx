import React, { FC } from 'react'
import { TrashIcon } from '@gluestack-ui/themed'
import { DeleteFile } from '@/features/file'
import { AppMenu } from '@/shared'
import { IFileMenuProps } from './type'

export const FileMenu: FC<IFileMenuProps> = ({ fileId }) => {
    return (
        <AppMenu
            items={[
                {
                    label: <DeleteFile fileId={fileId} />,
                    icon: <TrashIcon />,
                },
            ]}
        />
    )
}
