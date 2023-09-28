import { createIcon } from '@gluestack-ui/themed'
import React from 'react'
import { Path } from 'react-native-svg'

export const CreateFolderIcon = createIcon({
    viewBox: '0 0 16 16',
    path: (
        <>
            <Path
                d="M14.6666 12.6667C14.6666 13.0203 14.5262 13.3594 14.2761 13.6095C14.0261 13.8595 13.6869 14 13.3333 14H2.66665C2.31302 14 1.97389 13.8595 1.72384 13.6095C1.47379 13.3594 1.33331 13.0203 1.33331 12.6667V3.33333C1.33331 2.97971 1.47379 2.64057 1.72384 2.39052C1.97389 2.14048 2.31302 2 2.66665 2H5.99998L7.33331 4H13.3333C13.6869 4 14.0261 4.14048 14.2761 4.39052C14.5262 4.64057 14.6666 4.97971 14.6666 5.33333V12.6667Z"
                stroke="white"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M8 7.33203V11.332"
                stroke="white"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M6 9.33203H10"
                stroke="white"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </>
    ),
})
