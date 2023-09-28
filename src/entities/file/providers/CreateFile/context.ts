import { ICreateFileDto, createEventBus } from '@/shared'

export const {
    useEventBusContext: useCreateFileContext,
    EventBusProvider: CreateFileProvider
} = createEventBus<Pick<ICreateFileDto, 'fileName'>>({
    fileName: '',
}, {
    name: 'CreateFile',
})
