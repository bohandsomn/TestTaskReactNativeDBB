import React from 'react'
import { AppInput } from '@/shared'
import { usePathInputCreateFile } from './usePathInputCreateFile'

export const PathInputCreateFile = () => {
    const { fileName, handleChange, placeholder, rules } =
        usePathInputCreateFile()
    return (
        <AppInput
            value={fileName}
            onChangeText={handleChange}
            placeholder={placeholder}
            rules={rules}
        />
    )
}
