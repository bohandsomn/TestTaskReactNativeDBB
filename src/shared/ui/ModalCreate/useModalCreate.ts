import { useModalContext } from '@/shared'

export const useModalCreate = () => {
    const [showModal, setState] = useModalContext((state) => state.showModal)
    const close = () => setState({ showModal: false })
    return {
        close,
        showModal,
    }
}