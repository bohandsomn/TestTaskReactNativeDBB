import React, { FC } from 'react'
import {
    Menu,
    MenuItem,
    MenuItemLabel,
    ThreeDotsIcon,
} from '@gluestack-ui/themed'
import { IAppMenuProps } from './type'

export const AppMenu: FC<IAppMenuProps> = ({ items }) => {
    return (
        <Menu
            placement="right bottom"
            trigger={(props) => <ThreeDotsIcon fill="white" {...props} />}
        >
            {items?.map(({ label, icon }, index) => (
                <MenuItem key={index} textValue={label?.toString()}>
                    {icon}
                    <MenuItemLabel size="sm">{label}</MenuItemLabel>
                </MenuItem>
            ))}
        </Menu>
    )
}
