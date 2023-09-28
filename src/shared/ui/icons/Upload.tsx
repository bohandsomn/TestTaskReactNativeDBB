import { createIcon } from '@gluestack-ui/themed'
import React from 'react'
import { Path } from 'react-native-svg'

export const UploadIcon = createIcon({
    viewBox: '0 0 16 16',
    path: (
        <>
            <Path
                d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10"
                stroke="white"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M4.66669 6.66797L8.00002 10.0013L11.3334 6.66797"
                stroke="white"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M8 10V2"
                stroke="white"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </>
    ),
})
