import { createEventBus } from '../../eventBus'
import { IModal } from './type'

export const {
    useEventBusContext: useModalContext,
    EventBusProvider: ModalProvider
} = createEventBus<IModal>({
    showModal: false,
}, {
    name: 'Modal',
})
