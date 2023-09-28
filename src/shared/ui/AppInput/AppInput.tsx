import { Input, InputField, Text } from '@gluestack-ui/themed'
import React, { FC } from 'react'
import { IAppInputProps } from './type'
import { withHighlight } from '../../withHighlight'
import { useAppInput } from './useAppInput'

export const AppInput: FC<IAppInputProps> = withHighlight((props) => {
    const { backgroundColor } = useAppInput()
    return (
        <Input>
            <InputField backgroundColor={backgroundColor} {...props} />
        </Input>
    )
})
