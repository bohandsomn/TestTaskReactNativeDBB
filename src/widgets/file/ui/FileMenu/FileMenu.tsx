import React, { FC } from 'react'
import { CalendarDaysIcon, TrashIcon } from '@gluestack-ui/themed'
import { DeleteFile } from '@/features/file'
import { AppMenu } from '@/shared'
import { IFileMenuProps } from './type'
import { FileTime } from '@/entities/file'

export const FileMenu: FC<IFileMenuProps> = ({ fileId, fileCreated }) => {
    return (
        <AppMenu
            items={[
                {
                    label: <FileTime fileCreated={fileCreated} />,
                    icon: <CalendarDaysIcon />,
                },
                {
                    label: <DeleteFile fileId={fileId} />,
                    icon: <TrashIcon />,
                },
            ]}
        />
    )
}
