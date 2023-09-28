import React from 'react'
import { AppButton } from '@/shared'
import { useCreateFolder } from './useCreateFolder'

export const CreateFolder = () => {
    const { handlePress } = useCreateFolder()
    return <AppButton onPress={handlePress} />
}
