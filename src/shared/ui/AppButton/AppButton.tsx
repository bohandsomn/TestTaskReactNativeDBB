import React, { FC } from 'react'
import { Button, ButtonText, View } from '@gluestack-ui/themed'
import { IAppButtonProps } from './type'
import { useAppButton } from './useAppButton'

export const AppButton: FC<IAppButtonProps> = ({
    children,
    isFocused = false,
    leftIcon,
    ...props
}) => {
    const { backgroundColor, textColor } = useAppButton(isFocused)
    return (
        <Button
            backgroundColor={backgroundColor}
            alignSelf="flex-start"
            {...props}
        >
            {leftIcon && <View right="$2">{leftIcon}</View>}
            <ButtonText color={textColor}>{children}</ButtonText>
        </Button>
    )
}
