import {
    CloseIcon,
    Heading,
    Icon,
    Modal,
    ModalBackdrop,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalCloseButton,
} from '@gluestack-ui/themed'
import React from 'react'
import { IAppModalProps } from './type'
import { AppInput } from '../AppInput'
import { AppButton } from '../AppButton'

export const AppModal = ({ show, close, header, confirm, children }) => {
    return (
        <Modal isOpen={show} onClose={close}>
            <ModalBackdrop />
            <ModalContent>
                <ModalHeader>
                    {header && <Heading size="lg">{header}</Heading>}
                    <ModalCloseButton>
                        <Icon as={CloseIcon} />
                    </ModalCloseButton>
                </ModalHeader>
                {children.length && (
                    <ModalBody>
                        {children.map(
                            (
                                { value, onChange, placeholder, rules },
                                index,
                            ) => (
                                <AppInput
                                    key={index}
                                    value={value}
                                    onChangeText={onChange}
                                    placeholder={placeholder}
                                    rules={rules}
                                />
                            ),
                        )}
                    </ModalBody>
                )}
                <ModalFooter>
                    <AppButton
                        variant="outline"
                        size="sm"
                        action="secondary"
                        mr="$3"
                        onPress={close}
                    >
                        Cancel
                    </AppButton>
                    <AppButton
                        size="sm"
                        action="positive"
                        borderWidth="$0"
                        onPress={confirm}
                        isFocused
                    >
                        Confirm
                    </AppButton>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
