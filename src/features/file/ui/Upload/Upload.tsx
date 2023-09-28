import React from 'react'
import { AppButton, UploadIcon } from '@/shared'
import { useUpload } from './useUpload'

export const Upload = () => {
    const { handlePress } = useUpload()
    return (
        <AppButton leftIcon={<UploadIcon />} onPress={handlePress}>
            Upload
        </AppButton>
    )
}
