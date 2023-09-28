import React from 'react'
import { AppButton, ShareIcon } from '@/shared'
import { useShare } from './useShare'

export const Share = () => {
    const { handlePress } = useShare()
    return (
        <AppButton leftIcon={<ShareIcon />} onPress={handlePress}>
            Share
        </AppButton>
    )
}
