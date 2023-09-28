import { ICreateFolderDto, createEventBus } from '@/shared'

export const {
    useEventBusContext: useCreateFolderContext,
    EventBusProvider: CreateFolderProvider
} = createEventBus<ICreateFolderDto>({
    pathToFolder: [],
}, {
    name: 'CreateFolder',
})
