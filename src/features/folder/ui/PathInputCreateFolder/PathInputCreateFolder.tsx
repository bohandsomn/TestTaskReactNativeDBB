import React from 'react'
import { AppInput } from '@/shared'
import { usePathInputCreateFolder } from './usePathInputCreateFolder'

export const PathInputCreateFolder = () => {
    const { folderPath, handleChange, placeholder, rules } =
        usePathInputCreateFolder()
    return (
        <AppInput
            value={folderPath}
            onChangeText={handleChange}
            placeholder={placeholder}
            rules={rules}
        />
    )
}
