import React, { FC } from 'react'
import { TrashIcon } from '@gluestack-ui/themed'
import { DeleteFolder } from '@/features/folder'
import { AppMenu } from '@/shared'
import { IFolderMenuProps } from './type'

export const FolderMenu: FC<IFolderMenuProps> = ({ pathToFolder }) => {
    return (
        <AppMenu
            items={[
                {
                    label: <DeleteFolder pathToFolder={pathToFolder} />,
                    icon: <TrashIcon />,
                },
            ]}
        />
    )
}
