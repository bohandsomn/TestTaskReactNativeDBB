import { createIcon } from '@gluestack-ui/themed'
import React from 'react'
import { Path } from 'react-native-svg'

export const CreateFileIcon = createIcon({
    viewBox: '0 0 16 16',
    path: (
        <>
            <Path
                d="M9.33335 1.33203H4.00002C3.6464 1.33203 3.30726 1.47251 3.05721 1.72256C2.80716 1.9726 2.66669 2.31174 2.66669 2.66536V13.332C2.66669 13.6857 2.80716 14.0248 3.05721 14.2748C3.30726 14.5249 3.6464 14.6654 4.00002 14.6654H12C12.3536 14.6654 12.6928 14.5249 12.9428 14.2748C13.1929 14.0248 13.3334 13.6857 13.3334 13.332V5.33203L9.33335 1.33203Z"
                stroke="white"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M9.33331 1.33203V5.33203H13.3333"
                stroke="white"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M8 12V8"
                stroke="white"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M6 10H10"
                stroke="white"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </>
    ),
})
