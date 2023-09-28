import { useModalContext } from '@/shared'

export const useToggleModal = () => {
    const [, setState] = useModalContext()
    const handlePress = () => setState((previous) => ({
        showModal: !previous.showModal
    }))
    return {
        handlePress,
    }
}