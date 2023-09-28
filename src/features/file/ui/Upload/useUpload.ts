import { useNotification } from '@/shared'

export const useUpload = () => {
    const notification = useNotification()
    const handlePress = () => notification.info('Not implemented')
    return {
        handlePress,
    }
}