import React from 'react'
import { AppButton } from '@/shared'
import { useCreateFile } from './useCreateFile'

export const CreateFile = () => {
    const { handlePress } = useCreateFile()
    return <AppButton onPress={handlePress}>Create</AppButton>
}
