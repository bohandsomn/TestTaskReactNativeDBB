import { Toast, ToastDescription, VStack, useToast } from '@gluestack-ui/themed'
import {
    IBroadcastNotificationOptions,
    INotification,
    INotificationId,
    INotificationOptions,
    INotificationOptionsWithoutMessage,
    NotificationType,
    Placement,
} from './type'

export class Notification implements INotification {
    constructor(
        private readonly toastService: ReturnType<typeof useToast>,
        private readonly options?: Partial<
            Pick<INotificationOptions, 'duration'>
        >,
    ) {}

    info(message: string): INotificationId
    info(
        message: string,
        options: Partial<INotificationOptionsWithoutMessage>,
    ): INotificationId
    info(options: Partial<INotificationOptions>): INotificationId
    info(
        message: string | Partial<INotificationOptions>,
        options?: Partial<INotificationOptions>,
    ): INotificationId {
        const adaptedOptions = this.adaptOptions(message as any, options as any)
        return this.notify(adaptedOptions, NotificationType.INFO)
    }

    success(message: string): INotificationId
    success(
        message: string,
        options: Partial<INotificationOptionsWithoutMessage>,
    ): INotificationId
    success(options: Partial<INotificationOptions>): INotificationId
    success(
        message: string | Partial<INotificationOptions>,
        options?: Partial<INotificationOptionsWithoutMessage>,
    ): INotificationId {
        const adaptedOptions = this.adaptOptions(message as any, options as any)
        return this.notify(adaptedOptions, NotificationType.SUCCESS)
    }

    pending(message: string): INotificationId
    pending(
        message: string,
        options: Partial<INotificationOptionsWithoutMessage>,
    ): INotificationId
    pending(options: Partial<INotificationOptions>): INotificationId
    pending(
        message: string | Partial<INotificationOptions>,
        options?: Partial<INotificationOptionsWithoutMessage>,
    ): INotificationId {
        const adaptedOptions = this.adaptOptions(message as any, options as any)
        return this.notify(adaptedOptions, NotificationType.ATTENTION)
    }

    fail(message: string): INotificationId
    fail(
        message: string,
        options: Partial<INotificationOptionsWithoutMessage>,
    ): INotificationId
    fail(options: Partial<INotificationOptions>): INotificationId
    fail(
        message: string | Partial<INotificationOptions>,
        options?: Partial<INotificationOptionsWithoutMessage>,
    ): INotificationId {
        const adaptedOptions = this.adaptOptions(message as any, options as any)
        return this.notify(adaptedOptions, NotificationType.FAIL)
    }

    broadcast(
        messages: string[],
        options?: Partial<IBroadcastNotificationOptions>,
    ): void {
        const defaultOptions: IBroadcastNotificationOptions = {
            duration: 2000,
            placement: Placement.TOP,
            type: NotificationType.INFO,
            ...options,
        }
        messages.map((message, index) => {
            setTimeout(
                () =>
                    this.toastService.show({
                        duration: defaultOptions.duration,
                        placement: defaultOptions.placement,
                        render: () => (
                            <Toast action={defaultOptions.type}>
                                <VStack space="xs">
                                    <ToastDescription>
                                        {message}
                                    </ToastDescription>
                                </VStack>
                            </Toast>
                        ),
                    }),
                defaultOptions.duration * index,
            )
        })
    }

    close(id: INotificationId) {
        this.toastService.close(id)
    }

    private adaptOptions(message: string): INotificationOptions
    private adaptOptions(
        message: string,
        options: Partial<INotificationOptionsWithoutMessage>,
    ): INotificationOptions
    private adaptOptions(
        options: Partial<INotificationOptions>,
    ): INotificationOptions
    private adaptOptions(
        message: string | Partial<INotificationOptions>,
        options?: Partial<INotificationOptionsWithoutMessage>,
    ): INotificationOptions {
        const defaultOptions: INotificationOptions = {
            duration: this.options?.duration || 3000,
            message: '',
            placement: Placement.TOP,
        }
        if (typeof message === 'string') {
            defaultOptions.message = message
            if (typeof options === 'object' && options !== null) {
                defaultOptions.duration =
                    options.duration ?? defaultOptions.duration
                defaultOptions.placement =
                    options.placement ?? defaultOptions.placement
            }
        } else if (typeof message === 'object' && message !== null) {
            const options = message
            defaultOptions.duration =
                options.duration ?? defaultOptions.duration
            defaultOptions.message = options.message ?? defaultOptions.message
            defaultOptions.placement =
                options.placement ?? defaultOptions.placement
        }
        return defaultOptions
    }

    private notify(
        options: INotificationOptions,
        type: NotificationType,
    ): INotificationId {
        return this.toastService.show({
            duration: options.duration,
            placement: options.placement,
            render: () => (
                <Toast action={type}>
                    <VStack space="xs">
                        <ToastDescription>{options.message}</ToastDescription>
                    </VStack>
                </Toast>
            ),
        })
    }
}
