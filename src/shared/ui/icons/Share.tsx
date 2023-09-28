import { createIcon } from '@gluestack-ui/themed'
import React from 'react'
import { Path } from 'react-native-svg'

export const ShareIcon = createIcon({
    viewBox: '0 0 16 16',
    path: (
        <>
            <Path
                d="M2.66669 8V13.3333C2.66669 13.687 2.80716 14.0261 3.05721 14.2761C3.30726 14.5262 3.6464 14.6667 4.00002 14.6667H12C12.3536 14.6667 12.6928 14.5262 12.9428 14.2761C13.1929 14.0261 13.3334 13.687 13.3334 13.3333V8"
                stroke="white"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M10.6666 3.9987L7.99998 1.33203L5.33331 3.9987"
                stroke="white"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M8 1.33203V9.9987"
                stroke="white"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </>
    ),
})
