import { useToast } from '@gluestack-ui/themed'
import { useMemo } from 'react'
import { INotification, Notification } from '../notification'

export const useNotification = (): INotification => {
    const toastService = useToast()
    const notification = useMemo((): INotification => new Notification(toastService), [toastService])
    return notification
}