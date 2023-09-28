import { useNotification } from '@/shared'

export const useShare = () => {
    const notification = useNotification()
    const handlePress = () => notification.info('Not implemented')
    return {
        handlePress,
    }
}